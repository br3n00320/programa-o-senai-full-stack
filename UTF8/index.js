//vetor ou array
var listDEpecas = ["Amortecedor", "motor", "filtro do ar"];

let peso = 50;

// peso da peça tem que ser igual a 100 para poder fazer o cadastro
if (peso < 100) {

    console.log("a peça pesar no minino 100g");

} else {

    console.log("A peça tem o peso adequado");
}

// verificação de quantidade de peças dentro de um vetor pu array
if (listDEpecas.length < 11) {
    console.log(" é possivel fazer mais cadastro de peças")
} else {
    console.log("não é possivel fazer mais cadastro de peças")
}

let nomepeca = "ferramenta"
if (nomepeca.length > 3 ) {

console.log("quantidades de peças adquadas")
}else if (nomepeca.length == 0 ) {

    console.log("não pode ser vazio")

} else {
    console.log ("o nome da peca tem que haver mais de 3 caracteres")

}

