
//Está parte inicial gera a palavra aleatoria assim que a janela é aberta (Incrementar um botão para gerar uma nova palvra sem ter q dar reload ou ganhar/perder).
const starWarsElementos = [
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
let CrudeWord = PalavraEscolhida.replaceAll(" ","").replaceAll("-","").toUpperCase()// simplificando a palavra para lançala para o computador ler de forma crua.

console.log(CrudeWord)
//*Fazer um filtro de caracteres que so vai permitir que letras de A a Z passem
function LetrasPermitidas() { //*Fazer um filtro de caracteres que so vai permitir que letras de A a Z passem
    //*transformar letras Minusculas em Maiusculas 
    let ChosedLetter = Input.value.trim(); 
    ChosedLetter = ChosedLetter.toUpperCase();
    console.log(ChosedLetter);
    //Fazendo a verificação se a letra é permitida, ou seja se ela bate com o array de letras. 
    if (Letters.includes(ChosedLetter)) { //É uma letra permitida
        console.log("deu boa é permitida")
        return ChosedLetter
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

  if(vidas === 0) {alert("Você perdeu!")} // criar uma função de game over
  console.log(vidas); //flag
}
const Letters = [//Array letras
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];
  //primeira parte
  //preparando a palavra para mostrala
  var ArrayPe = PalavraEscolhida.split("");//para o player
  var ArrayCW = CrudeWord.split("");//para o sistema
  for(i = 0;i < PalavraEscolhida.length; i++) {
    UserDisplay.push("_");
  }
  WordDisplay.innerHTML = UserDisplay;

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
const VidasImg = [
"./Assets/1Hearts.png",
"./Assets/2Hearts.png",
"./Assets/3Hearts.png",
"./Assets/4Hearts.png",
"./Assets/5Hearts.png",
"./Assets/6Hearts.png"
]




// ficar sempre antes da função Escolher palavras acontecer 

//Mostrando a palavra na tela 
//*Mudar o Sprite do Bonequinho conforme a quantidade de vidas  
//*Checar se a palavra escondida contem a letra sorteada 
//*Mudar do caracter secreto para a letra escolhida se certa (na posição certa)
//*Criar um Array de palavras para ser sorteado. 
//*retirar todos os espaços e caracteres especiais antes de mandar para a palavra secreta para que eles não nececitem ser digitados 
//*


function Trocar () 
{ 
  for(let i = 0; i < CrudeWord.length;i++)
  {
    if (ArrayPe[i] == ChosedLetter)
    {
      UserDisplay[i] = ChosedLetter; 
    }
  }
}



function Play () { 
  //verificando se a letra escolhida e permitida
  let ChosedLetter = LetrasPermitidas(); 
  
    if(CrudeWord.includes(ChosedLetter))//jogador acerta a letra e troca na forca se aproximando da vitoria. 
    {
      Trocar()
    }
    else{
    console.log("não contem a letra")
      VidasDecreaser();
    
    }
   
};
SumbmitBtn.addEventListener("click",Play);