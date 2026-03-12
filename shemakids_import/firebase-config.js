// =====================================================
// FIREBASE CONFIGURATION
// Substitua estes valores pelos do seu projeto Firebase
// Console: https://console.firebase.google.com
// =====================================================
const FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// =====================================================
// FIREBASE INITIALIZATION
// =====================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc, collection, addDoc, query, where, getDocs, orderBy, serverTimestamp }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const app = initializeApp(FIREBASE_CONFIG);
export const auth = getAuth(app);
export const db = getFirestore(app);

// =====================================================
// AUTH HELPERS
// =====================================================
export async function registerUser(email, password, name, role = 'parent') {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  await setDoc(doc(db, 'users', cred.user.uid), {
    name, email, role,
    createdAt: serverTimestamp(),
    children: []
  });
  return cred.user;
}

export async function loginUser(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}

export async function logoutUser() {
  await signOut(auth);
}

export function watchAuth(callback) {
  return onAuthStateChanged(auth, callback);
}

// =====================================================
// CHILDREN PROFILES
// =====================================================
export async function createChildProfile(parentUid, childData) {
  const ref = await addDoc(collection(db, 'children'), {
    parentUid,
    name: childData.name,
    age: childData.age,
    ageGroup: childData.ageGroup, // '3-5' | '6-8' | '9-12'
    avatar: childData.avatar || '🦋',
    createdAt: serverTimestamp(),
    totalPoints: 0,
    level: 1,
    storiesRead: [],
    gamesPlayed: 0,
    achievements: []
  });
  const parentRef = doc(db, 'users', parentUid);
  const parentSnap = await getDoc(parentRef);
  const children = parentSnap.data().children || [];
  await updateDoc(parentRef, { children: [...children, ref.id] });
  return ref.id;
}

export async function getChildProfile(childId) {
  const snap = await getDoc(doc(db, 'children', childId));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

export async function getParentChildren(parentUid) {
  const q = query(collection(db, 'children'), where('parentUid', '==', parentUid));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// =====================================================
// PROGRESS TRACKING
// =====================================================
export async function saveProgress(childId, activity) {
  // activity: { type: 'story'|'game', id, title, score, maxScore, timeSpent, ageGroup }
  await addDoc(collection(db, 'progress'), {
    childId,
    ...activity,
    completedAt: serverTimestamp()
  });

  const childRef = doc(db, 'children', childId);
  const childSnap = await getDoc(childRef);
  const data = childSnap.data();

  const points = activity.score ? Math.round((activity.score / activity.maxScore) * 10) : 5;
  const newTotal = (data.totalPoints || 0) + points;
  const newLevel = Math.floor(newTotal / 50) + 1;

  const updates = {
    totalPoints: newTotal,
    level: newLevel,
    gamesPlayed: (data.gamesPlayed || 0) + 1
  };

  if (activity.type === 'story' && !data.storiesRead?.includes(activity.id)) {
    updates.storiesRead = [...(data.storiesRead || []), activity.id];
  }

  // Check achievements
  const newAchievements = checkAchievements(data, updates, activity);
  if (newAchievements.length > 0) {
    updates.achievements = [...(data.achievements || []), ...newAchievements];
  }

  await updateDoc(childRef, updates);
  return { points, newLevel, newAchievements };
}

export async function getChildProgress(childId, limitDays = 30) {
  const q = query(
    collection(db, 'progress'),
    where('childId', '==', childId),
    orderBy('completedAt', 'desc')
  );
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// =====================================================
// ACHIEVEMENTS
// =====================================================
export const ACHIEVEMENTS = {
  first_story:   { id: 'first_story',   icon: '📖', title: 'Primeira História!',     desc: 'Leu sua primeira história' },
  story_5:       { id: 'story_5',       icon: '📚', title: 'Leitor Dedicado',         desc: 'Leu 5 histórias' },
  story_20:      { id: 'story_20',      icon: '🏛️', title: 'Biblioteca Viva',         desc: 'Leu 20 histórias' },
  game_10:       { id: 'game_10',       icon: '🎮', title: 'Gamer dos Valores',       desc: 'Jogou 10 vezes' },
  perfect_quiz:  { id: 'perfect_quiz',  icon: '🌟', title: 'Quiz Perfeito!',          desc: 'Acertou tudo no quiz' },
  level_5:       { id: 'level_5',       icon: '⭐', title: 'Nível 5 Alcançado',       desc: 'Chegou ao nível 5' },
  level_10:      { id: 'level_10',      icon: '🏆', title: 'Campeão do Conhecimento', desc: 'Chegou ao nível 10' },
  bible_fan:     { id: 'bible_fan',     icon: '✝️', title: 'Amigo da Bíblia',         desc: 'Leu 5 histórias bíblicas' },
  courage:       { id: 'courage',       icon: '🦁', title: 'Coração Corajoso',        desc: 'Completou histórias de coragem' },
};

function checkAchievements(oldData, newData, activity) {
  const earned = [];
  const existing = oldData.achievements || [];
  const has = id => existing.includes(id);

  const storiesRead = newData.storiesRead?.length || (oldData.storiesRead?.length || 0);
  const gamesPlayed = newData.gamesPlayed || 0;
  const level = newData.level || 1;

  if (!has('first_story') && storiesRead >= 1) earned.push('first_story');
  if (!has('story_5') && storiesRead >= 5) earned.push('story_5');
  if (!has('story_20') && storiesRead >= 20) earned.push('story_20');
  if (!has('game_10') && gamesPlayed >= 10) earned.push('game_10');
  if (!has('level_5') && level >= 5) earned.push('level_5');
  if (!has('level_10') && level >= 10) earned.push('level_10');
  if (!has('perfect_quiz') && activity.type === 'game' && activity.score === activity.maxScore) earned.push('perfect_quiz');

  return earned;
}
