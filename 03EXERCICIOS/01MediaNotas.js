/*
Faça um algoritmo que dada as 3 notas de um aluno tiradas em um semestre da faculdade calcule e imprima a sua media e sua classificação conforme tabela abaixo:

Media = (nota1 + nota2 + nota3) / 3

Classificação:
- Média  menor que 5, reprovado;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/

let nota1 = 4.5;
let nota2 = 4.7;
let nota3 = 4.0;

const MEDIA = (nota1 + nota2 + nota3) / 3;

if( MEDIA < 5){
    console.log("ALUNO REPROVADO COM: " + MEDIA.toFixed(4));
}else if(MEDIA >= 5 && MEDIA <= 7){
    console.log("ALUNO EM RECUPERACAO COM: " + MEDIA.toFixed(4));
}else if(MEDIA > 7){
    console.log("ALUNO APROVADO COM: " + MEDIA.toFixed(4));
}