function sayMyName(name){
    console.log('Your name is ' + name);
    console.log(typeof(name));
}

function quadrado(valor){
    return valor**2;
}

function calcularIMC(pesoKg, alturaCm){
    return (pesoKg / (alturaCm**2)).toPrecision(4);
}

function classificarIMC(IMC){
    if (IMC < 18.5){
        return ("Abaixo do Peso. IMC = " + IMC);
    }else if(IMC >= 18.5 && IMC < 25){
        return ("Peso normal. IMC = " + IMC);
    }else if(IMC >= 25 && IMC < 30){
        return ("Acima do peso. IMC = " + IMC);
    }else if(IMC >= 30 && IMC < 40){
        return ("Obeso. IMC = " + IMC);
    }else{
        return ("Obesidade grave. IMC = " + IMC);
    }
}

function main(){
    console.log('programa Principal.');
    sayMyName('joao paulo');
    quadrado(10);

    let pesoKg = 82.0;
    let alturaCm = 1.86;
    const IMC  = calcularIMC(pesoKg, alturaCm);
    console.log(classificarIMC(IMC));
}
main();

// main() imdediatamente invocada
(function (){
    console.log('programa Secundario.');
    sayMyName('paulo joao');
    quadrado(20);
    
    let pesoKg = 97.0;
    let alturaCm = 1.90;
    const IMC  = calcularIMC(pesoKg, alturaCm);
    console.log(classificarIMC(IMC));
})();