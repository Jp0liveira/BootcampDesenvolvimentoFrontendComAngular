/*
O IMC  - Indice de massa corporal  é um critério da organização mundial da saude para dar uma indicacao sobre a condicao do peso de uma pessoa adulta;

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso de uma pessoa e a altura de um adulto mostre sua condicao de acordo com a tabela abaixo:]

IMC em adultos condicao:
- Abaixo de 18.5; Abaixo do peso;
- Entre 18.5 e 25 peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 obeso;
- Acima de 40 Obesidade grave;   
*/

let pesoKg = 82.0;
let alturaCm = 1.86;
const IMC = (pesoKg / (alturaCm**2)).toPrecision(4) ;
if (IMC < 18.5){
    console.log("Abaixo do Peso. IMC = " + IMC);
}else if(IMC >= 18.5 && IMC <= 25){
    console.log("Peso normal. IMC = " + IMC);
}else if(IMC >= 25 && IMC <= 30){
    console.log("Acima do peso. IMC = " + IMC);
}else if(IMC >= 30 && IMC <= 40){
    console.log("Obeso. IMC = " + IMC);
}else{
    console.log("Obesidade grave. IMC = " + IMC);
}

