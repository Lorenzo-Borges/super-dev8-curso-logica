function exercicio1(){
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
        } else 
            { alert("Ih ala, nem tem poder kkkkkkkkkkk");
        }
    let atuacao = parseInt(prompt("Quantas vezes você atua? "));

    alert(
        "Super Poderes" + "\n\nNome do Heroi" + nome + "\nIdade do Heroi" + idade +
        "\nCidade do Heroi" + cidade + "\nSuper Poderes" + poderes + "\n Quantas vezes atua"
    );
}

function exercicio2(){
    let ladoBase = parseFloat(prompt("Digite o valor do lado base do quadrado: "));
    let ladoAltura = parseFloat(prompt("Digite o valor do lado altura do quadrado: "));
    let areaQuadrado = ladoBase * ladoAltura;

    alert("A área do quadrado é: " + areaQuadrado);
}

function exercicio3(){
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

function exercicio4(){
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

function exercicio5(){
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

function exercicio6(){
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

function exercicio7(){
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

function exercicio8(){
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

function exercicio9(){
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

function exercicio10(){
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