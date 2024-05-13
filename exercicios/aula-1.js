// 01. Você está trabalhando no projeto Fokus, um aplicativo de cronômetro, onde será possível clicar no botão “Iniciar”, para iniciar e pausar um cronômetro. Para realizar o passo a passo, seu primeiro objetivo é implementar métodos do JavaScript que permitam selecionar os seguintes elementos do HTML:

// O documento HTML, onde serão manipulados os elementos;
// O elemento HTML, em que irá aparecer o temporizador;
// O elemento HTML, no qual as imagens de cada contexto irão trocar de posição;
// O elemento HTML, onde as frases de cada contexto irão trocar de posição.

//02. Com os elementos selecionados (conforme visto no exercício anterior), a próxima etapa é guardar cada um desses elementos em variáveis para serem utilizados posteriormente no sistema que você está desenvolvendo. Para verificar se as variáveis estão corretas, utilize o console do navegador, por exemplo: console.log(nome-da-variável).

const html = document.querySelector('html');

const timer = document.querySelector('#timer');

const imagem = document.querySelector('.app__image');

const titulo = document.querySelector('.app__title');

// 03. Já definimos vários elementos que serão modificados no projeto “Fokus”, porém essas mudanças irão acontecer a partir do click em botões. Nesta etapa do projeto, crie as variáveis dos 4 (quatro) botões que vamos utilizar:

// Botão que servirá para iniciar e pausar o temporizador;

const botaoStartPause = document.querySelector('.app__card-primary-button');

// Botão para escolher o temporizador de “Foco”;

const botaoFoco = document.querySelector('.app__card-button--foco');

// Botão para escolher o temporizador de “Descanso curto”;

const botaoDescansoCurto = document.querySelector('.app__card-button--curto');

// Botão para escolher o temporizador de “Descanso longo”.

const botaoDescansoLongo = document.querySelector('.app__card-button--longo');

// 04. Até essa etapa, você já selecionou diversos elementos e os guardou em variáveis. Agora, crie variáveis com o tempo de cada tipo de temporizador:

// Temporizador de foco com valor 1500;
// Temporizador de descanso curto com valor 300;
// Temporizador de descanso longo com valor 900.
// Esses valores serão convertidos em segundos posteriormente.

const duracaoFoco = 1500; 
const duracaoDescansoCurto = 300; 
const duracaoDescansoLongo = 900; 
