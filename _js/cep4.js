function limpa_formulário_cep2() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua2').value2=("");
    document.getElementById('bairro2').value2=("");
}

function meu_callback2(conteudo2) {
if (!("erro" in conteudo2)) {
    //Atualiza os campos com os valores.
    document.getElementById('rua2').value2=(conteudo2.logradouro);
    document.getElementById('bairro2').value2=(conteudo2.bairro);
    document.getElementById('uf2').value2=(conteudo2.uf);
    document.getElementById('cidade2').value2=(conteudo2.localidade)
} //end if.
else {
    //CEP não Encontrado.
    limpa_formulário_cep2();
    alert("CEP não encontrado.");
}
}

function pesquisacep2(valor2) {

//Nova variável "cep" somente com dígitos.
var cep2 = valor2.replace(/\D/g, '');
console.log(cep2)

//Verifica se campo cep possui valor informado.
if (cep2 != "") {

    //Expressão regular para validar o CEP.
    var validacep2 = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if(validacep2.test(cep2)) {

        //Preenche os campos com "..." enquanto consulta webservice.
        document.getElementById('rua2').value2="...";
        document.getElementById('bairro2').value2="...";
        document.getElementById('uf2').value2="...";
        document.getElementById('cidade2').value2="..."


        //Cria um elemento javascript.
        var script2 = document.createElement('script2');

        //Sincroniza com o callback.
        script2.src = 'https://viacep.com.br/ws/' + cep2 + '/json/?callback=meu_callback';

        //Insere script no documento e carrega o conteúdo.
        document.body.appendChild(script2);

    } //end if.
    else {
        //cep é inválido.
        limpa_formulário_cep2();
        alert("Formato de CEP inválido.");
    }
} //end if.
else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep2();
}
};