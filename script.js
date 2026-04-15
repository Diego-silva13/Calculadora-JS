// seleciona o campo de entrada (display da calculadora)
let input = document.getElementById("inputBox");

// seleciona todos os botões da página
let buttons = document.querySelectorAll("button");

// variavel que armazena a expressão digitada
let string = "";

// converte a lista de botões (nodelist) em um array
let arr = Array.from(buttons)

// Percorre cada botão para adicionar um evento de clique
arr.forEach(button => {
    button.addEventListener("click", (e) => {

    // se o botão for clicado for = ""
    if (e.target.innerHTML == "=") {
        // avalia a expressão matemática digitada
        string = eval(string);

        //mostra o resultado no display
        input.value = string;
    }

    // se o botão for "AC" (limpar tudo)
    else if (e.target.innerHTML == "AC") {
        string = "" // limpa a expressão
        input.value = string // limpa o display
    }

    // se o botão for "DEL" (apagar ultimo caractare)
    else if (e.target.innerHTML == "DEL") {
        // remove o ultimo caractere da string
        string = string.substring(0, string.length - 1)

        // atualiza display
        input.value = string;
    }

    // para qualquer outro botão (numeros e operadores )
    else {
        // adiciona o valor do botão a expressão
        string += e.target.innerHTML;

        // atualiza o display com nova expressão
        input.value = string;
    }


    });
});