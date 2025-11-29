function exemploVariaveisTexto() {
    const produto1 = "Xbox";
    const produto2 = " Gameboy Color";

    //concatenaçao
    const produtos = produto1 + " " + produto2;
    alert("Produto: " + produtos);
}

function exemploVariaveisInteiro() {
    const numero1 = 18;
    const numero2 = 147;

    const soma = numero1 + numero2;

    alert("Soma: " + soma);

    console.log("deu boa troxao");
}

function exemploVariaveisFloat() {
    const quantidadeHoras = 10;
    const valorHora = 2.31;

    const salarioBruto = quantidadeHoras * valorHora;

    alert("Salario Bruto: " + salarioBruto);
}

function exemploVariaveisBoolean() {
    //let:permite alterar o valor
    //const:nao permite alterar o valor
    let lorenzoFechouAba = false;

    lorenzoFechouAba = true;

    alert("Lorenzo fechou a aba: " + lorenzoFechouAba);
}

function exemploVariaveis() {
    const destino = "Maceio";
    const quantidadeDias = 20;
    const precoDiaria = 1300.1;
    let finalizadaCompra = false;

    let valorTotal = quantidadeDias * precoDiaria;

    // Usuario finalizou aa compra
    finalizadaCompra = true;

    alert(
        "Destino: " + destino +
        "\nQuantidade de Dias: " + quantidadeDias +
        "\nPreço Diaria: " + precoDiaria +
        "\nFinalizar compra: " + finalizadaCompra +
        "\nValor total: R$ " + valorTotal
    );
}

//criar uma função exercicioPokemon

function exercicioPokemon() {
    const nome = "Ceruledge";
    const numero = 937;
    const descricao = "The fiery blades on its arms burn fiercely with the lingering resentment of a sword wielder who fell before accomplishing their goal.";
    let altura = 1.6;
    let peso = 62.0;
    const categoria = "Fire Blades";
    const habilidades = "Flash Fire";

    const nome2 = "Armarouge";
    const numero2 = 936;
    const descricao2 = "The fiery blades on its arms burn fiercely with the lingering resentment of a sword wielder who fell before accomplishing their goal.";
    let altura2 = 1.5;
    let peso2 = 85.0;
    const categoria2 = "Fire Warrior";
    const habilidades2 = "Flash Fire";

    let alturaImc = altura * altura;
    let imc = peso / alturaImc;

    let alturaImc2 = altura2 * altura2;
    let imc2 = peso2 / alturaImc2;


    alert("O IMC do Pokemon é " + imc +
        "\nNome= " + nome +
        "\nNumero da Pokedex= " + numero +
        "\nDescrição= " + descricao +
        "\nAltura= " + altura +
        "\nPeso= " + peso +
        "\nCategoria= " + categoria +
        "\nHabilidade= " + habilidades +
        "\nO IMC do Pokemon é " + imc2 +
        "\nNome= " + nome2 +
        "\nNumero da Pokedex= " + numero2 +
        "\nDescrição= " + descricao2 +
        "\nAltura= " + altura2 +
        "\nPeso= " + peso2 +
        "\nCategoria= " + categoria2 +
        "\nHabilidade= " + habilidades2
    );
}

