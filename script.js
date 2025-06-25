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
let PalavraEscolhida = starWarsElementos[Math.floor(Math.random() * 30)] 
let CrudeWord = PalavraEscolhida.replaceAll(" ","").replaceAll("-","").toUpperCase()// simplificando a palavra para lançala para o computador ler de forma crua.

//Pegando cada id do html 
const SumbmitBtn = document.getElementById("MySubmit"); 
const Input = document.getElementById("meuInput"); 
const WordDisplay = document.getElementById("word-display");
const Vidas = document.getElementById("lives-count")
const WrongLetters = document.getElementById("wrong-letters");
//Criando as letras permitidas 
const Letters = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];
//Adicionando Elementos para serem sorteados 

//*Fazer um filtro de caracteres que so vai permitir que letras de A a Z passem
function LetrasPermitidas() { //*Fazer um filtro de caracteres que so vai permitir que letras de A a Z passem
    //*transformar letras Minusculas em Maiusculas 
    let ChosedLetter = Input.value; 
    ChosedLetter = ChosedLetter.toUpperCase();
    console.log(ChosedLetter);
    //Fazendo a verificação se a letra é permitida, ou seja se ela bate com o array de letras. 
    if (Letters.includes(ChosedLetter)) { //É uma letra permitida
        console.log("deu boa é permitida")
        return ChosedLetter
    }
    else { //Não é uma letra permitida
        console.log("Foi mal irmão coloca uma letra ai!")
    }

}
 //*Diminuir o número de vidas toda vez que o Player errar
function VidasDecreaser () {


    if(Vidas.value === 0) {GameOver} // criar uma fução de game over 
}

function EscolherPalavra() { //Sorteando a palavra do jogo 

    
}
//var para a palavra escolhida: 
;// ficar sempre antes da função Escolher palavras acontecer 
function Play () { 

















};








//*Checar se ainda tem vidas o suficiente pra jogar se não game over (if vidas == 0 ){game over code};

//*Mudar o Sprite do Bonequinho conforme a quantidade de vidas  
//*Checar se a palavra escondida contem a letra sorteada 
//*Mudar do caracter secreto para a letra escolhida se certa (na posição certa)
//*Criar um Array de palavras para ser sorteado. 
//*retirar todos os espaços e caracteres especiais antes de mandar para a palavra secreta para que eles não nececitem ser digitados 
//*


SumbmitBtn.addEventListener("click", Play);