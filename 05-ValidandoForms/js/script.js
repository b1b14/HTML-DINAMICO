/*alert("alerta com ação de click!")
}*/

const validarDados = () => {
  let nome = frmExemplo.inNome.value;
  let idade = frmExemplo.inIdade.value;
//   alert(idade);

  if (nome.trim() == "") {
    alert("o campo nome não pode estar vazio!");
    frmExemplo.inNome.focus();
    return false;
  }

  if (idade.trim() == "" || idade < 0) {
    alert("o campo idade não pode estar vazio ou negativo!");
    frmExemplo.inIdade.focus();
    return false;
  }

  if(nome.trim() !=""  && idade.trim() !=""  && idade > 0){
    alert("formulário enviado");
    location.reload();
  }
};
