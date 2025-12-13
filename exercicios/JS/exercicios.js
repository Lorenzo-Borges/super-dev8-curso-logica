/* 
3. Criar uma função exercicio03
- Solicitar o nome do filme
- Solicitar o ano de lançamento (número)
- Solicitar a duração em minutos (número)
- Solicitar o gênero do filme (ex: Ação, Comédia, Drama)
- Solicitar se o filme já foi assistido (boolean - confirm)
- Apresentar os dados do filme



4. Criar uma função exercicio04
- Solicitar o nome do produto
- Solicitar o preço unitário (número com casa decimal)
- Solicitar a quantidade comprada (número inteiro)
- Calcular o valor total (preço unitário * quantidade)
- Solicitar se o cliente é assinante Premium (boolean - confirm)
- Se for assinante Premium, aplicar 10% de desconto no valor total
- Apresentar todos os dados e o valor final da compra



5. Criar uma função exercicio05
- Solicitar o nome do aluno
- Solicitar a primeira nota (número)
- Solicitar a segunda nota (número)
- Solicitar a terceira nota (número)
- Calcular a média das 3 notas
- Se a média for maior ou igual a 7, considerar "Aprovado"
- Se a média estiver entre 5 e 6.99, considerar "Recuperação"
- Se a média for menor que 5, considerar "Reprovado"
- Apresentar as notas, a média e a situação do aluno



6. Criar uma função exercicio06
- Solicitar o modelo do carro
- Solicitar o ano do carro (número)
- Solicitar o valor do carro (número)
- Solicitar a quantidade de parcelas (número inteiro)
- Calcular o valor da parcela (valor do carro / quantidade de parcelas)
- Solicitar se o cliente quer incluir seguro (boolean - confirm)
- Se incluir seguro, adicionar R$ 150,00 ao valor da parcela
- Apresentar todos os dados e o valor final da parcela



7. Criar uma função exercicio07
- Solicitar o nome do jogo
- Solicitar a quantidade de horas jogadas por dia (número)
- Solicitar a quantidade de dias jogados na semana (número)
- Calcular o total de horas jogadas na semana (horas por dia * dias)
- Solicitar se o jogo é online (boolean - confirm)
- Apresentar os dados do jogo e o total de horas semanais



8. Criar uma função exercicio08
- Solicitar o nome do restaurante
- Solicitar o valor da conta (número com casas decimais)
- Solicitar a quantidade de pessoas na mesa (número inteiro)
- Calcular quanto cada pessoa deve pagar (valor da conta / quantidade de pessoas)
- Solicitar se será incluída taxa de serviço (boolean - confirm)
- Se for incluir taxa de serviço, adicionar 10% ao valor da conta antes de dividir
- Apresentar o valor final da conta e o valor por pessoa



9. Criar uma função exercicio09
- Solicitar o nome do funcionário
- Solicitar o salário base (número)
- Solicitar o valor das horas extras no mês (número)
- Solicitar o valor dos descontos (número)
- Calcular o salário final (salário base + horas extras - descontos)
- Verificar se o salário final é maior que 3000
    - Se maior que 3000, informar que o funcionário paga imposto alto
    - Se menor ou igual a 3000, informar que o funcionário paga imposto padrão
- Apresentar todos os dados e o salário final



10. Criar uma função exercicio10
- Solicitar o nome do cliente
- Solicitar o saldo atual da conta (número)
- Solicitar o valor de um depósito (número)
- Atualizar o saldo com o depósito
- Solicitar o valor de um saque (número)
- Verificar se o saque é menor ou igual ao saldo
    - Se for possível, atualizar o saldo subtraindo o saque
    - Se não for possível, não alterar o saldo e avisar que saldo é insuficiente
- Apresentar o nome do cliente e o saldo final da conta
*/

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