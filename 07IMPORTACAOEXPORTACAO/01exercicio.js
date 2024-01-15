const {getSorteio, print} = require('./funcoesAuxiliares');

/*
Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 a 100.
Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior valor sorteado

Exemplo:
    Entrada:
        4
        100
        150
        90
        200

    Saída:
        Maior número: 150
        Menor número: 90
*/

const numerosDoSorteio = getSorteio();

let maiorNumero = 0;
let menorNumero = 0;
let tempAtual = 0;
let tempAnterior = 0;


for(let i = 1; i < numerosDoSorteio.length; i++){
    tempAtual = numerosDoSorteio[i];
    tempAnterior = numerosDoSorteio[i - 1];

    if(numerosDoSorteio[i] > numerosDoSorteio[i - 1]){
        maiorNumero = numerosDoSorteio[i];
        for(let i = 0; i < numerosDoSorteio.length; i++){
            if(maiorNumero > numerosDoSorteio[i]){
                maiorNumero = numerosDoSorteio[i];
            }
        }
    
    }
   

}

print(maiorNumero);
print(menorNumero);
