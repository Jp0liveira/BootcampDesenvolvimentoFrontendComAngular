/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considererando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos das tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado:

Código Condição de pagamento:
- À vista débito, recebe 10% de desconto;
- À vista no dinheiro ou pix, recebe 15% de desconto;
- Em duas vezes, preço normal da aetiqueta sem juros;
- Acima de duas vezes, preço normal da etiqueta mais juros de 10%; 
*/

let precoNaEtiqueta = 50.0;
let condicoesPagamentoArray = ["DEBITO", "DINHEIRO", "PIX", "EM DUAS VEZES", "ACIMA DE DUAS VEZES"];
const condicaoPagamento = "ACIMA DE DUAS VEZES";
let calculoTotal = 0.0;
for (i = 0; i < condicoesPagamentoArray.length; i++){
    if (condicaoPagamento === condicoesPagamentoArray[i]){
        switch(condicaoPagamento){
            case "DEBITO":
                calculoTotal = precoNaEtiqueta - ((precoNaEtiqueta * 10) / 100);
                break;
            case "DINHEIRO" || "PIX":
                calculoTotal = precoNaEtiqueta - ((precoNaEtiqueta * 15) / 100);
                break;
            case "EM DUAS VEZES":
                calculoTotal = precoNaEtiqueta;
                break;
            case "ACIMA DE DUAS VEZES":
                calculoTotal = precoNaEtiqueta + ((precoNaEtiqueta * 10) / 100);
                break;
            default:
                calculoTotal = 0.0;
                break;
        }
    }
}

console.log("Preço Total: " + calculoTotal.toFixed(2));









