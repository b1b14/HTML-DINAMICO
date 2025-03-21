const trocarImagem = () => {
  let imagem = document.getElementById("imagem");

  //   lampada.src = "img/acesa.jpg";

  /* if (imagem.src.includes("amy.jpg")) imagem.src = "img/santiago.jpg";
    else imagem.src = "img/amy.jpg";
  };*/

  const trocarImagens = ["img/amy.jpg", "img/santiago.jpg", "img/sargento.jpg","img/amyVestido.jpg"];

  let indice = 0;

  let numero = Math.random();

  if (numero > 0.75) indice = 3;
  else if (numero > 0.5) indice = 2;
  else if (numero > 0.25) indice = 1;
  else indice = 0;
  imagem.src = trocarImagens[indice];
};


const calcular = (operador) =>{
  let valor1 = parseFloat(frmCalculadora.inValor1.value);
  let valor2 = parseFloat(frmCalculadora.inValor2.value);
  let resultado = 0

  switch (operador) {
    case "+":
      resultado = valor1 + valor2;
      break;
  
      case "-":
      resultado = valor1 - valor2;
      break;
      
      case "*":
      resultado = valor1 * valor2;
      break;
      
      case "/":
      resultado = valor1 / valor2;
      break;

    
    default:
      break;
  }


  frmCalculadora.inResultado.value = resultado
};