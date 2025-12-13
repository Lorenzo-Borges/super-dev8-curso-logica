/* 
1. Criar uma função exercicio01()
- Pedir 5 nomes de alunos.
- Usar uma variável indice começando em 0.
- Enquanto o indice for menor que 5:
    - Pedir o nome do aluno com prompt.
    - Mostrar um alert com "Aluno cadastrado: " + nome.
    - Incrementar o indice.
- Ao final, mostrar um alert "Cadastro finalizado".

2. Criar uma função exercicio02()
- Pedir 4 cores favoritas.
- Usar while com indice começando em 0.
- Enquanto o indice for menor que 4:
    - Pedir uma cor (ex: "Digite uma cor").
    - Mostrar um alert com "Cor escolhida: " + cor.
    - Incrementar o indice.
- Ao final, mostrar um alert "Obrigado por informar suas cores favoritas".

3. Criar uma função exercicio03()
- Pedir 3 nomes de cidades que o usuário quer viajar.
- Usar while com indice começando em 0.
- Enquanto o indice for menor que 3:
    - Pedir o nome da cidade.
    - Mostrar um alert com "Destino " + (indice + 1) + ": " + cidade.
    - Incrementar o indice.
- Ao final, mostrar um alert "Planejamento de viagem concluído".

4. Criar uma função exercicio04()
- Pedir 5 números inteiros.
- Usar while com indice começando em 0.
- Criar uma variável soma começando em 0.
- Enquanto o indice for menor que 5:
    - Pedir um número com prompt.
    - Converter para inteiro (parseInt).
    - Somar na variável soma.
    - Incrementar o indice.
- Ao final, mostrar um alert com "Soma total: " + soma.

5. Criar uma função exercicio05()
- Pedir 3 filmes favoritos.
- Usar while com indice começando em 0.
- Enquanto o indice for menor que 3:
    - Pedir o nome do filme.
    - Pedir o ano de lançamento.
    - Mostrar um alert com "Filme: [nome] - Ano: [ano]".
    - Incrementar o indice.
- Ao final, mostrar um alert "Lista de filmes cadastrada com sucesso".
*/

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
    let indice = 0;

    while(indice < 5) {
        let numero = parseInt(prompt("Digite um numero: "));

        soma = numero + numero
        indice = indice + 1
    } 
    
    alert("Soma total:" + soma)
}

function exercicio05() {
    let indice = 0;

    while (indice < 3) {
        let nomeFilme = prompt("Digite o nome do filme: ");
        let numero = parseInt(prompt("Digite um numero"))
        soma = numero + numero
    }
    alert 
}

/*
4. Criar uma função exercicio04()
- Pedir 5 números inteiros.
- Usar while com indice começando em 0.
- Criar uma variável soma começando em 0.
- Enquanto o indice for menor que 5:
    - Pedir um número com prompt.
    - Converter para inteiro (parseInt).
    - Somar na variável soma.
    - Incrementar o indice.
- Ao final, mostrar um alert com "Soma total: " + soma.
*/

/*
5. Criar uma função exercicio05()
- Pedir 3 filmes favoritos.
- Usar while com indice começando em 0.
- Enquanto o indice for menor que 3:
    - Pedir o nome do filme.
    - Pedir o ano de lançamento.
    - Mostrar um alert com "Filme: [nome] - Ano: [ano]".
    - Incrementar o indice.
- Ao final, mostrar um alert "Lista de filmes cadastrada com sucesso".
*/