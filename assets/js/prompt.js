function solicitarString() {
    let nome = prompt("Digite seu nome");
    let sobrenome = prompt("Digite seu sobrenome");

    let nomeSobrenome = nome + " " + sobrenome;
    alert("Nome completo: " + nomeSobrenome)
}

function solicitarInt() {
    let numeroCartao = parseInt(prompt("Digite o numero do cartão"));
    let codigoSegurança = parseInt(prompt("Digite o codigo de segurança"));

    alert("Numero: " + parseCartao + "\nCVV: " + codigoSegurança);
}

function solicitarFloat() {
    let saldoBancario = parseFloat(prompt("Digite o saldo bancario"));
    const saque = parseFloat(prompt("Digite o valor de saque"));

    saldoBancario = saldoBancario - saque;

    alert("Saque realizado" + saque + "\nSaldo atual: " + saldoBancario);
}

function solicitarBoolean() {
    let vencido = confirm("Produto vencido");

    alert("produto vencido");
}

function paciente() {
    let nome = prompt("Digite o nome do paciente");
    const idade = parseInt(prompt("Digite a idade"));
    const peso = parseInt(prompt("Digite o peso"));
    const possuiPlanoSaude = confirm("Possui Plano de Saude?");
    const cpf = prompt("Digite o CPF");

    let planoSaude = "";
    // se possuiPlanoSaude for igual a verdadeiro
    if (possuiPlanoSaude === true) {
        planoSaude = prompt("Digite o nome do plano de saude");
    }

    const tipoSanguineo = prompt("Digite o tipo");
    const altura = parseFloat(prompt("Digite a altura"));

    const ungencia = prompt('Escolha o nivel da Urgencia [Migue, Atestado, Dorzinha, Dengue, Dor Extrema]');

    let tempoEspera = 0;
    if (urgencia === "Migue") {
        tempoEspera = 180;
    } else if (urgencia === "Atestado") {
        tempoEspera = 150;
    } else if (urgencia === "Dorzinha") {
        tempoEspera = 120;
    } else if (urgencia === "Dengue") {
        tempoEspera = 60;
    } else if (urgencia === "Dor Extrema") {
        tempoEspera = 30;
    } else {
        alert("Nivel de Urgencia inexistente");
        return;
    }
    alert(
        "📔 Dados do paciente\n\n" +
        "Nome: " + nome + "\n" +
        "Idade: " + idade + "anos\n" +
        "Peso: " + peso + "kg\n" +
        "CPF: " + cpf + "\n" +
        "Possui plano de saude: " + (possuiPlanoSaude ? "Sim" : "Não") + "\n" +
        (possuiPlanoSaude ? "Plano de saude: " + planoSaude + "\n" : "") +
        "Tipo sanguineo: " + tipoSanguineo + "\n" +
        "Altura: " + altura + "\n" +
        "Tempo de espera: " + tempoEspera + "minutos"
    );
}