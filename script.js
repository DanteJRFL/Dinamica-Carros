const VELOCIDADE_MAX = 300;
var velocidadeCarroBranco = 0;
var velocidadeCarroVermelho = 0;

var carroSelecionado = ""

const carroBranco = document.getElementById("white")
const btnBranco = document.getElementById("branco")

const carroVermelho = document.getElementById("red")
const btnVermelho = document.getElementById("vermelho")

const btnAcelerar = document.getElementById('acelerar')
const btnDesacelerar = document.getElementById('desacelerar')
const btnResetar = document.getElementById('resetar')

const result = document.getElementById("result");

var isCarroSelecionado = false;

function selecionar(tipoCarro) {
    if (tipoCarro == 'vermelho') {
        document.body.style.backgroundColor = "red"
        document.body.style.color = "white"
        result.innerText = "Vermelho"
        carroSelecionado = "vermelho"
    } else {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        result.innerText = "Branco"
        carroSelecionado = "branco"
    }

    btnAcelerar.style.display = "block"
    btnDesacelerar.style.display = "block"
    btnResetar.style.display = "block"
}

btnAcelerar.addEventListener('click', () => {

    if (carroSelecionado == "branco") {
        velocidadeCarroBranco += 60
        movimentarCarroBranco(velocidadeCarroBranco);
    } else {
        velocidadeCarroVermelho += 60
        movimentarCarroVermelho(velocidadeCarroVermelho);
    }

})

btnDesacelerar.addEventListener('click', () => {

    if (carroSelecionado == "branco") {
        velocidadeCarroBranco -= 60;
        movimentarCarroBranco(velocidadeCarroBranco);
    } else {
        velocidadeCarroVermelho -= 60
        movimentarCarroVermelho(velocidadeCarroVermelho);
    }

})



function movimentarCarroBranco(velocidadeAtual) {
    switch (velocidadeAtual) {
        case 60:
            carroBranco.style.top = "55px"
            carroBranco.style.left = "212px"
            carroBranco.style.height = "45px"
            carroBranco.style.width = "45px"
            break;
        case 120:
            carroBranco.style.top = "50px"
            carroBranco.style.left = "220px"
            carroBranco.style.height = "40px"
            carroBranco.style.width = "40px"
            break;
        case 180:
            carroBranco.style.top = "45px"
            carroBranco.style.left = "226px"
            carroBranco.style.height = "35px"
            carroBranco.style.width = "35px"
            break;
        case 240:
            carroBranco.style.top = "40px"
            carroBranco.style.left = "232px"
            carroBranco.style.height = "30px"
            carroBranco.style.width = "30px"
            break;
        case 300:
            carroBranco.style.top = "35px"
            carroBranco.style.left = "238px"
            carroBranco.style.height = "25px"
            carroBranco.style.width = "25px"
            break;
    }
}

function movimentarCarroVermelho(velocidadeAtual) {
    switch (velocidadeAtual) {
        case 60:
            carroVermelho.style.top = "55px"
            carroVermelho.style.right = "212px"
            carroVermelho.style.height = "45px"
            carroVermelho.style.width = "45px"
            break;
        case 120:
            carroVermelho.style.top = "50px"
            carroVermelho.style.right = "220px"
            carroVermelho.style.height = "40px"
            carroVermelho.style.width = "40px"
            break;
        case 180:
            carroVermelho.style.top = "45px"
            carroVermelho.style.right = "226px"
            carroVermelho.style.height = "35px"
            carroVermelho.style.width = "35px"
            break;
        case 240:
            carroVermelho.style.top = "40px"
            carroVermelho.style.right = "232px"
            carroVermelho.style.height = "30px"
            carroVermelho.style.width = "30px"
            break;
        case 300:
            carroVermelho.style.top = "35px"
            carroVermelho.style.right = "238px"
            carroVermelho.style.height = "25px"
            carroVermelho.style.width = "25px"
            break;
    }
}
//Utilizamos w e s para acelerar/desacelerar
document.addEventListener('keypress', (e) => {
    console.log(e.key)
    if (e.key == "r") {
        resetar()
    }

    if (e.key == "w") {

        if (carroSelecionado == "branco") {
            velocidadeCarroBranco += 60
            movimentarCarroBranco(velocidadeCarroBranco);
        } else {
            velocidadeCarroVermelho += 60
            movimentarCarroVermelho(velocidadeCarroVermelho);
        }
    } else if (e.key == "s") {
        if (carroSelecionado == "branco") {
            velocidadeCarroBranco -= 60;
            movimentarCarroBranco(velocidadeCarroBranco);
        } else {
            velocidadeCarroVermelho -= 60
            movimentarCarroVermelho(velocidadeCarroVermelho);
        }
    }

})

btnResetar.addEventListener("click", () => {
    resetar()
})

function resetar() {
    carroVermelho.style.top = "60px"
    carroVermelho.style.right = "205px"
    carroVermelho.style.height = "50px"
    carroVermelho.style.width = "50px"

    carroBranco.style.top = "60px"
    carroBranco.style.left = "205px"
    carroBranco.style.height = "50px"
    carroBranco.style.width = "50px"

    result.innerText = "?"

    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    isCarroSelecionado = false;
    carroSelecionado = "";
    velocidadeCarroBranco = 0;
    velocidadeCarroVermelho = 0;

    btnAcelerar.style.display = 'none'
    btnDesacelerar.style.display = 'none'
    btnResetar.style.display = 'none'
}