let numero = 20;
const eNumeroPar = (numero % 2) === 0;

const precoGasolinaKM  = 5.79;
const precoEtanolKM  = 3.64;
const kMPorLitro = 10;
const tipoDeCombustivelGasolina = "GASOLINA";
const tipoDeCombustivelEtanol = "ETANOL";

let seuTipoDeCombustivel = "ETANOLi";
let gastoMedioCombustivelKM = 0.0;

if (seuTipoDeCombustivel === tipoDeCombustivelGasolina){
    gastoMedioCombustivelKM = precoGasolinaKM / kMPorLitro;
}else if(seuTipoDeCombustivel === tipoDeCombustivelEtanol){
    gastoMedioCombustivelKM =  precoEtanolKM / kMPorLitro;
}

let distanciaVagemKM = 100;
let valorGastoViagem =  distanciaVagemKM * gastoMedioCombustivelKM;

console.log(valorGastoViagem.toFixed(4));

