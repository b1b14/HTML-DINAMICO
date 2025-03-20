const falar = () =>{
    const frases = [
        "hoje está um dia bonito!",
        "falta muito pra sexta-feira?",
        "qual o cardápio de hoje no almoço?",
        "vish,tem prova de matemática",
    ];

    let tagarela = document.getElementById("tagarela");

    let indice = 0

    let numero = Math.random()

    if(numero> 0.75) indice = 3;
    else if (numero>0.50) indice = 2; 
    else if (numero>0.25) indice =1;

    tagarela.innerHTML = frases[indice];

}