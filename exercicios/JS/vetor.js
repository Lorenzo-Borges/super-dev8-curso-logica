// var => Variavel global, ou seja, existe em todos os arquivos (inseguro)
// let => Variavel que possui escopo, ou seja, existe dentro do if, while, function....
//const => Variavel que não permite alteração, ou seja, uma vez que foi definido o valor nao é possivel alterar. Tem a mesma caracterista do let em relação ao escopo, existe dentro do if, while, function, fora deixa de existir(ela morre).

function exemplo01(){
    alert("Abre o console");
    // let nome1 = "Maça"
    // let nome2 = "Pera"
    // let nome3 = "Tomate"

    // Criando um vetor
    let frutas = [];

    //Adicionando itens ao vetor
    frutas.push("Maçã");
    frutas.push("Pera");
    frutas.push("Tomante");
    frutas.push("Rucula");

    //Alterando valor no vetor
    frutas[2] = "Tomate";

    //Remover Rucula da lista de frutas pq n é fruta
    frutas.splice(3, 1); // 3 é a posição da rucula

    console.log("tamanho do vetor" + frutas.length);

    //Acessando posição especifica do vetor, ou seja, acessando o valor armazenado naquela posição
    console.log("fruta 1: " + frutas[0]);
    console.log("fruta 2: " + frutas[1]);
    console.log("fruta 3: " + frutas[2]);
}

function exercicio01Jogos(){
    let jogos = [];

    jogos.push("Tíbia");
    console.log(jogos.length);

    jogos.push("Battlefield 4");
    console.log(jogos);

    jogos.push("League of Legends");
    jogos.push("Medal of Honor");
    jogos.push("GTA 6");

    jogos.splice(2, 1);

    console.log(jogos);

    jogos[3] = "GTA VI";

    console.log(jogos);
}

function exercicio02Pratos(){
    let pratos = [];

    pratos.push("Strogonoff");
    pratos.push("Panqueca");
    pratos.push("Salada");
    
    console.log(pratos);

    pratos.splice(2, 1);

    console.log(pratos.length);

    pratos.push("Risoto");
    pratos.push("Sopa");

    console.log(pratos);

    pratos[1] = "Panqueca de carne";

    console.log(pratos);
}