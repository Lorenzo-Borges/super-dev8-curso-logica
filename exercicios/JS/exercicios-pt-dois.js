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
    let menorSalario = 9999999999;
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
    let menorPeso = 9999999999;

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
    let menorPreco = 9999999999;

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

function exercicio21() {
    let indice = 0;
    let maiorTemperatura = -99999;
    let menorTemperatura = 99999;

    while (indice < 7) {
        let temperatura = parseFloat(prompt("Digite a temperatura do dia " + (indice + 1) + ": "));
        if (temperatura > maiorTemperatura) {
            maiorTemperatura = temperatura;
        }
        if (temperatura < menorTemperatura) {
            menorTemperatura = temperatura;
        }
        indice = indice + 1;
    }
    alert("Maior temperatura: " + maiorTemperatura.toFixed(2) + "\nMenor temperatura: " + menorTemperatura.toFixed(2));
}

function exercicio22() {
    let indice = 0;
    let menorPreco = 9999999999;
    let nomeMenorPreco = "";

    while (indice < 5) {
        let nomeProduto = prompt("Digite o nome do produto " + (indice + 1) + ": ");
        let precoProduto = parseFloat(prompt("Digite o preço do produto " + nomeProduto + ": "));
        if (precoProduto < menorPreco) {
            menorPreco = precoProduto;
            nomeMenorPreco = nomeProduto;
        }
        indice = indice + 1;
    }
    alert("O produto com menor preço é " + nomeMenorPreco + " com o preço de " + menorPreco.toFixed(2));
}

function exercicio23() {
    let indice = 0;
    let countCriancas = 0;
    let countAdolescentes = 0;
    let countAdultos = 0;
    let countIdosos = 0;

    while (indice < 8) {
        let idade = parseInt(prompt("Digite a idade da pessoa " + (indice + 1) + ": "));
        if (idade < 12) {
            countCriancas = countCriancas + 1;
        }
        else if (idade >= 12 && idade <= 17) {
            countAdolescentes = countAdolescentes + 1;
        }
        else if (idade >= 18 && idade <= 59) {
            countAdultos = countAdultos + 1;
        }
        else {
            countIdosos = countIdosos + 1;
        }
        indice = indice + 1;
    }
    alert("Crianças: " + countCriancas + "\nAdolescentes: " + countAdolescentes + "\nAdultos: " + countAdultos + "\nIdosos: " + countIdosos);
}

function exercicio24() {
    let indice = 0;
    let countReprovados = 0;
    let countRecuperacao = 0;
    let countAprovados = 0;

    while (indice < 10) {
        let nota = parseFloat(prompt("Digite a nota do aluno " + (indice + 1) + ": "));
        if (nota < 5) {
            countReprovados = countReprovados + 1;
        }
        else if (nota >= 5 && nota < 7) {
            countRecuperacao = countRecuperacao + 1;
        }
        else {
            countAprovados = countAprovados + 1;
        }
        indice = indice + 1;
    }
    alert("Reprovados: " + countReprovados + "\nRecuperação: " + countRecuperacao + "\nAprovados: " + countAprovados);
}

function exercicio25() {
    let indice = 0;
    let countSalarioAte2000 = 0;
    let countSalario2001a5000 = 0;
    let countSalarioAcima5000 = 0;

    while (indice < 7) {
        let salario = parseFloat(prompt("Digite o salário do colaborador " + (indice + 1) + ": "));
        if (salario <= 2000) {
            countSalarioAte2000 = countSalarioAte2000 + 1;
        }
        else if (salario > 2000 && salario <= 5000) {
            countSalario2001a5000 = countSalario2001a5000 + 1;
        }
        else {
            countSalarioAcima5000 = countSalarioAcima5000 + 1;
        }
        indice = indice + 1;
    }
    alert("Colaboradores com salário até R$2.ooo,oo: " + countSalarioAte2ooo +
          "\nColaboradores com salário entre R$2.ooo,oo e R$5.ooo,oo: " + countSalario2ooo5ooo +
          "\nColaboradores com salário acima de R$5.ooo,oo: " + countSalarioAcima5ooo);

}

function exercicio26() {
    let indice = 6;
    let diasFrios = 6;
    let diasAgradaveis = 6;
    let diasQuentes = 6;
    while (indice < 6) {
        let temperatura = parseFloat(prompt("Digite a temperatura do dia " + (indice + 1) + ": "));
        if (temperatura < 15) {
            diasFrios = diasFrios + 1;
        }
        else if (temperatura >= 15 && temperatura <= 25) {
            diasAgradaveis = diasAgradaveis + 1;
        }
        else {
            diasQuentes = diasQuentes + 1;
        }
        indice = indice + 1;
    }
    alert("Dias Frios: " + diasFrios + "\nDias Agradáveis: " + diasAgradaveis + "\nDias Quentes: " + diasQuentes);
}

function exercicio27() {
    let indice = 0;
    let countRuim = 0;
    let countRegular = 0;
    let countBom = 0;

    while (indice < 10) {
        let avaliacao = parseInt(prompt("Digite a avaliação do cliente " + (indice + 1) + " (1 a 5): "));
        if (avaliacao === 1 || avaliacao === 2) {
            countRuim = countRuim + 1;
        }
        else if (avaliacao === 3) {
            countRegular = countRegular + 1;
        }
        else {
            countBom = countBom + 1;
        }
        indice = indice + 1;
    }
    alert("Avaliações Ruim: " + countRuim + "\nAvaliações Regular: " + countRegular + "\nAvaliações Bom: " + countBom);
}

function exercicio28() {
    let indice = 0;
    let countNegativos = 0;
    let countZeros = 0;
    let countPositivos = 0;

    while (indice < 8) {
        let numero = parseInt(prompt("Digite o número " + (indice + 1) + ": "));

        if (numero < 0) {
            countNegativos = countNegativos + 1;
        }
        else if (numero === 0) {
            countZeros = countZeros + 1;
        }
        else {
            countPositivos = countPositivos + 1;
        }
        indice = indice + 1;
    }
    alert("Números Negativos: " + countNegativos + "\nNúmeros Iguais a Zero: " + countZeros + "\nNúmeros Positivos: " + countPositivos);
}

function exercicio29() {
    let indice = 0;
    let countLeves = 0;
    let countMedias = 0;
    let countPesadas = 0;

    while (indice < 5) {
        let peso = parseFloat(prompt("Digite o peso da encomenda " + (indice + 1) + " em kg: "));
        if (peso < 2) {
            countLeves = countLeves + 1;
        }
        else if (peso >= 2 && peso <= 10) {
            countMedias = countMedias + 1;
        }
        else {
            countPesadas = countPesadas + 1;
        }
        indice = indice + 1;
    }
    alert("Encomendas Leves: " + countLeves + "\nEncomendas Médias: " + countMedias + "\nEncomendas Pesadas: " + countPesadas);
}

function exercicio30() {
    let quantidadePelucias = parseInt(prompt("Digite a quantidade de pelúcias da Disney que deseja cadastrar: "));
    let countMickey = 0;
    let countMinnie = 0;
    let countDonald = 0;

    for (let i = 0; i < quantidadePelucias; i++) {
        let personagem = prompt("Digite o personagem da pelúcia " + (i + 1) + " [MICKEY/MINNIE/DONALD]: ").toUpperCase();

        if (personagem === "MICKEY") {
            countMickey = countMickey + 1;
        }
        else if (personagem === "MINNIE") {
            countMinnie = countMinnie + 1;
        }
        else if (personagem === "DONALD") {
            countDonald = countDonald + 1;
        }
    }
    alert("Pelúcias de Mickey: " + countMickey + "\nPelúcias de Minnie: " + countMinnie + "\nPelúcias de Donald: " + countDonald);
}

function exercicio31() {
    let quantidadeClientes = parseInt(prompt("Digite a quantidade de clientes que irão responder a pesquisa: "));
    let countCredito = 0;
    let countDebito = 0;
    let countDinheiro = 0;

    for (let i = 0; i < quantidadeClientes; i++) {
        let formaPagamento = prompt("Digite a forma de pagamento utilizada pelo cliente " + (i + 1) + " [CRÉDITO/DÉBITO/DINHEIRO]: ").toUpperCase();
        if (formaPagamento === "CRÉDITO") {
            countCredito = countCredito + 1;
        }
        else if (formaPagamento === "DÉBITO") {
            countDebito = countDebito + 1;
        }
        else if (formaPagamento === "DINHEIRO") {
            countDinheiro = countDinheiro + 1;
        }
    }
    alert("Clientes que pagaram no CRÉDITO: " + countCredito + "\nClientes que pagaram no DÉBITO: " + countDebito + "\nClientes que pagaram em DINHEIRO: " + countDinheiro);
}

function exercicio32() {
    let quantidadeIngressos = parseInt(prompt("Digite a quantidade de ingressos vendidos: "));
    let countInteira = 0;
    let countMeia = 0;
    let countCortesia = 0;

    for (let i = 0; i < quantidadeIngressos; i++) {
        let tipoIngresso = prompt("Digite o tipo do ingresso " + (i + 1) + " [INTEIRA/MEIA/CORTESIA]: ").toUpperCase();

        if (tipoIngresso === "INTEIRA") {
            countInteira = countInteira + 1;
        }
        else if (tipoIngresso === "MEIA") {
            countMeia = countMeia + 1;
        }
        else if (tipoIngresso === "CORTESIA") {
            countCortesia = countCortesia + 1;
        }
    }
    alert("Ingressos INTEIRA: " + countInteira + "\nIngressos MEIA: " + countMeia + "\nIngressos CORTESIA: " + countCortesia);
}

function exercicio33() {
    let quantidadeLanches = parseInt(prompt("Digite a quantidade de lanches vendidos em um dia: "));
    let countHamburguer = 0;
    let countPizza = 0;
    let countHotdog = 0;

    for (let i = 0; i < quantidadeLanches; i++) {
        let tipoLanche = prompt("Digite o tipo do lanche " + (i + 1) + " [HAMBURGUER/PIZZA/HOTDOG]: ").toUpperCase();
        if (tipoLanche === "HAMBURGUER") {
            countHamburguer = countHamburguer + 1;
        }
        else if (tipoLanche === "PIZZA") {
            countPizza = countPizza + 1;
        }
        else if (tipoLanche === "HOTDOG") {
            countHotdog = countHotdog + 1;
        }
    }
    alert("Pedidos de Hambúrguer: " + countHamburguer + "\nPedidos de Pizza: " + countPizza + "\nPedidos de Hotdog: " + countHotdog);
}

function exercicio34() {
    let quantidadeLivros = parseInt(prompt("Digite a quantidade de livros que deseja cadastrar: "));
    let countFiccao = 0;
    let countEstudo = 0;
    let countInfantil = 0;

    for (let i = 0; i < quantidadeLivros; i++) {
        let tipoLivro = prompt("Digite o tipo do livro " + (i + 1) + " [FICÇÃO/ESTUDO/INFANTIL]: ").toUpperCase();
        if (tipoLivro === "FICÇÃO") {
            countFiccao = countFiccao + 1;
        }
        else if (tipoLivro === "ESTUDO") {
            countEstudo = countEstudo + 1;
        }
        else if (tipoLivro === "INFANTIL") {
            countInfantil = countInfantil + 1;
        }
    }
    alert("Livros de Ficção: " + countFiccao + "\nLivros de Estudo: " + countEstudo + "\nLivros Infantil: " + countInfantil);
}

function exercicio35() {
    let personagem;
    let countPersonagens = 0;

    do {
        personagem = prompt("Digite o nome de um personagem de anime (ou 'sair' para encerrar): ");
        if (personagem.toLowerCase() !== "sair") {
            countPersonagens = countPersonagens + 1;
            alert("Personagem cadastrado: " + personagem);
        }
    } while (personagem.toLowerCase() !== "sair");
    alert("Total de personagens cadastrados: " + countPersonagens);
}

function exercicio36() {
    let jogo;
    let countJogos = 0;
    let countRPG = 0;
    
    do {
        jogo = prompt("Digite o nome de um jogo (ou 'sair' para encerrar): ");
        if (jogo.toLowerCase() !== "sair") {
            countJogos = countJogos + 1;
            if (jogo.toLowerCase().includes("rpg")) {
                countRPG = countRPG + 1;
            }
            alert("Jogo cadastrado: " + jogo);
        }
    } while (jogo.toLowerCase() !== "sair");
    alert("Total de jogos cadastrados: " + countJogos + "\nTotal de jogos RPG: " + countRPG);
}

function exercicio37() {
    let heroi;
    let countBaixo = 0;
    let countMedio = 0;
    let countAlto = 0;

    do {
        heroi = prompt("Digite o nome de um herói da Marvel (ou 'sair' para encerrar): ");
        if (heroi.toLowerCase() !== "sair") {
            countBaixo = countBaixo + 1;
            alert("Herói cadastrado: " + heroi);
        }
    } while (heroi.toLowerCase() !== "sair");
    alert("Total de heróis cadastrados: " + countBaixo);
}

function exercicio38() {
    let serie;
    let countSeries = 0;
    let somaNotas = 0;
    
    do {
        serie = prompt("Digite o nome de uma série geek (ou 'sair' para encerrar): ");
        if (serie.toLowerCase() !== "sair") {
            let nota = parseFloat(prompt("Digite a nota da série " + serie + " (0 a 10): "));
            somaNotas = somaNotas + nota;
            countSeries = countSeries + 1;
            alert("Série cadastrada: " + serie);
        }
    } while (serie.toLowerCase() !== "sair");
    let mediaNotas = somaNotas / countSeries;
    alert("Total de séries cadastradas: " + countSeries + "\nMédia das notas: " + mediaNotas.toFixed(2));
}

function exercicio39() {
    let item;
    let countItens = 0;
    let countJogados = 0;

    do {
        item = prompt("Digite o nome de um console/jogo retrô (ou 'sair' para encerrar): ");
        if (item.toLowerCase() !== "sair") {
            countItens = countItens + 1;
            let jogou = prompt("Você já jogou " + item + "? [SIM/NÃO]: ").toUpperCase();
            if (jogou === "SIM") {
                countJogados = countJogados + 1;
            }
            alert("Item cadastrado: " + item);
        }
    } while (item.toLowerCase() !== "sair");
    alert("Total de itens cadastrados: " + countItens + "\nTotal de itens jogados: " + countJogados);
}

function exercicio40() {
    let quantidadePessoas = parseInt(prompt("Digite a quantidade de pessoas para o cadastro: "));
    let countMasculino = 0;
    let countFeminino = 0;
    let countOutro = 0;

    for (let i = 0; i < quantidadePessoas; i++) {
        let genero = prompt("Digite o gênero da pessoa " + (i + 1) + " [MASCULINO/FEMININO/OUTRO]: ").toUpperCase();
        if (genero === "MASCULINO") {
            countMasculino = countMasculino + 1;
        }
        else if (genero === "FEMININO") {
            countFeminino = countFeminino + 1;
        }
        else if (genero === "OUTRO") {
            countOutro = countOutro + 1;
        }
    }
    alert("Total de pessoas do gênero MASCULINO: " + countMasculino +
            "\nTotal de pessoas do gênero FEMININO: " + countFeminino +
            "\nTotal de pessoas do gênero OUTRO: " + countOutro);
}

function exercicio41() {
    let saldo = parseFloat(prompt("Digite o saldo inicial da conta bancária: "));
    let opcao;

    do {
        opcao = parseInt(prompt("MENU:\n1 - Depositar\n2 - Sacar\n3 - Consultar saldo\n10 - Sair\nEscolha uma opção: "));
        switch (opcao) {
            case 1:
                let deposito = parseFloat(prompt("Digite o valor a depositar: "));
                saldo = saldo + deposito;
                alert("Depósito realizado. Novo saldo: " + saldo.toFixed(2));
                break;
            case 2:
                let saque = parseFloat(prompt("Digite o valor a sacar: "));
                if (saque > saldo) {
                    alert("Saldo insuficiente para o saque.");
                }
                else {
                    saldo = saldo - saque;
                    alert("Saque realizado. Novo saldo: " + saldo.toFixed(2));
                }
                break;
            case 3:
                alert("Saldo atual: " + saldo.toFixed(2));
                break;
            case 10:
                alert("Saindo do menu.");   
                break;
            default:
                alert("Opção inválida. Tente novamente.");
        }
    } while (opcao !== 10);

    alert("Saldo final da conta: " + saldo.toFixed(2));
}

function exercicio42() {
    let opcao;

    do {
        opcao = parseInt(prompt("MENU DE CONVERSÃO DE TEMPERATURAS:\n1 - Celsius para Fahrenheit\n2 - Fahrenheit para Celsius\n10 - Sair\nEscolha uma opção: "));
        switch (opcao) {
            case 1:
                let celsius = parseFloat(prompt("Digite a temperatura em Celsius: "));
                let fahrenheit = (celsius * 9/5) + 32;
                alert(celsius + "°C é igual a " + fahrenheit.toFixed(2) + "°F");
                break;
            case 2:
                let fahrenheitInput = parseFloat(prompt("Digite a temperatura em Fahrenheit: "));
                let celsiusConverted = (fahrenheitInput - 32) * 5/9;
                alert(fahrenheitInput + "°F é igual a " + celsiusConverted.toFixed(2) + "°C");
                break;
            case 10:
                alert("Saindo do menu.");
                break;
            default:
                alert("Opção inválida. Tente novamente.");
        }
    } while (opcao !== 10);
}

function exercicio43() {
    let opcao;

    do {
        opcao = parseInt(prompt("MENU DE CALCULADORA DE IMC:\n1 - Calcular IMC\n2 - Ver instruções de uso\n10 - Sair\nEscolha uma opção: "));
        switch (opcao) {
            case 1:
                let peso = parseFloat(prompt("Digite o peso em kg: "));
                let altura = parseFloat(prompt("Digite a altura em metros: "));
                let imc = peso / (altura * altura);
                alert("Seu IMC é: " + imc.toFixed(2));
                break;
            case 2:
                alert("O IMC (Índice de Massa Corporal) é uma medida que relaciona o peso e a altura de uma pessoa para avaliar se ela está dentro do peso ideal.");
                break;
            case 10:
                alert("Saindo do menu.");
                break;
            default:
                alert("Opção inválida. Tente novamente.");
        }
    } while (opcao !== 10);
}

function exercicio44() {
    let estoque = 0;
    let opcao;
    
    do {
        opcao = parseInt(prompt("MENU DE CONTROLE DE ESTOQUE:\n1 - Adicionar itens ao estoque\n2 - Remover itens do estoque\n3 - Consultar quantidade em estoque\n10 - Sair\nEscolha uma opção: "));
        switch (opcao) {
            case 1:
                let adicionar = parseInt(prompt("Digite a quantidade de itens a adicionar: "));
                estoque = estoque + adicionar;
                alert("Itens adicionados. Estoque atual: " + estoque);
                break;
            case 2:
                let remover = parseInt(prompt("Digite a quantidade de itens a remover: "));
                if (remover > estoque) {
                    alert("Não é possível remover mais itens do que o estoque atual.");
                }
                else {
                    estoque = estoque - remover;
                    alert("Itens removidos. Estoque atual: " + estoque);
                }
                break;
            case 3:
                alert("Quantidade em estoque: " + estoque);
                break;
            case 10:
                alert("Saindo do menu.");
                break;
            default:
                alert("Opção inválida. Tente novamente.");
        }
    } while (opcao !== 10);
    alert("Quantidade final em estoque: " + estoque);
}

function exercicio45() {
    let total = 0;
    let opcao;

    do {
        opcao = parseInt(prompt("MENU DE LANCHE:\n1 - Adicionar Hambúrguer (R$ 15,00)\n2 - Adicionar Pizza (R$ 25,00)\n3 - Adicionar Refrigerante (R$ 8,00)\n4 - Ver total parcial\n10 - Finalizar pedido\nEscolha uma opção: "));
        switch (opcao) {
            case 1:
                total = total + 15;
                alert("Hambúrguer adicionado. Total parcial: R$ " + total.toFixed(2));
                break;
            case 2:
                total = total + 25;
                alert("Pizza adicionada. Total parcial: R$ " + total.toFixed(2));
                break;
            case 3:
                total = total + 8;
                alert("Refrigerante adicionado. Total parcial: R$ " + total.toFixed(2));
                break;
            case 4:
                alert("Total parcial: R$ " + total.toFixed(2));
                break;
            case 10:
                alert("Finalizando pedido.");
                break;
            default:
                alert("Opção inválida. Tente novamente.");
        }
    } while (opcao !== 10);
    alert("Valor total do pedido: R$ " + total.toFixed(2));
}

function exercicio46() {
    let somaNotas = 0;
    let countNotas = 0;
    let opcao;

    do {
        opcao = parseInt(prompt("MENU DE NOTAS DE ALUNO:\n1 - Cadastrar nota\n2 - Ver média das notas\n3 - Ver quantidade de notas cadastradas\n10 - Sair\nEscolha uma opção: "));
        switch (opcao) {
            case 1:
                let nota = parseFloat(prompt("Digite a nota a ser cadastrada: "));
                somaNotas = somaNotas + nota;
                countNotas = countNotas + 1;
                alert("Nota cadastrada.");
                break;
            case 2:
                if (countNotas === 0) {
                    alert("Nenhuma nota cadastrada.");
                }
                else {
                    let media = somaNotas / countNotas;
                    alert("Média das notas: " + media.toFixed(2));
                }
                break;
            case 3:
                alert("Quantidade de notas cadastradas: " + countNotas);
                break;
            case 10:
                alert("Saindo do menu.");
                break;
            default:
                alert("Opção inválida. Tente novamente.");
        }
    } while (opcao !== 10);
}

function exercicio47() {
    let countRuim = 0;
    let countRegular = 0;
    let countBom = 0;
    let opcao;

    do {
        opcao = parseInt(prompt("MENU DE PESQUISA DE SATISFAÇÃO:\n1 - Registrar resposta 'Ruim'\n2 - Registrar resposta 'Regular'\n3 - Registrar resposta 'Bom'\n4 - Ver resumo da pesquisa\n10 - Encerrar pesquisa\nEscolha uma opção: "));
        switch (opcao) {
            case 1:
                countRuim = countRuim + 1;
                alert("Resposta 'Ruim' registrada.");
                break;
            case 2:
                countRegular = countRegular + 1;
                alert("Resposta 'Regular' registrada.");
                break;
            case 3:
                countBom = countBom + 1;
                alert("Resposta 'Bom' registrada.");
                break;
            case 4:
                alert("Resumo da pesquisa:\nRespostas 'Ruim': " + countRuim + "\nRespostas 'Regular': " + countRegular + "\nRespostas 'Bom': " + countBom);
                break;
            case 10:
                alert("Encerrando pesquisa.");
                break;
            default:
                alert("Opção inválida. Tente novamente.");
        }
    }
    while (opcao !== 10);
    alert("Resumo final da pesquisa:\nRespostas 'Ruim': " + countRuim + "\nRespostas 'Regular': " + countRegular + "\nRespostas 'Bom': " + countBom);
}

function exercicio48() {
    let quantidadeVendas = parseInt(prompt("Digite a quantidade de vendas a serem cadastradas: "));
    let maiorValor = 0;
    let menorValor = 9999999999;
    let somaValores = 0;
    let countCredito = 0;
    let countDebito = 0;
    let countPix = 0;

    for (let i = 0; i < quantidadeVendas; i++) {
        let nomeCliente = prompt("Digite o nome do cliente da venda " + (i + 1) + ": ");
        let valorCompra = parseFloat(prompt("Digite o valor da compra de " + nomeCliente + ": "));
        let formaPagamento = prompt("Digite a forma de pagamento [CRÉDITO/DÉBITO/PIX]: ").toUpperCase();
        if (valorCompra > maiorValor) {
            maiorValor = valorCompra;
        }
        if (valorCompra < menorValor) {
            menorValor = valorCompra;
        }
        somaValores = somaValores + valorCompra;
        if (formaPagamento === "CRÉDITO") {
            countCredito = countCredito + 1;
        }
        else if (formaPagamento === "DÉBITO") {
            countDebito = countDebito + 1;
        }
        else if (formaPagamento === "PIX") {
            countPix = countPix + 1;
        }
    }
    let mediaCompras = somaValores / quantidadeVendas;
    alert("Resumo geral das vendas:\nMaior valor de compra: R$ " + maiorValor.toFixed(2) +
          "\nMenor valor de compra: R$ " + menorValor.toFixed(2) +
          "\nMédia das compras: R$ " + mediaCompras.toFixed(2) +
          "\nVendas em CRÉDITO: " + countCredito +
          "\nVendas em DÉBITO: " + countDebito +
          "\nVendas em PIX: " + countPix);
}

function exercicio49() {
    let quantidadeAlunos = parseInt(prompt("Digite a quantidade de alunos a serem cadastrados: "));
    let countAbaixoPeso = 0;
    let countPesoNormal = 0;
    let countAcimaPeso = 0;
    let maiorIMC = 0;
    let menorIMC = 9999999999;
    let nomeMaiorIMC = "";
    let nomeMenorIMC = "";
    let somaIdades = 0;

    for (let i = 0; i < quantidadeAlunos; i++) {
        let nomeAluno = prompt("Digite o nome do aluno " + (i + 1) + ": ");
        let idade = parseInt(prompt("Digite a idade de " + nomeAluno + ": "));
        let peso = parseFloat(prompt("Digite o peso de " + nomeAluno + " em kg: "));
        let altura = parseFloat(prompt("Digite a altura de " + nomeAluno + " em metros: "));
        let imc = peso / (altura * altura);
        if (imc < 18.5) {
            countAbaixoPeso = countAbaixoPeso + 1;
        }
        else if (imc >= 18.5 && imc <= 24.9) {
            countPesoNormal = countPesoNormal + 1;
        }
        else {
            countAcimaPeso = countAcimaPeso + 1;
        }
        if (imc > maiorIMC) {
            maiorIMC = imc;
            nomeMaiorIMC = nomeAluno;
        }
        if (imc < menorIMC) {
            menorIMC = imc;
            nomeMenorIMC = nomeAluno;
        }
        somaIdades = somaIdades + idade;
    }
    let mediaIdades = somaIdades / quantidadeAlunos;
    alert("Resumo geral dos alunos:\nAlunos Abaixo do peso: " + countAbaixoPeso +
          "\nAlunos com Peso normal: " + countPesoNormal +
          "\nAlunos Acima do peso: " + countAcimaPeso +
            "\nAluno com maior IMC: " + nomeMaiorIMC + " (IMC: " + maiorIMC.toFixed(2) + ")" +
            "\nAluno com menor IMC: " + nomeMenorIMC + " (IMC: " + menorIMC.toFixed(2) + ")" +
            "\nMédia das idades: " + mediaIdades.toFixed(2));
}

function exercicio50() {
    let quantidadeTitulos = parseInt(prompt("Digite a quantidade de títulos a serem cadastrados na maratona geek: "));
    let maiorNota = 0;
    let menorNota = 9999999999;
    let somaNotas = 0;
    let countFilme = 0;
    let countSerie = 0;
    let countAnime = 0;

    for (let i = 0; i < quantidadeTitulos; i++) {
        let nomeTitulo = prompt("Digite o nome do título " + (i + 1) + ": ");
        let tipoTitulo = prompt("Digite o tipo do título [FILME/SÉRIE/ANIME]: ").toUpperCase();
        let nota = parseFloat(prompt("Digite a nota do título " + nomeTitulo + " (0 a 10): "));
        if (nota > maiorNota) {
            maiorNota = nota;
        }
        if (nota < menorNota) {
            menorNota = nota;
        }
        somaNotas = somaNotas + nota;
        if (tipoTitulo === "FILME") {
            countFilme = countFilme + 1;
        }
        else if (tipoTitulo === "SÉRIE") {
            countSerie = countSerie + 1;
        }
        else if (tipoTitulo === "ANIME") {
            countAnime = countAnime + 1;
        }
    }
    let mediaNotas = somaNotas / quantidadeTitulos;
    alert("Resumo geral da maratona geek:\nMaior nota atribuída: " + maiorNota.toFixed(2) +
            "\nMenor nota atribuída: " + menorNota.toFixed(2) +
            "\nMédia das notas: " + mediaNotas.toFixed(2) +
            "\nQuantidade de FILMES: " + countFilme +
            "\nQuantidade de SÉRIES: " + countSerie +
            "\nQuantidade de ANIMES: " + countAnime);
}