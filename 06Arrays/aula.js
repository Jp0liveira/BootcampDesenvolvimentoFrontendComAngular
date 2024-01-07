const alunos = ['joao', 'felipe', 'thiago'];

alunos.push('renam');
console.log(alunos);

alunos[4] = 'fabricio';

alunos.pop();
alunos.shift();

console.log(alunos);

const notas = [];

notas.push(10);
notas.push(10);
notas.push(10);
notas.push(10);
notas.push(10);
notas.push(10);

let soma = 0.0;
for (let index = 0; index < notas.length; index++){
    soma = soma + notas[index];
}

const media = soma / notas.length;

console.log('A media de notas é ' + media.toFixed(2));





