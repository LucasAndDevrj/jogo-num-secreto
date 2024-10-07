//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Jogo do número secreto";

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "escolha um número entre 1 e 10";

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = GerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "escolha um número entre 1 e 10");
}

    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "escolha um número entre 1 e 10");

function verificarChute() {
    let chute = document.querySelector("input").value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;  
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        if (chute > numeroSecreto){
            exibirTextoNaTela("p", "O numero secreto é menor");
        } else {
            exibirTextoNaTela("p", "O numero secreto é maior");
        }
        //tentativas = tentativas + 1;
        tentativas++;
        limparCampo();
    }
}

function GerarNumeroAleatorio() {
   let NumeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

   if (listaDeNumerosSorteados.includes(NumeroEscolhido)){
        return GerarNumeroAleatorio();
   } else {
        listaDeNumerosSorteados.push(NumeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return NumeroEscolhido;
   }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo (){
    numeroSecreto = GerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}