/*1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.*/

class Car{
    marca;
    cor;

    constructor(marca, cor){
        this.marca = marca;
        this.cor = cor;
    }

    quantidadeQuilometros(quantidadeKm, precoCombustivel){
        return (quantidadeKm / precoCombustivel);
    }
}

const carro = new Car('Fiat', 'Preto');
console.log('O gasto médio em R$ é de ' + carro.quantidadeQuilometros(70, 5).toFixed(2) + ' a cada 1 Km');