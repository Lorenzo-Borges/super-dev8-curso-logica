function exercicio1() {
    let nome = prompt("Digite o Nome do Personagem: ");
    let idade = parseInt(prompt("Digite a idade do Personagem: "));
    let cidade = prompt("Digite a Cidade: ");
    let poderes = confirm("Você tem poderes? ");
    let tipoPoder = prompt("Qual seu tipo de Poder [Levitação, Manipulação Elemental, Poderes Psiquicos, Super Força] ");
    if (tipoPoder === "Levitação") {
        alert("Patetico!")
    } else if (tipoPoder === "Manipulação Elemental") {
        alert("Pika ta!")
    } else if (tipoPoder === "Poderes Psiquicos") {
        alert("Bacaninha...")
    } else if (tipoPoder === "Super Força") {
        alert("Meehh...")
    } else {
        alert("Ih ala, nem tem poder kkkkkkkkkkk");
    }
    let atuacao = parseInt(prompt("Quantas vezes você atua? "));

    alert(
        "Super Poderes" + "\n\nNome do Heroi" + nome + "\nIdade do Heroi" + idade +
        "\nCidade do Heroi" + cidade + "\nSuper Poderes" + poderes + "\n Quantas vezes atua"
    );
}

function exercicio2() {
    let ladoBase = parseFloat(prompt("Digite o valor do lado base do quadrado: "));
    let ladoAltura = parseFloat(prompt("Digite o valor do lado altura do quadrado: "));
    let areaQuadrado = ladoBase * ladoAltura;

    alert("A área do quadrado é: " + areaQuadrado);
}

function exercicio3() {
    let nomeFilme = prompt("Digite o Nome do Filme: ");
    let anoLancamento = parseInt(prompt("Digite o Ano de Lançamento: "));
    let duracaoMinutos = parseInt(prompt("Digite a Duração em Minutos: "));
    let generoFilme = prompt("Digite o Gênero do Filme (ex: Ação, Comédia, Drama): ");
    let jaAssistido = confirm("Você já assistiu ao filme? ");

    alert(
        "Dados do Filme" + "\n\nNome do Filme: " + nomeFilme +
        "\nAno de Lançamento: " + anoLancamento +
        "\nDuração em Minutos: " + duracaoMinutos +
        "\nGênero do Filme: " + generoFilme +
        "\nJá Assistido: " + jaAssistido
    );
}

function exercicio4() {
    let nomeProduto = prompt("Digite o Nome do Produto: ");
    let precoUnitario = parseFloat(prompt("Digite o Preço Unitário: "));
    let quantidadeComprada = parseInt(prompt("Digite a Quantidade Comprada: "));
    let valorTotal = precoUnitario * quantidadeComprada;
    let assinantePremium = confirm("Você é um cliente assinante Premium? ");
    if (assinantePremium) {
        valorTotal = valorTotal * 0.9;
    }

    alert(
        "Dados da Compra" + "\n\nNome do Produto: " + nomeProduto +
        "\nPreço Unitário: " + precoUnitario +
        "\nQuantidade Comprada: " + quantidadeComprada +
        "\nValor Final da Compra: " + valorTotal
    );
}

function exercicio5() {
    let nomeAluno = prompt("Digite o Nome do Aluno: ");
    let primeiraNota = parseFloat(prompt("Digite a Primeira Nota: "));
    let segundaNota = parseFloat(prompt("Digite a Segunda Nota: "));
    let terceiraNota = parseFloat(prompt("Digite a Terceira Nota: "));
    let media = (primeiraNota + segundaNota + terceiraNota) / 3;
    let situacao = "";
    if (media >= 7) {
        situacao = "Aprovado";
    } else if (media >= 5) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }

    alert(
        "Dados do Aluno" + "\n\nNome do Aluno: " + nomeAluno +
        "\nPrimeira Nota: " + primeiraNota +
        "\nSegunda Nota: " + segundaNota +
        "\nTerceira Nota: " + terceiraNota +
        "\nMédia: " + media +
        "\nSituação: " + situacao
    );
}

function exercicio6() {
    let modeloCarro = prompt("Digite o Modelo do Carro: ");
    let anoCarro = parseInt(prompt("Digite o Ano do Carro: "));
    let valorCarro = parseFloat(prompt("Digite o Valor do Carro: "));
    let quantidadeParcelas = parseInt(prompt("Digite a Quantidade de Parcelas: "));
    let valorParcela = valorCarro / quantidadeParcelas;
    let incluirSeguro = confirm("Deseja incluir seguro? ");
    if (incluirSeguro) {
        valorParcela += 150.00;
    }

    alert(
        "Dados do Carro" + "\n\nModelo do Carro: " + modeloCarro +
        "\nAno do Carro: " + anoCarro +
        "\nValor do Carro: " + valorCarro +
        "\nQuantidade de Parcelas: " + quantidadeParcelas +
        "\nValor Final da Parcela: " + valorParcela
    );
}

function exercicio7() {
    let nomeJogo = prompt("Digite o Nome do Jogo: ");
    let horasPorDia = parseFloat(prompt("Digite a Quantidade de Horas Jogadas por Dia: "));
    let diasPorSemana = parseInt(prompt("Digite a Quantidade de Dias Jogados na Semana: "));
    let totalHorasSemana = horasPorDia * diasPorSemana;
    let jogoOnline = confirm("O jogo é online? ");

    alert(
        "Dados do Jogo" + "\n\nNome do Jogo: " + nomeJogo +
        "\nHoras por Dia: " + horasPorDia +
        "\nDias por Semana: " + diasPorSemana +
        "\nTotal de Horas na Semana: " + totalHorasSemana +
        "\nJogo Online: " + jogoOnline
    );
}

function exercicio8() {
    let nomeRestaurante = prompt("Digite o Nome do Restaurante: ");
    let valorConta = parseFloat(prompt("Digite o Valor da Conta: "));
    let quantidadePessoas = parseInt(prompt("Digite a Quantidade de Pessoas na Mesa: "));
    let incluirTaxaServico = confirm("Deseja incluir taxa de serviço? ");
    if (incluirTaxaServico) {
        valorConta = valorConta * 1.1;
    }
    let valorPorPessoa = valorConta / quantidadePessoas;

    alert(
        "Dados da Conta" + "\n\nNome do Restaurante: " + nomeRestaurante +
        "\nValor Final da Conta: " + valorConta +
        "\nValor por Pessoa: " + valorPorPessoa
    );
}

function exercicio9() {
    let nomeFuncionario = prompt("Digite o Nome do Funcionário: ");
    let salarioBase = parseFloat(prompt("Digite o Salário Base: "));
    let horasExtras = parseFloat(prompt("Digite o Valor das Horas Extras no Mês: "));
    let descontos = parseFloat(prompt("Digite o Valor dos Descontos: "));
    let salarioFinal = salarioBase + horasExtras - descontos;
    let imposto = "";
    if (salarioFinal > 3000) {
        imposto = "paga imposto alto";
    } else {
        imposto = "paga imposto padrão";
    }

    alert(
        "Dados do Funcionário" + "\n\nNome do Funcionário: " + nomeFuncionario +
        "\nSalário Final: " + salarioFinal +
        "\nImposto: O funcionário " + imposto
    );
}

function exercicio10() {
    let nomeCliente = prompt("Digite o Nome do Cliente: ");
    let saldoAtual = parseFloat(prompt("Digite o Saldo Atual da Conta: "));
    let valorDeposito = parseFloat(prompt("Digite o Valor do Depósito: "));
    saldoAtual += valorDeposito;
    let valorSaque = parseFloat(prompt("Digite o Valor do Saque: "));
    if (valorSaque <= saldoAtual) {
        saldoAtual -= valorSaque;
    } else {
        alert("Saldo insuficiente para o saque.");
    }

    alert(
        "Dados do Cliente" + "\n\nNome do Cliente: " + nomeCliente +
        "\nSaldo Final da Conta: " + saldoAtual
    );
}

function exemploWhile() {
    let indice = 0;

    // Enquanto o indice for menor que 3, repete
    while (indice < 3) {
        let nome = prompt("Digite o nome");

        // Incrementando a variavel indice em 1, ou seja adicionar 1
        indice = indice + 1;
    }
    alert("Obrigado")
}

function exemploCalcularMedia() {
    let somaNotas = 0;
    let indice = 0;

    while (indice < 3) {
        let nota = parseFloat(prompt("Digite a nota"));

        somaNotas = somaNotas + nota;

        indice = indice + 1;
    }

    const media = somaNotas / 3;
    alert("Media: " + media)
}

function exemploVerificarAprovado() {
    let somaNotas = 0;
    let indice = 0;

    while (indice < 3) {
        let nota = parseFloat(prompt("Digite a nota"));

        somaNotas = somaNotas + 1;

        indice = indice + 1;
    }

    const media = somaNotas / 3;

    let status = "";

    if (media >= 7) {
        status = "Aprovado";
    } else {
        status = "Reprovado";
    }
    alert("Media: " + media + "\nStatus: " + status)
}

function exemploMaiorValor() {
    debbuger
    let indice = 0;
    let maiorAltura = 0;

    while (indice < 5) {
        let altura = parseFloat(prompt("Insira a altura"));

        if (altura > maiorAltura) {
            maiorAltura = altura;
        }
        indice = indice + 1;
    }
    alert("Maior altura é: " + maiorAltura);
}

function exemploMenorValor() {
    let indice = 0;
    let menorNumero = 99999999;

    //While(indice <=4)
    while (indice <= 3) {
        let numero = parseInt(prompt("Digite o numero"))

        if (numero < menorNumero) {
            menorNumero = numero
        }

        indice = indice + 1;
    }
    alert("Menor nunero: " + menorNumero);
}

function exemploDescobrirQuemMaiorValor() {
    let indice = 0;
    let maiorPreco = 0;
    let produtoMaiorPreco = "";

    while (indice < 3) {
        const produto = prompt("Insira o nome do produto");
        const preco = parseFloat(prompt("Digite o preço"));

        if (preco > maiorPreco) {
            maiorPreco = preco;
            // Armazenar o nome do produto pois ele ate o momento
            // tem o maior preço
            produtoMaiorPreco = produto;
        }

        indice = indice + 1
    }

    alert("O produto " + produtoMaiorPreco + " tem o maior preço " + maiorPreco);
}

function exemploQuantidadePorCategoria() {
    let indice = 0;
    let quantidadeAdulto = 0, quantidadeIdoso = 0, quantidadeCrianca = 0;

    while (indice < 5) {
        let idade = parseInt(prompt("Digite a idade"));

        if (idade < 18) {
            quantidadeCrianca = quantidadeCrianca + 1;
        } else if (idade <= 64) {
            quantidadeAdulto = quantidadeAdulto + 1;
        } else {
            quantidadeIdoso = quantidadeIdoso + 1;
        }

        indice = indice + 1;
    }

    alert("Quantidade crianças: " + quantidadeCrianca +
        "\nQuantidade adultos: " + quantidadeAdulto +
        "\nQuantidade idoso: " + quantidadeIdoso
    )
}

function exemploRepetirQuantidadeDoUsuario() {
    let indice = 0, quantidadeP = 0, quantidadeM = 0, quantidadeG = 0;

    let quantidadeDesejada = parseFloat(prompt("Digite a quantidade de calças que deseja cadastrar"));

    while (indice < quantidadeDesejada) {
        let tamanhoCalca = prompt("Digite o tamanho da calça [P/M/G]");

        //Validar informação esta correta
        white(tamanhoCalca != "P" && tamanhoCalca != "M" && tamanhoCalca != "G"); {
            tamanhoCalca = prompt("Tamanho inexistente. \nDigite o tamanho da calça [P/M/G]");
        }

        if (tamanhoCalca === "P") {
            quantidadeP = quantidadeP + 1;
        } else if (tamanhoCalca === "M") {
            quantidadeM = quantidadeM + 1;
        } else if (tamanhoCalca === "G") {
            quantidadeG = quantidadeG + 1;
        }

        indice = indice + 1
    }
    alert(
        "Resumo das calças cadastradas:\n\n" +
        "P: " + quantidadeP + "\n" +
        "M: " + quantidadeM + "\n" +
        "G: " + quantidadeG
    );
}

function exemploAteDigitarSair() {
    // Solicitar nome ate o usuario digitar sair
    let nome = "";

    alert("Digite o nome dos jogadores do time de futebol")

    while (nome != "sair") {
        nome = prompt("Digite o nome ou sair para encerrar");
    }
}

function exemploAteDigitarSairComQuantidade() {
    // Solicitar nome ate o usuario digitar sair
    // quero saber a quantidade de jogadores 
    let nome = "";
    let quantidadeJogadores = 0;

    alert("Digite o nome dos jogadores do time de futebol")

    while (nome != "sair") {
        quantidadeJogadores = quantidadeJogadores + 1;
    }
    alert("Quantidade de jogadores: " + quantidadeJogadores);
}

function exemploMenu() {
    let menu = undefined;

    let numero1 = parseInt(prompt("Digite o primeiro numero"));
    let numero2 = parseInt(prompt("Digite o segundo numero"));

    while (menu != 10) {
        menu = parseInt(prompt(`
            MENU:
            1 - SOMAR
            2 - SUBTRAIR
            3 - MULTIPLICAR
            4 - DIVIDIR
            5 - ALTERAR NUMERO 1
            6 - ALTERAR NUMERO 2
            10 - SAIR`));

        if (menu === 1) {
            const soma = numero1 + numero2;
            alert("Soma: " + soma);

        } else if (menu === 2) {
            const subtracao = numero1 - numero2;
            alert("Subtração: " + subtracao);

        } else if (menu === 3) {
            const multiplicacao = numero1 * numero2;
            alert("Multiplicação: " + multiplicacao);

        } else if (menu === 4) {
            if (numero2 === 0) {
                alert("Não é possivel dividir por zero.");
            } else {
                const divisao = numero1 / numero2;
                alert("Divisão: " + divisao);
            }
        } else if (menu === 5) {
            numero1 = parseInt(prompt("Digite o primeiro numero", numero1))
        } else if (menu === 6) {
            numero2 = parseInt(prompt("Digite o segundo mumero", numero2))
        }
    }
}

function exemploColaboradores() {
    // ✔️ Cadastrar quantos colaboradores eu desejar
    // ✔️ Pedir:
    //  ✔️  - valor hora
    //  ✔️  - quantidade horas
    //  ✔️ - setor [Produção, Qualidade, Financeiro]
    // ✔️ Calcular o salário bruto
    // ✔️ Calcular o salário líquido
    // ✔️ Maior salário líquido
    // ✔️ Menor salário bruto
    // ✔️ Média dos salários brutos
    // ✔️ Nome pessoa que trabalha mais horas
    // Quantidade de pessoas por Setor

    let quantidadeDesejada = parseInt(prompt("Digite a quantidade de colaboradores"));
    let maiorSalarioLiquido = 0;
    let menorSalarioBruto = 99999999;
    let somaSalarioBrutos = 0;
    let maiorQuantidadeHoras = 0;
    let nomeMaiorQuantidadeHoras = "";
    let quantidadeProducao = 0, quantidadeQualidade = 0, quantidadeFinanceiro = 0;
    let quantidadeOutroSetor = 0;

    let indice = 0;

    while (indice < quantidadeDesejada) {
        let nome = prompt("Digite o nome do colaborador");
        let valorHora = parseFloat(prompt("Digite o valor da hora"));
        let horasTrabalhadas = parseInt(prompt("Digite a quantidade de horas trabalhadas"));
        let setor = prompt(`
Digite o nome do setor:
Financeiro
Produção
Qualidade`);
        let salarioBruto = valorHora * horasTrabalhadas;
        let inss = salarioBruto * 0.08; // Calcular 8% de inss
        let ir = salarioBruto * 0.275; // Calcular 27.5% de imposto de renda
        let valeRefeicao = 1400;

        let salarioLiquido = salarioBruto - inss - ir + valeRefeicao;
        alert(
            "Folha de Pagamento\n\n" +
            "Colaborador: " + nome + "\n" +
            "Setor: " + setor + "\n\n" +
            "Valor da hora: R$ " + valorHora.toFixed(2) + "\n" +
            "Horas trabalhadas: " + horasTrabalhadas + "\n\n" +
            "Salário bruto: R$ " + salarioBruto.toFixed(2) + "\n" +
            "Desconto INSS (8%): R$ " + inss.toFixed(2) + "\n" +
            "Desconto IR (27,5%): R$ " + ir.toFixed(2) + "\n" +
            "Vale refeição: R$ " + valeRefeicao.toFixed(2) + "\n\n" +
            "Salário líquido: R$ " + salarioLiquido.toFixed(2)
        );

        if (salarioLiquido > maiorSalarioLiquido) {
            maiorSalarioLiquido = salarioLiquido;
        }

        if (salarioBruto < menorSalarioBruto) {
            menorSalarioBruto = salarioBruto;
        }

        if (horasTrabalhadas > maiorQuantidadeHoras) {
            maiorQuantidadeHoras = horasTrabalhadas;
            nomeMaiorQuantidadeHoras = nome;
        }

        if (setor === "Qualidade") {
            quantidadeQualidade = quantidadeQualidade + 1;
        } else if (setor === "Financeiro") {
            quantidadeFinanceiro = quantidadeFinanceiro + 1;
        } else if (setor === "Produção") {
            quantidadeProducao = quantidadeProducao + 1;
        } else {
            quantidadeOutroSetor = quantidadeOutroSetor + 1;
        }

        somaSalarioBrutos = somaSalarioBrutos + salarioBruto;

        indice = indice + 1;// Incrementar
    }

    let mediaSalarioBrutos = somaSalarioBrutos / quantidadeDesejada;
    alert(
        "RESUMO GERAL DOS COLABORADORES\n\n" +

        "Maior salário líquido: R$ " + maiorSalarioLiquido.toFixed(2) + "\n" +
        "Menor salário bruto: R$ " + menorSalarioBruto.toFixed(2) + "\n" +
        "Média dos salários brutos: R$ " + mediaSalarioBrutos.toFixed(2) + "\n\n" +

        "Maior quantidade de horas trabalhadas: " + maiorQuantidadeHoras + "\n" +
        "Colaborador com mais horas: " + nomeMaiorQuantidadeHoras + "\n\n" +

        "Quantidade por setor:\n" +
        "Financeiro: " + quantidadeFinanceiro + "\n" +
        "Produção: " + quantidadeProducao + "\n" +
        "Qualidade: " + quantidadeQualidade + "\n" +
        "Outros setores: " + quantidadeOutroSetor
    );
}