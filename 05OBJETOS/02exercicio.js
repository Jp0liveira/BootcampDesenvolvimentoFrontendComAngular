/*2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC; */

class Person {
    nome;
    peso;
    altura;
    
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    meuIMC(){
        const imc = (this.peso / (this.altura**2));
        return imc;    
    }

    classificarImc(){
        const calculoImc = this.meuIMC();
        if (calculoImc < 18.5){
            console.log("Abaixo do Peso. IMC = " + calculoImc.toFixed(2));
        }else if(calculoImc >= 18.5 && calculoImc < 25){
            console.log("Peso normal. IMC = " + calculoImc.toFixed(2));
        }else if(calculoImc >= 25 && calculoImc < 30){
            console.log("Acima do peso. IMC = " + calculoImc.toFixed(2));
        }else if(calculoImc >= 30 && calculoImc < 40){
            console.log("Obeso. IMC = " + calculoImc.toFixed(2));
        }else{
            console.log("Obesidade grave. IMC = " + calculoImc.toFixed(2));
        }    
    }
}

const joao = new Person('joao', 90, 1.90);
joao.meuIMC();
joao. classificarImc();

