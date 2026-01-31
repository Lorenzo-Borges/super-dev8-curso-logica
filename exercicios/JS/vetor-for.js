//Incrementar
// i = i + 1; // i = (atual) + 1;
// i += 1; // i = (atual) + 1;
// i++ // i // (atual +1;)

function exemploJogos() {
    let jogos = [];

    // for(let i = 0; i < 5; i += 1)
    for (let i = 0; i < 5; i += 1) {
        let nomeJogo = prompt("Digite o nome do jogo");

        jogos.push(nomeJogo);
    }

    //Apresentar os jogos
    let textoParaApresentar = "";
    for (let i = 0; i < 5; i += 1) {
        let nomeJogo = jogos[i];
        textoParaApresentar = textoParaApresentar + nomeJogo + "\n";
    }

    alert("Jogos: " + textoParaApresentar);
}

function calculadora() {
    let = numeros = [];

    //Solicitar os numeros
    for (let i = 0; i < 4; i += 1) {
        let numero = parseInt(prompt('Digite'));

        // Armazenar no vetor
        numeros.push(numero);
    }

    //Somar os numeros
    let somaManual = numeros[0] + numeros[1] + numeros[2] + numeros[3];
    alert("Soma manual: " + somaManual);

    let soma = 0;
    for (let i = 0; i < 4; i += 1) {
        let numeros = numeros[i];
        soma = soma + numero;
    }

    alert("Soma; " + soma);
}

function calcularFolhasPagamento() {
    let colaboradores = [];
    let horasTrabalhadas = [];
    let valoresPorHora = [];
    let descontos = [];
    let auxilios = [];
    let salarioBrutos = [];
    let salariosLiquidos = [];

    let quantidadesColaboradores = parseInt(
        prompt("Digite a quantidade de colaboradores que deseja gerar as folhas de pagamento"));

    for (let i = 0; i < quantidadesColaboradores; i += 1) {
        let nomeColaborador = prompt("Digite o nome do colaborador");
        let quantidadeHorasTrabalhadas = parseInt(prompt("Digite a quantidade de horas trabalhadas"));
        let valorPagoHora = parseFloat(prompt("Digite o valor pago por hora"));

        let temDescontos = confirm("tem descontos?");
        let valorDescontos = 0;
        if (temDescontos === true) {
            valorDescontos = parseFloat(prompt("Digite o valor do desconto"));
        }

        let temAuxilios = confirm("tem auxilio?");
        let valorAuxilios = 0;
        if (temAuxilios === true) {
            valorAuxilios = parseFloat(prompt("Digite o valor do auxilio"));
        }

        colaboradores.push(nomeColaborador);
        horasTrabalhadas.push(quantidadeHorasTrabalhadas);
        valoresPorHora.push(valorPagoHora);
        descontos.push(valorDescontos);
        auxilios.push(valorAuxilios);

        console.log(colaboradores, horasTrabalhadas, valoresPorHora, descontos, auxilios);
    }


    for (let i = 0; i < quantidadesColaboradores; i += 1) {
        const quantidadeHorasTrabalhadas = horasTrabalhadas[i];
        const valorPagoHora = valoresPorHora[i];

        let salarioBruto = quantidadeHorasTrabalhadas * valorPagoHora;
        salarioBrutos.push(salarioBruto);
    }

    for (let i = 0; i < quantidadesColaboradores; i += 1) {
        let salariosLiquido = salarioBrutos[i] - descontos[i] + auxilios[i];
        salariosLiquidos.push(salariosLiquido);
    }

    for (let i = 0; i < quantidadesColaboradores; i += 1) {
        const nome = colaboradores[i];
        const horas = horasTrabalhadas[i];
        const valorHora = valoresPorHora[i];
        const bruto = salarioBrutos[i];
        const desconto = descontos[i];
        const auxilio = auxilios[i];
        const liquido = salariosLiquidos[i];

        alert(
            "🧾 Folha de Pagamento\n" +
            "━━━━━━━━━━━━━━━━━━━━\n" +
            "👤 Colaborador: " + nome + "\n" +
            "⏱️ Horas trabalhadas: " + horas + "\n" +
            "💰 Valor por hora: R$ " + valorHora.toFixed(2) + "\n" +
            "🟢 Salário bruto: R$ " + bruto.toFixed(2) + "\n" +
            "🔻 Descontos: R$ " + desconto.toFixed(2) + "\n" +
            "🎁 Auxílios: R$ " + auxilio.toFixed(2) + "\n" +
            "━━━━━━━━━━━━━━━━━━━━\n" +
            "✅ Salário líquido: R$ " + liquido.toFixed(2) + " 💵"
        );

    }
}

function palavras() {
    let palavras = ["Roblox", "Free Fire", "GTA"];
    let nomeJogador = prompt("Digite o seu nome");

    let quantidadeTenativas = 10;

    if (nomeJogador.toLowerCase().includes("Lorenzo")) {
        quantidadeTenativas = 3;

    }
    
    while (quantidadeTenativas >= 0) {
        let nomeJogo = prompt("tente adivinhar o nome dos 3 jogos");
        
        let indiceJogo = palavras.indexOf(nomeJogo);
        
        //Verificando se o nome que o usuario digitou esta dentro da lista
        if (palavras.includes(nomeJogo)) {
            //Dar mais 3 tentativas em caso de acerto
            quantidadeTenativas += 3;
            //remover da lista o jogo que acertou 
            palavras.splice(indiceJogo, 1);
            console.log(palavras);
            alert(`Acertou ${nomeJogo}`);
            if (palavras.length === 0) {
                alert("Ganhou o jogo");
                break;
            }
        } else {
            // Decrementar em 1
            quantidadeTenativas -= 1;
            alert(`Errou\nVocê tem ${quantidadeTenativas} tentativas restantes`);
        }
        console.log("Quanidade de tentativas: " + quantidadeTenativas + "\npalavras: " + palavras);
        if (quantidadeTenativas <= 0) {
            alert("Perdeu o jogo");
            break;
        }
    }
}