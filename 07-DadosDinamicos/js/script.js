const atualizarDados = () => {
  //criando uma variavel para  tbody
  let dados = document.getElementById("itens");

  //zerando a tbody
  dados.innerHTML = "";
  //gerando novos conteudos
  for (let i = 0; i < 5; i++) {
    //criando variavel
    let preco = Math.random() * 100;
    //criando variavel
    let elemento = "";
    //criando listra de cor diferente para linhas impares
    if (i % 2 != 0) elemento = "<tr class='listra'>";
    else elemento = "<tr>";

    elemento += `<td> Produto ${i} </td> 
        <td>R$ ${preco.toFixed(2)} </td>`;
    dados.innerHTML += elemento;
  }
};
