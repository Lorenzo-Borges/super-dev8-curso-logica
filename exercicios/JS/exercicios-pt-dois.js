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

function exercicio11() {
    let indice = 0;
    let somaNotas = 0;

    while (indice < 4) {
        let nota = parseFloat(prompt("Digite a nota " + (indice + 1) + ": "));
        somaNotas = somaNotas + nota;
        indice = indice + 1;
    }

    let media = somaNotas / 4;
    alert("Média das notas: " + media.toFixed(2));
    if (media >= 7) {
        alert("Aluno aprovado.");
    } else {
        alert("Aluno reprovado.");
    }
}

function exercicio12() {
    let indice = 0;
    let totalCompra = 0;

    while (indice < 5) {
        let valorProduto = parseFloat(prompt("Digite o valor do produto " + (indice + 1) + ": "));
        totalCompra = totalCompra + valorProduto;
        indice = indice + 1;
    }
    let desconto = 0;
    if (totalCompra > 200) {
        desconto = totalCompra * 0.10;
    }
    let valorFinal = totalCompra - desconto;
    alert("Valor total sem desconto: " + totalCompra.toFixed(2) + "\nValor final com desconto: " + valorFinal.toFixed(2));
}

function exercicio13() {
    let indice = 0;
    let somaIdades = 0;

    while (indice < 6) {
        let idade = parseInt(prompt("Digite a idade " + (indice + 1) + ": "));
        somaIdades = somaIdades + idade;
        indice = indice + 1;
    }
    let mediaIdades = somaIdades / 6;
    alert("Média das idades: " + mediaIdades.toFixed(2));
    if (mediaIdades >= 18) {
        alert("Maior de idade");
    }
    else {
        alert("Menor de idade");
    }
}

function exercicio14() {
    let indice = 0;
    let maiorSalario = 0;
    let menorSalario = Infinity;
    let somaSalarios = 0;

    while (indice < 5) {
        let salario = parseFloat(prompt("Digite o salário " + (indice + 1) + ": "));
        if (salario > maiorSalario) {
            maiorSalario = salario;
        }
        if (salario < menorSalario) {
            menorSalario = salario;
        }
        somaSalarios = somaSalarios + salario;
        indice = indice + 1;
    }
    let mediaSalarios = somaSalarios / 5;
    alert("Maior salário: " + maiorSalario.toFixed(2) + "\nMenor salário: " + menorSalario.toFixed(2) + "\nMédia dos salários: " + mediaSalarios.toFixed(2));
    if (mediaSalarios > 3000) {
        alert("Salários acima da média");
    }
    else {
        alert("Salários dentro da média");
    }
}

function exercicio15() {
    let indice = 0;
    let totalContas = 0;

    while (indice < 4) {
        let conta = parseFloat(prompt("Digite o valor da conta " + (indice + 1) + ": "));
        totalContas = totalContas + conta;
        indice = indice + 1;
    }
    let rendaMensal = parseFloat(prompt("Digite sua renda mensal: "));
    let percentualContas = (totalContas / rendaMensal) * 100;
    alert("Total das contas: " + totalContas.toFixed(2) + "\nPercentual da renda: " + percentualContas.toFixed(2) + "%");
    if (totalContas > (rendaMensal * 0.5)) {
        alert("Orçamento comprometido");
    }
    else {
        alert("Orçamento saudável");
    }
}

function exercicio16() {
    let indice = 0;
    let maiorAltura = 0;
    while (indice < 5) {
        let altura = parseFloat(prompt("Digite a altura da pessoa " + (indice + 1) + ": "));
        if (altura > maiorAltura) {
            maiorAltura = altura;
        }
        indice = indice + 1;
    }
    alert("A maior altura informada é: " + maiorAltura.toFixed(2) + " metros.");
}

function exercicio17() {
    let indice = 0;
    let menorPeso = Infinity;

    while (indice < 4) {
        let peso = parseFloat(prompt("Digite o peso da pessoa " + (indice + 1) + ": "));
        if (peso < menorPeso) {
            menorPeso = peso;
        }   
        indice = indice + 1;
    }
    alert("O menor peso informado é: " + menorPeso.toFixed(2) + " kg.");
}

function exercicio18() {
    let indice = 0;
    let maiorIdade = 0;
    let nomeMaisVelho = "";

    while (indice < 5) {
        let nome = prompt("Digite o nome da pessoa " + (indice + 1) + ": ");
        let idade = parseInt(prompt("Digite a idade de " + nome + ": "));
        if (idade > maiorIdade) {
            maiorIdade = idade;
            nomeMaisVelho = nome;
        }
        indice = indice + 1;
    }
    alert("A pessoa mais velha é " + nomeMaisVelho + " com " + maiorIdade + " anos.");
}

function exercicio19() {
    let indice = 0;
    let maiorPreco = 0;
    let menorPreco = Infinity;

    while (indice < 6) {
        let preco = parseFloat(prompt("Digite o preço do produto " + (indice + 1) + ": "));
        if (preco > maiorPreco) {
            maiorPreco = preco;
        }
        if (preco < menorPreco) {
            menorPreco = preco;
        }
        indice = indice + 1;
    }
    alert("Maior preço informado: " + maiorPreco.toFixed(2) + "\nMenor preço informado: " + menorPreco.toFixed(2));
}

function exercicio20() {
    let indice = 0;
    let maiorSalario = 0;
    let nomeMaiorSalario = "";

    while (indice < 4) {
        let nome = prompt("Digite o nome do colaborador " + (indice + 1) + ": ");
        let salario = parseFloat(prompt("Digite o salário de " + nome + ": "));
        if (salario > maiorSalario) {
            maiorSalario = salario;
            nomeMaiorSalario = nome;
        }
        indice = indice + 1;
    }
    alert("O colaborador com o maior salário é " + nomeMaiorSalario + " com um salário de " + maiorSalario.toFixed(2));
}
