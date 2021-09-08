//carne 400gr por pessoa + de  6horas -650
//Cerveja 1200ml por pessoas + 6horas - 2000ml
//Refrigerante/água 1000ml por pessoas 6 horas - 1500ml

//crianças vale por 0,5;

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");
//funcao para calcular numero de carne//
function calcular(){
    console.log("Calculando...");


    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
  
    let qdtTotalCarne = carnePP(duracao) * adultos  + (carnePP(duracao)/ 2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * criancas;
    

    console.log( +qdtTotalCarne);
    console.log(qdtTotalCerveja);
    console.log(qdtTotalBebidas);

    resultado.innerHTML = `<p>${qdtTotalCarne /1000} kg de carne</p>`;
    resultado.innerHTML +=`<p>${Math.ceil(qdtTotalCerveja/355)} Latas de cerveja`;
    resultado.innerHTML +=`<p>${Math.ceil(qdtTotalBebidas/2000)} Pets de 2lt`;
 
}
//function criada para usar pensar se a duracao do churrasco for maior que 6 horas//
function carnePP(duracao){
    
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
    
}
//function da cerveja por pessoas//
function cervejaPP(duracao){
    
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
    
}
//function da Refrieagua
function bebidasPP(duracao){
    if(duracao >=6){
        return 1500;
    }else{
        return 1000;
    }

}
