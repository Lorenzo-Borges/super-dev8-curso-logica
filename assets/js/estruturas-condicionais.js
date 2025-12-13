// Operadores Relacionais
//  ==   Igual Valor
//  ===  Igual Valor e tipo
//  >    Maior
//  >=   Maior ou igual
//  <    Menor
//  <=   Menor ou igual
//  !=   Diferente

// Operadores Logicos
// && == E
// || == Ou

// Tabela Verdade do Operador Logico E
// V e V => V
// V e F => F
// F e V => F
// F e F => F

// Tabela Verdade do Operador Logico Ou
// V e V => V
// V e F => V
// F e V => V
// F e F => F


function exemploBasico(){
    let idade = 92;

    if (idade < 18) {
        alert("Menor de Idade");
    } else if (idade < 65) {
        alert("Adulto");
    } else {
        alert("Idoso")
    }
}

function exemploOu(){
    //Menor de Idade ou Estudante
    let idade = 30;
    let estudante = true;

    if (idade < 18 || estudante === true) {
        alert("Pode comprar meio ingresso!")
    } else {
        alert("Não pode comprar meio ingresso!")
    }
}

function exemploIncremento() {
    let quantidadeIdoso = 0, quantidadeAdulto = 0;

    let nome1 = prompt("Digite o nome da primeira pessoa: ")
    let idade1 = parseInt(prompt("Digite a idade de " + nome1 + ":"));

    if (idade1 < 65) {
        // Adulto
        // Incrementar
        // quantidadeAdulto = 0 + 1; => 1
        quantidadeAdulto = quantidadeAdulto + 1;
    } else {
        // Idoso
        quantidadeIdoso = quantidadeIdoso + 1;
    }

    // Pessoa 2
    let nome2 = prompt("Digite o nome da segunda pessoa: ");
    let idade2 = parseInt(prompt("Digite a idade de" + nome2 + ":"));

    if (idade2 < 65) {
        // Adulto
        quantidadeAdulto = quantidadeAdulto + 1;
    } else {
        // Idoso
        quantidadeIdoso = quantidadeIdoso + 1;
    }

    // Pessoa 3
    let nome3 = prompt("Digite o nome da segunda pessoa: ");
    let idade3 = parseInt(prompt("Digite a idade de" + nome3 + ":"));

    if (idade2 < 65) {
        // Adulto
        quantidadeAdulto = quantidadeAdulto + 1;
    } else {
        // Idoso
        quantidadeIdoso = quantidadeIdoso + 1;
    }

    alert(
        "Pessoa 1\nNome: " + nome1 + " | Idade: " + idade1 + "anos\n\n" +
        "Pessoa 2\nNome: " + nome2 + " | Idade: " + idade2 + "anos\n\n" +
        "Pessoa 3\nNome: " + nome3 + " | Idade: " + idade3 + "anos\n\n" +
        "Resumo:\n" +
        "Quantidade de Adultos: " + quantidadeAdulto + "\n" +
        "Quantidade de Idosos: " + quantidadeIdoso + "\n" 
    );
}

function exemploFinalAno2026(){

    let contagemRegressiva = 10;

    alert(contagemRegressiva);

    //Decrementar
    contagemRegressiva = contagemRegressiva -1; // 9
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva -1; // 8
    alert(contagemRegressiva);
 
    contagemRegressiva = contagemRegressiva -1; // 7
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva -1; // 6
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva -1; // 5
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva -1; // 4
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva -1; // 3
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva -1; // 2
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva -1; // 1
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva -1; // 0
    alert("Feliz Ano Novo 2026!");
}

function somarNumeros(){
    let soma = 0;

    const numero1 = parseInt(prompt("Digite o numero 1: "));
    soma = soma + numero1;

    const numero2 = parseInt(prompt("Digite o numero 2: "));
    soma = soma + numero2;

    const numero3 = parseInt(prompt("Digite o numero 3: "));
    soma = soma + numero3;

    const numero4 = parseInt(prompt("Digite o numero 4: "));
    soma = soma + numero4;

    const media = soma / 4;

    alert("Soma: " + soma + "\nMedia: " + media);
}