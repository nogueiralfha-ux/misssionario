# ✨ Mundo Encantado — Guia de Configuração

Aplicativo web educativo para crianças com histórias, jogos, valores cristãos e painel para os pais.

---

## 📁 Estrutura dos Arquivos

```
mundo-encantado/
├── index.html          ← App principal (toda a interface)
├── manifest.json       ← Configuração PWA (instalar no celular)
├── sw.js               ← Service Worker (modo offline)
├── js/
│   ├── firebase-config.js  ← Referência de funções Firebase
│   └── data.js             ← Todos os dados e conteúdos
└── README.md           ← Este arquivo
```

---

## 🚀 Como Configurar o Firebase (Passo a Passo)

### 1. Criar o Projeto Firebase

1. Acesse **https://console.firebase.google.com**
2. Clique em **"Adicionar projeto"**
3. Dê um nome (ex: `mundo-encantado`)
4. Desative o Google Analytics (opcional) → **Criar projeto**

### 2. Configurar Authentication

1. No painel lateral → **Build → Authentication**
2. Clique em **"Começar"**
3. Aba **"Sign-in method"** → Ative **"Email/senha"**
4. Salvar

### 3. Configurar Firestore Database

1. No painel lateral → **Build → Firestore Database**
2. Clique em **"Criar banco de dados"**
3. Escolha **"Modo de produção"**
4. Selecione a região: **southamerica-east1 (São Paulo)** ✅
5. Criar

### 4. Configurar Regras do Firestore

No Firestore → aba **"Regras"**, cole:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Usuários: só o próprio pode ler/escrever
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // Crianças: só o pai pode ver/editar
    match /children/{childId} {
      allow read, write: if request.auth != null &&
        resource.data.parentUid == request.auth.uid;
      allow create: if request.auth != null;
    }

    // Progresso: só o pai da criança pode ver
    match /progress/{progressId} {
      allow create: if request.auth != null;
      allow read: if request.auth != null;
    }
  }
}
```

Clique em **Publicar**.

### 5. Obter as Credenciais do App

1. No painel do Firebase → Ícone de engrenagem ⚙️ → **Configurações do projeto**
2. Role para baixo até **"Seus aplicativos"**
3. Clique no ícone `</>` (Web)
4. Dê um apelido (ex: `mundo-encantado-web`)
5. **NÃO** ative o Firebase Hosting agora
6. Clique em **"Registrar app"**
7. Você verá um código como este:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "meu-projeto.firebaseapp.com",
  projectId: "meu-projeto",
  storageBucket: "meu-projeto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc..."
};
```

### 6. Colar as Credenciais no index.html

Abra o `index.html` e procure por:

```javascript
const FIREBASE_CONFIG = {
  apiKey:            "COLE_SUA_API_KEY_AQUI",
  authDomain:        "COLE_SEU_AUTH_DOMAIN_AQUI",
  projectId:         "COLE_SEU_PROJECT_ID_AQUI",
  storageBucket:     "COLE_SEU_STORAGE_BUCKET_AQUI",
  messagingSenderId: "COLE_SEU_SENDER_ID_AQUI",
  appId:             "COLE_SEU_APP_ID_AQUI"
};
```

Substitua os valores pelos seus.

---

## 🌐 Como Publicar (Hosting Gratuito)

### Opção A — Firebase Hosting (Recomendado)

```bash
# Instale o Firebase CLI
npm install -g firebase-tools

# Faça login
firebase login

# Inicialize o projeto (na pasta do projeto)
firebase init hosting

# Responda:
# - Use an existing project → selecione seu projeto
# - Public directory: . (ponto)
# - Single-page app: No
# - Overwrite index.html: No

# Publique
firebase deploy --only hosting
```

Seu app estará em: `https://SEU-PROJETO.web.app`

### Opção B — Netlify (Arraste e Solte)

1. Acesse **https://netlify.com** e crie uma conta gratuita
2. No painel, clique em **"Add new site → Deploy manually"**
3. Arraste a pasta `mundo-encantado` inteira para a área indicada
4. Pronto! Você receberá uma URL automática.

### Opção C — GitHub Pages

1. Suba os arquivos para um repositório GitHub
2. Settings → Pages → Source: main branch
3. Seu site ficará em `https://seuusuario.github.io/mundo-encantado`

---

## 📱 Instalar como App no Celular (PWA)

### Android (Chrome):
1. Abra o site no Chrome
2. Aparecerá um banner "Adicionar à tela inicial"
3. Ou: Menu (⋮) → "Adicionar à tela inicial"

### iPhone (Safari):
1. Abra o site no Safari
2. Toque no botão Compartilhar (□↑)
3. "Adicionar à Tela de Início"

---

## 🔧 Narração por Voz (TTS)

O app usa a **Web Speech API** nativa do navegador.

- **Funciona em:** Chrome, Edge, Firefox, Safari iOS
- **Idioma:** Português brasileiro (pt-BR) automático
- Para melhor qualidade: Chrome no Android tem as melhores vozes

---

## 📊 Estrutura do Banco de Dados (Firestore)

```
/users/{uid}
  name: string
  email: string
  role: "parent"
  children: string[]

/children/{childId}
  parentUid: string
  name: string
  age: number
  ageGroup: "3-5" | "6-8" | "9-12"
  avatar: string (emoji)
  totalPoints: number
  level: number
  storiesRead: string[]
  gamesPlayed: number
  achievements: string[]

/progress/{progressId}
  childId: string
  type: "story" | "game"
  actId: string
  title: string
  score: number
  maxScore: number
  points: number
  completedAt: Timestamp
```

---

## 🎮 Funcionalidades

| Funcionalidade | Status |
|---|---|
| Histórias Educativas (3 faixas etárias) | ✅ |
| Histórias de Aventura | ✅ |
| Histórias Bíblicas (7 histórias) | ✅ |
| Quiz dos Valores (por faixa etária) | ✅ |
| Jogo da Memória | ✅ |
| Descubra a Palavra (forca) | ✅ |
| Contando com Deus | ✅ |
| Liga os Valores | ✅ |
| Ordem da História | ✅ |
| Narração por Voz (TTS) | ✅ |
| Perfis de crianças | ✅ |
| Pontos e níveis | ✅ |
| Conquistas | ✅ |
| Painel dos Pais | ✅ |
| Histórico de atividades | ✅ |
| Modo offline (PWA) | ✅ |
| Instalável no celular | ✅ |

---

## 💡 Próximos Passos Sugeridos

- **Mais conteúdo:** Adicionar mais histórias e jogos no `data.js`
- **Imagens:** Substituir emojis por ilustrações profissionais
- **Voz premium:** Integrar Google Cloud Text-to-Speech para vozes mais naturais
- **Monetização:** Conteúdo premium via Stripe
- **Analytics:** Firebase Analytics para entender o engajamento
- **Notificações:** Firebase Cloud Messaging para lembretes diários

---

## 📧 Suporte

Configurado e desenvolvido com assistência de IA.
Para dúvidas sobre Firebase: **https://firebase.google.com/docs**
