function exercicio1(){
    let nome = prompt("Digite o Nome do Personagem: ");
    let idade = parseInt(prompt("Digite a idade do Personagem: "));
    let cidade = prompt("Digite a Cidade: ");
    let poderes = confirm("Você tem poderes? ");
        let tipoPoder = prompt("Qual seu tipo de Poder [Levitação, Manipulação Elemental, Poderes Psiquicos, Super Força] ");}
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
/*
criar um função exercicio02 
solicitar um lado base (numero) do quadrado
solicitar um lado altura (numero) do quadrado
apresentar a area do quadrado
*/
