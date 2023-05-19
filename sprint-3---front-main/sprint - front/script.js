function validarFormulario1() {
    var nome = document.forms["formulario"]["nome"].value;
    var sobrenome = document.forms["formulario"]["sobrenome"].value;
    var dataNascimento = document.forms["formulario"]["data-nascimento"].value;
    var email = document.forms["formulario"]["email"].value;
    var cpf = document.forms["formulario"]["cpf"].value;
    var valorDoacao = document.forms["formulario"]["valor-doacao"].value;
    var numeroCartao = document.forms["formulario"]["numero-cartao"].value;
    var cvv = document.forms["formulario"]["cvv"].value;
    

    // Validação simples para campos vazios
    if (nome === "" || sobrenome === "" || dataNascimento === "" || email === "" || cpf === "" ||
        valorDoacao === "" || numeroCartao === "" || cvv === "") {
      alert("Todos os campos devem ser preenchidos");
      return false;}
    }


    function validarFormulario2() {
        var nome = document.forms["formulario"]["nome"].value;
        var sobrenome = document.forms["formulario"]["sobrenome"].value;
        var dataNascimento = document.forms["formulario"]["data-nascimento"].value;
        var email = document.forms["formulario"]["email"].value;
        var cpf = document.forms["formulario"]["cpf"].value;
        var telefone = document.forms["formulario"]["telefone"].value;
        var motivo = document.forms["formulario"]["motivo"].value
        
    
        // Validação simples para campos vazios
        if (nome === "" || sobrenome === "" || dataNascimento === "" || email === "" || cpf === "" ||
            telefone === "" || motivo === "") {
          alert("Todos os campos devem ser preenchidos");
          return false;}
        }