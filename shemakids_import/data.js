// =====================================================
// CONTEÚDO POR FAIXA ETÁRIA
// =====================================================

export const AGE_GROUPS = {
  '3-5': { label: '3 a 5 anos', icon: '🐣', color: '#FFB347', desc: 'Pré-escola' },
  '6-8': { label: '6 a 8 anos', icon: '🌱', color: '#4ECDC4', desc: 'Fundamental I' },
  '9-12':{ label: '9 a 12 anos', icon: '🚀', color: '#A29BFE', desc: 'Fundamental II' }
};

// =====================================================
// STORIES — todas as faixas etárias
// =====================================================
export const ALL_STORIES = {

  // ---- EDUCATIVAS ----
  educativas: [
    {
      id: 'borboleta-corajosa', ageGroup: '3-5',
      title: 'A Borboleta Corajosa', emoji: '🦋', color: '#FFF3E0',
      desc: 'Lila supera o medo de voar alto.', badge: 'coragem', badgeLabel: 'Coragem',
      pages: [
        { art: '🦋', bg: '#FFF3E0', text: 'Era uma vez uma borboleta chamada Lila que tinha muito medo de voar alto. Ela sempre ficava perto das flores baixinhas.' },
        { art: '🌸', bg: '#FCE4EC', text: 'Sua amiga Mel disse: "Lila, você vai descobrir coisas lindas se tentar!" Mas Lila tremia só de pensar.' },
        { art: '🌈', bg: '#E3F2FD', text: 'Com o coração acelerado, Lila abriu suas asas coloridas e voou! O mundo visto de cima era incrível!' },
        { art: '⭐', bg: '#F3E5F5', text: 'Lila aprendeu que o medo some quando a gente tenta. Ela virou a borboleta mais feliz do jardim!', truth: '🦁 Coragem é tentar mesmo com medo. Você também consegue!' }
      ]
    },
    {
      id: 'peixinho-gentil', ageGroup: '3-5',
      title: 'O Peixinho Gentil', emoji: '🐟', color: '#E3F2FD',
      desc: 'Azul ajuda uma tartaruga presa.', badge: 'bondade', badgeLabel: 'Bondade',
      pages: [
        { art: '🐟', bg: '#E3F2FD', text: 'Azul era um peixinho pequeno que vivia no grande oceano azul.' },
        { art: '🪸', bg: '#E8F5E9', text: 'Encontrou uma tartaruga presa em algas. Todos passaram sem ajudar. Mas Azul ficou.' },
        { art: '💪', bg: '#FFF3E0', text: 'Com esforço, Azul mordeu as algas até a tartaruga ficar livre. "Obrigada, herói!" disse ela.' },
        { art: '🌊', bg: '#E0F7FA', text: 'Todos no oceano aprenderam com Azul: bondade não tem tamanho!', truth: '💙 Uma gentileza pequena pode mudar o dia de alguém. Seja gentil sempre!' }
      ]
    },
    {
      id: 'amigos-floresta', ageGroup: '6-8',
      title: 'Os Amigos da Floresta', emoji: '🌳', color: '#E8F5E9',
      desc: 'Urso, Coelho e Raposa descobrem a amizade.', badge: 'amizade', badgeLabel: 'Amizade',
      pages: [
        { art: '🐻', bg: '#FFF8E1', text: 'Urso, Coelho e Raposa eram vizinhos mas viviam sozinhos em suas tocas, sem nunca se falar.' },
        { art: '🌧️', bg: '#E3F2FD', text: 'Uma tempestade derrubou a toca do Coelho. Ele ficou com frio e assustado na chuva.' },
        { art: '🏠', bg: '#E8F5E9', text: 'Urso ofereceu abrigo e Raposa trouxe comida. Juntos construíram uma toca nova e mais bonita!' },
        { art: '🤝', bg: '#FCE4EC', text: 'Desde aquele dia os três se tornaram inseparáveis. A floresta ficou muito mais alegre!', truth: '👫 Amizade de verdade aparece nas horas difíceis. Seja um bom amigo!' }
      ]
    },
    {
      id: 'verdade-arco-iris', ageGroup: '6-8',
      title: 'A Verdade do Arco-Íris', emoji: '🌈', color: '#E8EAF6',
      desc: 'Pedro encontra uma carteira e aprende sobre honestidade.', badge: 'honestidade', badgeLabel: 'Honestidade',
      pages: [
        { art: '🌈', bg: '#E8EAF6', text: 'Pedro encontrou uma carteira cheia de dinheiro. Ninguém estava olhando...' },
        { art: '🤔', bg: '#FFF9C4', text: 'Sua mãe sempre dizia: "Fazer o certo, mesmo sem ninguém ver, é o que nos torna grandes."' },
        { art: '👴', bg: '#FFF3E0', text: 'Pedro entregou a carteira ao dono. O senhor idoso chorou de alegria e abraçou Pedro.' },
        { art: '⭐', bg: '#E8F5E9', text: 'Pedro sentiu algo quentinho no peito. A honestidade vale mais que qualquer recompensa!', truth: '🌟 Honestidade é fazer o certo mesmo quando ninguém está olhando!' }
      ]
    },
    {
      id: 'formiga-persistente', ageGroup: '9-12',
      title: 'A Formiga Persistente', emoji: '🐜', color: '#FFF8E1',
      desc: 'Como a determinação supera qualquer obstáculo.', badge: 'coragem', badgeLabel: 'Determinação',
      pages: [
        { art: '🐜', bg: '#FFF8E1', text: 'Mia era uma pequena formiga com um grande sonho: construir o formigueiro mais alto da floresta. Todos riam dela.' },
        { art: '🌧️', bg: '#E3F2FD', text: 'A chuva destruiu sua construção três vezes. Cada vez ela levantava, aprendia e recomeçava mais forte.' },
        { art: '🏗️', bg: '#E8F5E9', text: 'Depois de meses de trabalho, o formigueiro de Mia era o mais alto e resistente de todos. As outras formigas pediram ajuda para aprender.' },
        { art: '🌟', bg: '#FFF3E0', text: 'Mia ensinou: não é o tamanho que define o que conseguimos, mas a vontade de continuar tentando.', truth: '💪 Persistência é cair, levantar e tentar de novo. Os maiores sonhos são conquistados devagar!' }
      ]
    },
    {
      id: 'carta-para-o-futuro', ageGroup: '9-12',
      title: 'A Carta para o Futuro', emoji: '✉️', color: '#E8EAF6',
      desc: 'Lucas aprende sobre responsabilidade e escolhas.', badge: 'respeito', badgeLabel: 'Responsabilidade',
      pages: [
        { art: '✉️', bg: '#E8EAF6', text: 'Lucas tinha 11 anos quando seu avô lhe deu uma carta: "Abra em 10 anos." Dentro havia uma pergunta: Que tipo de pessoa você quer ser?' },
        { art: '🤔', bg: '#FFF9C4', text: 'A partir daquele dia, Lucas pensava em cada escolha: "Isso é o que a pessoa que quero ser faria?" Às vezes era difícil.' },
        { art: '🌱', bg: '#E8F5E9', text: 'Ele ajudou o colega bullied, disse a verdade quando podia mentir e estudou quando queria brincar.' },
        { art: '🏆', bg: '#F3E5F5', text: 'Aos 21 anos, abriu a carta e sorriu. Tinha se tornado exatamente a pessoa que sonhou.', truth: '🌟 Cada pequena escolha hoje constrói a pessoa que você será amanhã. Escolha bem!' }
      ]
    }
  ],

  // ---- AVENTURAS ----
  aventuras: [
    {
      id: 'tesouro-mar', ageGroup: '6-8',
      title: 'O Tesouro do Fundo do Mar', emoji: '🌊', color: '#E0F7FA',
      desc: 'Marina mergulha fundo com coragem.', badge: 'coragem', badgeLabel: 'Coragem',
      pages: [
        { art: '🤿', bg: '#E0F7FA', text: 'Marina sempre sonhou em mergulhar fundo. Todos diziam que era perigoso. Mas ela estudou e se preparou.' },
        { art: '🐠', bg: '#E3F2FD', text: 'No fundo do mar encontrou um mapa misterioso dentro de uma concha brilhante.' },
        { art: '💎', bg: '#F3E5F5', text: 'O tesouro era uma coleção de conchas raras jamais vistas. Um tesouro de conhecimento para o mundo!' },
        { art: '🌟', bg: '#FFF9C4', text: 'Ela compartilhou com cientistas do mundo inteiro. Sua coragem trouxe descobertas para toda a humanidade!', truth: '🔬 O maior tesouro é o conhecimento. Explore, aprenda e compartilhe!' }
      ]
    },
    {
      id: 'montanha-estrelas', ageGroup: '6-8',
      title: 'A Montanha das Estrelas', emoji: '⛰️', color: '#F3E5F5',
      desc: 'Pedro e Ana sobem juntos e aprendem respeito.', badge: 'respeito', badgeLabel: 'Respeito',
      pages: [
        { art: '⛰️', bg: '#F3E5F5', text: 'Pedro e Ana queriam ver as estrelas do alto da montanha. Mas Pedro era rápido demais e deixava Ana para trás.' },
        { art: '😢', bg: '#FCE4EC', text: '"Você nunca me espera!" Ana chorou. Pedro parou. Nunca tinha percebido o quanto isso doía.' },
        { art: '🤝', bg: '#E8F5E9', text: 'De mãos dadas, subiram devagar juntos. No topo, as estrelas eram ainda mais bonitas.' },
        { art: '🌌', bg: '#E8EAF6', text: '"Chegamos juntos", disse Pedro. "E foi melhor assim", completou Ana com um sorriso.', truth: '🌟 Respeitar é caminhar no ritmo de quem você ama. Juntos chegamos mais longe!' }
      ]
    },
    {
      id: 'floresta-encantada', ageGroup: '3-5',
      title: 'A Floresta Encantada', emoji: '🌲', color: '#E8F5E9',
      desc: 'Três amigos se perdem e aprendem a trabalhar juntos.', badge: 'amizade', badgeLabel: 'Cooperação',
      pages: [
        { art: '🌲', bg: '#E8F5E9', text: 'Tomás, Bia e Bento entraram na floresta encantada. De repente, perceberam que estavam perdidos!' },
        { art: '😱', bg: '#FFF9C4', text: 'Tomás queria ir para a esquerda. Bia para a direita. Bento ficou quieto no meio.' },
        { art: '🦜', bg: '#E0F7FA', text: 'Um papagaio colorido disse: "Juntos vocês são mais fortes! Escutem um ao outro e acharão o caminho!"' },
        { art: '🏠', bg: '#FFF3E0', text: 'Cada um usou seu talento especial e juntos encontraram o caminho para casa sãos e salvos!', truth: '🤝 Trabalhar em equipe e ouvir os amigos nos leva mais longe do que ir sozinho!' }
      ]
    },
    {
      id: 'deserto-desafios', ageGroup: '9-12',
      title: 'O Deserto dos Desafios', emoji: '🏜️', color: '#FFF8E1',
      desc: 'Sofia descobre sua força interior.', badge: 'coragem', badgeLabel: 'Resiliência',
      pages: [
        { art: '🏜️', bg: '#FFF8E1', text: 'Sofia se perdeu no deserto durante uma expedição científica. O sol estava forte e o medo tomava conta.' },
        { art: '🌵', bg: '#E8F5E9', text: 'Ela lembrou do avô: "O deserto tem segredos. Observe os animais — eles sabem onde há água."' },
        { art: '🦅', bg: '#E0F7FA', text: 'Uma águia voava em círculos. Sofia a seguiu. Havia orvalho numa rocha e um caminho de volta!' },
        { art: '🌅', bg: '#FFF3E0', text: 'De volta ao acampamento, Sofia entendeu: dentro de cada pessoa existe uma força enorme esperando ser descoberta.', truth: '💪 Quando as coisas ficam difíceis: respire, pense e use o que você sabe. A solução está em você!' }
      ]
    }
  ],

  // ---- BÍBLICAS ----
  biblicas: [
    {
      id: 'davi-golias', ageGroup: '3-5',
      title: 'Davi e Golias', emoji: '⚔️', color: '#FFF9C4',
      desc: 'Um menino com fé vence um gigante.', badge: 'coragem', badgeLabel: 'Coragem',
      pages: [
        { art: '👦', bg: '#FFF9C4', text: 'Davi era um menino pequeno que cuidava de ovelhas com muito amor. Mas tinha um coração enorme cheio de fé em Deus.' },
        { art: '⚔️', bg: '#FFEBEE', text: 'O gigante Golias assustava o povo de Israel. Nenhum soldado tinha coragem. Davi disse: "Eu vou!"' },
        { art: '🪨', bg: '#E8F5E9', text: 'Com uma pedra e muita fé, Davi acertou o gigante. O povo ficou maravilhado!' },
        { art: '🙏', bg: '#F3E5F5', text: 'Davi ganhou não porque era forte, mas porque tinha fé e confiava em Deus.', truth: '⭐ Com fé, até os gigantes da vida podem ser vencidos!' }
      ]
    },
    {
      id: 'bom-samaritano', ageGroup: '3-5',
      title: 'O Bom Samaritano', emoji: '💛', color: '#FFF3E0',
      desc: 'A história do amor ao próximo.', badge: 'amor', badgeLabel: 'Amor ao Próximo',
      pages: [
        { art: '🚶', bg: '#FFF9C4', text: 'Um homem foi assaltado e deixado ferido à beira da estrada. Ele precisava muito de ajuda.' },
        { art: '😔', bg: '#FFEBEE', text: 'Duas pessoas passaram e continuaram caminhando sem ajudar.' },
        { art: '💛', bg: '#FFF3E0', text: 'Um samaritano parou, tratou as feridas e pagou por seu cuidado. Ele amou o próximo de verdade!' },
        { art: '🤗', bg: '#E8F5E9', text: 'Jesus disse: nosso próximo é qualquer pessoa que precisar de nós.', truth: '❤️ Amar ao próximo é ajudar quem precisa, sem esperar nada em troca!' }
      ]
    },
    {
      id: 'noe-arca', ageGroup: '6-8',
      title: 'Noé e a Arca', emoji: '🌈', color: '#E0F7FA',
      desc: 'A fé de Noé salvou tudo.', badge: 'fé', badgeLabel: 'Fé',
      pages: [
        { art: '🌧️', bg: '#E3F2FD', text: 'Deus pediu a Noé para construir uma arca enorme. Todos riam. Mas Noé obedeceu com fé.' },
        { art: '🐘', bg: '#E8F5E9', text: 'Dois de cada animal foram entrando: elefantes, girafas, leões... Era um espetáculo!' },
        { art: '🌊', bg: '#E0F7FA', text: 'A chuva veio forte por 40 dias. Mas dentro da arca todos estavam seguros e protegidos.' },
        { art: '🌈', bg: '#FFF9C4', text: 'Ao parar a chuva, um lindo arco-íris apareceu: a promessa de Deus para sempre!', truth: '🌈 Quando Deus faz uma promessa, Ele sempre cumpre. Confie mesmo quando parece impossível!' }
      ]
    },
    {
      id: 'jonas-peixao', ageGroup: '6-8',
      title: 'Jonas e o Peixão', emoji: '🐋', color: '#E3F2FD',
      desc: 'Aprender a obedecer com amor.', badge: 'respeito', badgeLabel: 'Obediência',
      pages: [
        { art: '⛵', bg: '#E3F2FD', text: 'Deus pediu a Jonas que fosse a Nínive. Mas Jonas teve medo e tomou um navio na direção oposta.' },
        { art: '🌊', bg: '#E0F7FA', text: 'Uma tempestade enorme sacudiu o mar. Jonas sabia que era por causa de sua fuga. Pediu para ser jogado ao mar.' },
        { art: '🐋', bg: '#E8EAF6', text: 'Um peixão engoliu Jonas! Por três dias Jonas orou, se arrependeu e prometeu obedecer.' },
        { art: '🌅', bg: '#FFF9C4', text: 'O peixão jogou Jonas na praia. Desta vez ele foi a Nínive e cumpriu sua missão!', truth: '🕊️ Quando Deus nos pede algo, o melhor é obedecer. Ele sempre sabe o melhor para nós!' }
      ]
    },
    {
      id: 'daniel-leoes', ageGroup: '9-12',
      title: 'Daniel na Cova dos Leões', emoji: '🦁', color: '#FFF3E0',
      desc: 'Fé mais forte que qualquer leão.', badge: 'fé', badgeLabel: 'Fé',
      pages: [
        { art: '🙏', bg: '#FFF3E0', text: 'Daniel orava a Deus três vezes por dia. Isso incomodava seus inimigos, que criaram uma lei para prejudicá-lo.' },
        { art: '📜', bg: '#FFF9C4', text: 'A lei proibia orações, mas Daniel continuou orando. Sua fé era mais forte que qualquer medo.' },
        { art: '🦁', bg: '#FFEBEE', text: 'Daniel foi jogado na cova dos leões. Mas Deus enviou um anjo para fechar a boca deles. Daniel saiu ileso!' },
        { art: '🌟', bg: '#E8F5E9', text: 'O rei declarou que o Deus de Daniel era o Deus verdadeiro. A fé de Daniel convenceu um reino inteiro!', truth: '🦁 A fé em Deus é mais forte que qualquer medo. Ore sempre — Deus está com você!' }
      ]
    },
    {
      id: 'jose-casaco', ageGroup: '9-12',
      title: 'José e o Casaco Colorido', emoji: '🌈', color: '#FCE4EC',
      desc: 'O perdão que transformou uma família.', badge: 'amor', badgeLabel: 'Perdão',
      pages: [
        { art: '🧥', bg: '#FCE4EC', text: 'José era o filho favorito de Jacó e ganhou um casaco com todas as cores. Seus irmãos ficaram com ciúme.' },
        { art: '😢', bg: '#E3F2FD', text: 'Os irmãos venderam José como escravo para o Egito. Parecia que tudo havia terminado.' },
        { art: '👑', bg: '#FFF9C4', text: 'Mas Deus estava com José. Com sabedoria, ele se tornou o segundo homem mais poderoso do Egito!' },
        { art: '🤗', bg: '#E8F5E9', text: 'Quando os irmãos pediram ajuda, José os abraçou com lágrimas: "Eu perdoo. Foi Deus que me trouxe aqui!"', truth: '💜 Perdoar é difícil, mas é o mais bonito que podemos fazer. O perdão cura o coração!' }
      ]
    },
    {
      id: 'rainha-ester', ageGroup: '9-12',
      title: 'A Corajosa Rainha Ester', emoji: '👸', color: '#FCE4EC',
      desc: 'Uma jovem que salvou seu povo com coragem.', badge: 'coragem', badgeLabel: 'Coragem',
      pages: [
        { art: '👸', bg: '#FCE4EC', text: 'Ester era uma jovem judia que se tornou rainha da Pérsia. Ela tinha um segredo: era filha do povo judeu.' },
        { art: '⚠️', bg: '#FFEBEE', text: 'Um homem mau chamado Hamã planejava matar todos os judeus. Ester era a única que podia salvar seu povo.' },
        { art: '🙏', bg: '#F3E5F5', text: 'Entrar na presença do rei sem convite era punido com morte. Mas Ester disse: "Se morrer, morro. Mas vou tentar!"' },
        { art: '🏆', bg: '#E8F5E9', text: 'O rei ouviu Ester, o plano mau foi desfeito e o povo judeu foi salvo pela coragem de uma jovem!', truth: '👸 Às vezes somos colocados em lugares especiais para fazer o bem. Seja corajoso na hora certa!' }
      ]
    }
  ]
};

// =====================================================
// QUIZ POR FAIXA ETÁRIA
// =====================================================
export const QUIZZES = {
  '3-5': [
    { q: '🤔 O que fazemos quando vemos alguém chorando?', opts: ['Abraçamos e consolamos', 'Rimos', 'Saímos correndo', 'Ignoramos'], c: 0, exp: 'Confortar é mostrar amor! 💛' },
    { q: '🤝 O que é um bom amigo?', opts: ['Quem briga sempre', 'Quem ajuda e cuida', 'Quem pega os brinquedos', 'Quem fica sozinho'], c: 1, exp: 'Amigos se ajudam! 👫' },
    { q: '🌟 O que fazemos depois de ganhar algo de alguém?', opts: ['Ficamos calados', 'Dizemos obrigado!', 'Pedimos mais', 'Jogamos fora'], c: 1, exp: 'Gratidão é muito importante! 🙏' },
    { q: '🐾 Como tratamos os animais?', opts: ['Com carinho e cuidado', 'Com maldade', 'Ignorando', 'Com susto'], c: 0, exp: 'Animais merecem amor! 🐾' },
    { q: '💪 O que é ser corajoso?', opts: ['Não ter medo nunca', 'Tentar mesmo com medo', 'Ser muito grande', 'Nunca chorar'], c: 1, exp: 'Coragem é tentar mesmo assustado!' }
  ],
  '6-8': [
    { q: '🦁 Coragem significa...', opts: ['Não ter medo de nada', 'Tentar mesmo com medo', 'Ser o mais forte', 'Nunca pedir ajuda'], c: 1, exp: 'Coragem é agir apesar do medo! 💪' },
    { q: '🌟 Se achar uma carteira no chão, você...', opts: ['Fica com o dinheiro', 'Entrega a um adulto', 'Joga fora', 'Corre embora'], c: 1, exp: 'Honestidade é sempre fazer o certo!' },
    { q: '😤 Quando ficamos com raiva, o melhor é...', opts: ['Bater', 'Gritar muito', 'Respirar e conversar', 'Quebrar coisas'], c: 2, exp: 'Controlar emoções é maturidade! 🧘' },
    { q: '👂 Quando alguém está falando, devemos...', opts: ['Interromper', 'Olhar o celular', 'Ouvir com atenção', 'Brincar'], c: 2, exp: 'Ouvir com atenção é respeito!' },
    { q: '🌱 O que é gratidão?', opts: ['Pedir mais', 'Agradecer pelo que temos', 'Reclamar de tudo', 'Ignorar as bênçãos'], c: 1, exp: 'Gratidão atrai mais coisas boas! 🙏' },
    { q: '🤔 Amizade verdadeira é...', opts: ['Só brincar', 'Estar presente nos momentos difíceis', 'Guardar tudo', 'Fazer o que quiser'], c: 1, exp: 'Amizade é presença! 💙' }
  ],
  '9-12': [
    { q: '🧠 Responsabilidade significa...', opts: ['Fazer o que quiser', 'Cumprir seus deveres e honrar compromissos', 'Culpar os outros', 'Evitar tarefas'], c: 1, exp: 'Ser responsável é cumprir o que prometemos!' },
    { q: '💬 Comunicação saudável inclui...', opts: ['Falar sem ouvir', 'Gritar para impor', 'Ouvir e expressar com respeito', 'Ignorar o outro'], c: 2, exp: 'Comunicação respeitosa resolve conflitos!' },
    { q: '🌍 Cuidar do meio ambiente é um ato de...', opts: ['Inconveniência', 'Amor ao próximo e às futuras gerações', 'Obrigação sem sentido', 'Fraqueza'], c: 1, exp: 'Cuidar do planeta é amar quem vem depois!' },
    { q: '💜 Perdoar alguém que nos machucou...', opts: ['É sinal de fraqueza', 'Significa esquecer tudo', 'Nos liberta e nos faz crescer', 'É impossível'], c: 2, exp: 'Perdão liberta quem perdoa!' },
    { q: '🔍 Pensamento crítico serve para...', opts: ['Criticar todos', 'Questionar e analisar antes de concluir', 'Desafiar professores', 'Desconfiar de tudo'], c: 1, exp: 'Pensar antes de concluir é sabedoria!' },
    { q: '🌟 Liderança verdadeira é...', opts: ['Mandar nos outros', 'Servir e inspirar', 'Ter o poder', 'Ser o mais popular'], c: 1, exp: 'Um líder de verdade serve e inspira!' },
    { q: '🤝 Empatia significa...', opts: ['Sentir pena', 'Se colocar no lugar do outro', 'Ignorar problemas alheios', 'Dar conselhos sem pedir'], c: 1, exp: 'Empatia é entender como o outro se sente!' }
  ]
};

// =====================================================
// MEMORY PAIRS POR FAIXA ETÁRIA
// =====================================================
export const MEMORY_PAIRS = {
  '3-5':  ['🦋','🐟','🌈','⭐','🐣','🌸','💛','🎈'],
  '6-8':  ['🦁','🐋','🌈','⚔️','🙏','👑','🕊️','⭐'],
  '9-12': ['📖','🏆','🌍','💡','🎯','⚖️','🔬','🌱']
};

// =====================================================
// WORD GAME POR FAIXA ETÁRIA
// =====================================================
export const WORD_GAMES = {
  '3-5': [
    { word: 'AMOR',     hint: '❤️ O que sentimos pelos nossos amigos e família' },
    { word: 'PAZ',      hint: '🕊️ Quando todos vivem em harmonia' },
    { word: 'BOM',      hint: '😊 Quando fazemos coisas certas' },
    { word: 'AJUDA',    hint: '🤝 O que damos a quem precisa' }
  ],
  '6-8': [
    { word: 'CORAGEM',  hint: '💪 Tentar mesmo com medo' },
    { word: 'AMIZADE',  hint: '👫 Laço especial entre pessoas que se cuidam' },
    { word: 'RESPEITO', hint: '🌟 Como devemos tratar todos' },
    { word: 'BONDADE',  hint: '💛 Fazer bem sem esperar nada' },
    { word: 'PERDAO',   hint: '💜 Escolher não guardar mágoa' }
  ],
  '9-12': [
    { word: 'GRATIDAO',     hint: '🙏 Agradecer pelas bênçãos recebidas' },
    { word: 'HONESTIDADE',  hint: '✨ Falar a verdade sempre' },
    { word: 'PERSEVERANCA', hint: '🏃 Não desistir diante dos obstáculos' },
    { word: 'SOLIDARIEDADE',hint: '🤲 Ajudar o próximo em necessidade' },
    { word: 'EMPATIA',      hint: '💙 Se colocar no lugar do outro' },
    { word: 'RESPONSABILIDADE', hint: '⚖️ Cumprir com seus deveres' }
  ]
};

// =====================================================
// COUNT GAME
// =====================================================
export const COUNT_ROUNDS = [
  { scene: '🐑🐑🐑🐑🐑🐑🐑', q: 'Quantas ovelhas Davi cuidava?', answer: 7, opts: [5,7,8,9] },
  { scene: '🐟🐟🐟🐟🐟',     q: 'Quantos pães havia na cesta?',   answer: 5, opts: [3,5,6,7] },
  { scene: '🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟', q: 'Quantas estrelas aparecem?', answer: 12, opts: [10,11,12,14] },
  { scene: '🐘🐘🦒🦒🦁🦁🐦🐦', q: 'Quantos animais entraram na arca (pares)?', answer: 8, opts: [6,7,8,9] },
  { scene: '🌈🌈🌈🌈🌈🌈🌈', q: 'Quantos arco-íris você vê?', answer: 7, opts: [5,6,7,8] }
];

// =====================================================
// MATCH GAME
// =====================================================
export const MATCH_DATA = {
  situations: ['Vi alguém chorando', 'Errei e magoei alguém', 'Ganhei algo especial', 'Um amigo está com dificuldade', 'Vi lixo no chão'],
  values:     ['Amor ao próximo', 'Pedido de desculpas', 'Gratidão', 'Amizade', 'Respeito ao ambiente'],
  correct:    { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4 }
};

// =====================================================
// ORDER GAME
// =====================================================
export const ORDER_STORIES = [
  {
    title: 'Jonas e o Peixão',
    steps: ['🙏 Jonas orou dentro do peixão','⛵ Jonas fugiu de navio','🌅 Jonas foi a Nínive','🌊 Jonas caiu no mar','🐋 O peixão engoliu Jonas'],
    correct: [1,3,4,0,2]
  },
  {
    title: 'Davi e Golias',
    steps: ['🪨 Davi atirou a pedra','👦 Davi cuidava de ovelhas','⚔️ Golias ameaçava o povo','🏆 Israel foi salvo','💪 Davi se ofereceu para lutar'],
    correct: [1,2,4,0,3]
  },
  {
    title: 'José e o Casaco',
    steps: ['🤗 José perdoou os irmãos','👑 José se tornou governador','🧥 José ganhou o casaco','😢 Irmãos venderam José','🌱 José trabalhou no Egito'],
    correct: [2,3,4,1,0]
  }
];

// Avatares disponíveis para perfis infantis
export const AVATARS = ['🦋','🐯','🦁','🐬','🦄','🐸','🦊','🐼','🐧','🦅','🌻','⭐','🚀','🎈','🌈'];
