function exercicio01() {
    let indice = 0;

    while (indice < 5) {
        let nome = prompt("Digite o nome dos alunos: ")

        alert("Aluno cadartrado: " + nome)
        indice = indice + 1
    }

    alert("Cadastro Finalizado")
}

function exercicio02() {
    let indice = 0;

    while (indice < 4) {
        let cores = prompt("Digite suas cores favoritas");

        alert("Cor escolhida: " + cores)
        indice = indice + 1
    }

    alert("Obrigado por informar suas cores favoritas")
}

function exercicio03() {
    let indice = 0;

    while (indice < 3) {
        let cidade = prompt("Digite o destino: ");

        alert("Destino " + (indice + 1) + ": " + cidade);
        indice = indice + 1
    }
    alert("Palnejamento de viagem concluido")
}

function exercicio04() {
    let soma = 0;
    let indice = 0;

    while (indice < 5) {
        let numero = parseInt(prompt("Digite um numero: "));

        soma = soma + numero
        indice = indice + 1
    }

    alert("Soma total:" + soma)
}

function exercicio05() {
    let indice = 0;

    while (indice < 3) {
        let nomeFilme = prompt("Digite o nome do filme: ");
        let anoLancamento = parseInt(prompt("Digite o ano de lançamento: "));

        alert("Filme: " + nomeFilme + " - Ano: " + anoLancamento);
        indice = indice + 1
    }
    alert("Lista de filmes cadastrada com sucesso")
}

function exercicio06() {
    let indice = 0;
    let soma = 0;

    while (indice < 5) {
        let numero = parseFloat(prompt("Digite um numero: "));
        soma = soma + numero;
        indice = indice + 1;
    }
    let media = soma / 5;
    alert("Soma dos números: " + soma + "\nMédia dos números: " + media);
}

function exercicio07() {
    let indice = 0;
    let totalVendas = 0;

    while (indice < 6) {
        let venda = parseFloat(prompt("Digite o valor da venda: "));
        totalVendas = totalVendas + venda;
        indice = indice + 1;
    }

    let comissao = totalVendas * 0.05;
    alert("Total das vendas: " + totalVendas + "\nComissão (5%): " + comissao);
}

function exercicio08() {
    let indice = 0;

    while (indice < 10) {
        let numero = parseInt(prompt("Digite um número: "));
        if (numero % 2 === 0) {
            alert("O número " + numero + " é par.");
        } else {
            alert("O número " + numero + " é ímpar.");
        }

        indice = indice + 1;
    }
}

function exercicio09() {
    let indice = 1;
    let numero = parseInt(prompt("Digite um número para ver a tabuada: "));

    while (indice <= 10) {
        let resultado = numero * indice;
        alert(numero + " x " + indice + " = " + resultado);
        indice = indice + 1;
    }
}

function exercicio10() {
    let indice = 0;
    let countPares = 0;
    let countImpares = 0;

    while (indice < 10) {
        let numero = parseInt(prompt("Digite um número: "));
        if (numero % 2 === 0) {
            countPares = countPares + 1;
        } else {
            countImpares = countImpares + 1;
        }
        indice = indice + 1;
    }
    alert("Quantidade de números pares: " + countPares + "\nQuantidade de números ímpares: " + countImpares);
}

/*
6. Criar uma função exercicio06()
- Solicitar 5 números utilizando enquanto
- Apresentar a soma dos números
- Apresentar a média dos números

7. Criar uma função exercicio07()
- Solicitar o valor de 6 vendas
- Apresentar o total das vendas
- Calcular e apresenta 5% de comissão sobre total das vendas.

8. Criar uma função exercicio08()
- Solicitar 10 números
- Apresentar se o número é par
- Apresentar se o número é ímpar

9. Criar uma função exercicio09()
- Solicitar um número para o usuário
- Apresentar a tabuada desse número utilizando while
- Formato esperado:
- 5 x 1 = 5
- 5 x 2 = 10
- ...
- 5 x 10 = 50
- O número(5) apresentado foi digitado pelo usuário, ou seja, deve apresentar a tabuada do número digitado

10. Criar uma função exercicio10()
- Solicitar 10 números
- Apresentar a quantidade de números pares
- Apresentar a quantidade de números ímpares
*/