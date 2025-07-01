
//Está parte inicial gera a palavra aleatoria assim que a janela é aberta (Incrementar um botão para gerar uma nova palvra sem ter q dar reload ou ganhar/perder).
const starWarsElementos = [//*Criar um Array de palavras para ser sorteado. 
  "Luke Skywalker",
  "Darth Vader",
  "Princesa Leia Organa",
  "Han Solo",
  "Chewbacca",
  "Yoda",
  "Obi-Wan Kenobi",
  "Mestre Yoda", // Adicionei Mestre Yoda para distinção, embora seja o mesmo personagem
  "Anakin Skywalker",
  "Imperador Palpatine",
  "Millennium Falcon",
  "Estrela da Morte",
  "Sabre de Luz",
  "R2-D2",
  "C-3PO",
  "Boba Fett",
  "Grogu",
  "Mandaloriano",
  "Ahsoka Tano",
  "Kylo Ren",
  "Rey Skywalker",
  "BB-8",
  "Poe Dameron",
  "Finn",
  "Stormtroopers",
  "Jedi Order",
  "Sith",
  "Força",
  "Tatooine",
  "Coruscant"
];

let PalavraEscolhida = starWarsElementos[Math.floor(Math.random() * starWarsElementos.length)]
PalavraEscolhida = PalavraEscolhida.toUpperCase().replaceAll("-",""); 
let PalavraCrua = PalavraEscolhida.replaceAll(" ","").toUpperCase()// simplificando a palavra para lançala para o computador ler de forma crua.

console.log(PalavraCrua)
//*Fazer um filtro de caracteres que so vai permitir que letras de A a Z passem
function LetrasPermitidas() { //*Fazer um filtro de caracteres que so vai permitir que letras de A a Z passem
    //*transformar letras Minusculas em Maiusculas 
    let LetraEscolhida = Input.value.trim(); 
    LetraEscolhida = LetraEscolhida.toUpperCase();
    console.log(LetraEscolhida);
    //Fazendo a verificação se a letra é permitida, ou seja se ela bate com o array de letras. 
    if (Letters.includes(LetraEscolhida)) { //É uma letra permitida
        console.log("deu boa é permitida")
        return LetraEscolhida
    }
    else { //Não é uma letra permitida
        console.log("Foi mal irmão coloca uma letra ai!")
        return null; 
    }

}
//Secção vida: 
function VidasDecreaser () {
 //*Diminuir o número de vidas toda vez que o Player errar
  vidas = Number(vidas); 
  vidas = vidas - 1;// backend 
  LifesCounter.innerHTML = LifesCounter.innerHTML -1 //frontend
  DisplayLifes.src = VidasImg[vidas-1];//trocando as sprites de vida 
  IDspartes[vidas].style.visibility = "visible";//*Mudar o Sprite do Bonequinho conforme a quantidade de vidas  
  if(vidas === 0) {alert("Você perdeu!")} // criar uma função de game over
}
function Play () {//função responsavel pelo jogo 
  //verificando se a letra escolhida e permitida
  let LetraEscolhida = LetrasPermitidas();
  
    if(PalavraCrua.includes(LetraEscolhida))//*Checar se a palavra escondida contem a letra sorteada  
    {
      Trocar(LetraEscolhida)
    }
    else{//jogador erra a letra
    console.log("não contem a letra")
      VidasDecreaser();
      LetrasErradas.innerHTML =  LetraEscolhida + "," + LetrasErradas.innerHTML ; 
    }
   
};
const Letters = [//Array letras
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","1","2","3","8"
];
//está função coloca a letra escolhida em seu devido lugar 
function Trocar (LetraEscolhida) //*Mudar do caracter secreto para a letra escolhida se certa (na posição certa)
{ 
  for(let i = 0; i < UserDisplay.length;i++)
  {
    if (ArrayCW[i] == LetraEscolhida)
    {
      UserDisplay[i] = LetraEscolhida;
      WordDisplay.innerHTML = UserDisplay; //Mostrando a palavra na tela 
    }
  }
}

//var vidas: 
  let vidas = 6;
//Pegando cada id do html 
let UserDisplay = [];
const SumbmitBtn = document.getElementById("MySubmit"); 
const Input = document.getElementById("meuInput"); 
const WordDisplay = document.getElementById("word-display");
const Vidas = document.getElementById("lives-count")
const WrongLetters = document.getElementById("wrong-letters");
const LifesCounter = document.getElementById("lives-count");
const DisplayLifes = document.getElementById("Hearts");
const Partes = document.getElementById("Parte1");
const LetrasErradas = document.getElementById("wrong-letters");
const VidasImg = [
"./Assets/1Hearts.png",
"./Assets/2Hearts.png",
"./Assets/3Hearts.png",
"./Assets/4Hearts.png",
"./Assets/5Hearts.png",
"./Assets/6Hearts.png"
]
const IDspartes = [ 
  document.getElementById("Perna2"),
  document.getElementById("Perna1"),
  document.getElementById("Braco2"),
  document.getElementById("Braco1"),
  document.getElementById("Tronco"),
  document.getElementById("Cabeca"),
]
 //primeira parte
  //preparando a palavra para mostrala
  var ArrayPe = PalavraEscolhida.split("");//para o player
  var ArrayCW = PalavraCrua.split("");//para o sistema
  for(i = 0;i < PalavraCrua.length; i++) {
    UserDisplay.push("_");
  }
  WordDisplay.innerHTML = UserDisplay;

SumbmitBtn.addEventListener("click",Play);