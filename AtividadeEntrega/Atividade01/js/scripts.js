const calcular = () => {
  let valPedido = inValorPedido.value;
  let perDesconto = 0;
  let valDesconto = 0;
  let valFinalPedido = 0;

  if (valPedido >= 2000) {
    perDesconto = 1.5;
    //apicar desconto de 1.5%
  } else if (valPedido >= 1500) {
    perDesconto = 1;
  } else if (valPedido >= 1000) {
    perDesconto = 0.8;
  } else if (valPedido >= 500) {
    perDesconto = 0.5;
  } else {
    perDesconto = 0;
  }

  valDesconto = (valPedido * perDesconto) / 100;
  valFinalPedido = valPedido - valDesconto;
  inPercDesc.value = perDesconto;
  inValDesc.value = valDesconto.toFixed(2);
  inValFinal.value = valFinalPedido.toFixed(2);
};
