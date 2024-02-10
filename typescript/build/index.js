"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// tipos primitivos: boolean, string, number 
let isLigado = true;
let nameString = "joao";
let numberInteger = 23;
let numberFloat = 1.9;
// tipos especiais: null, undefined
let nullNull = null;
let undefinedUndefined = undefined;
// tipos abrangentes: any, void 
let returnVoid;
let returnAnyNumber = 1;
let returnAnyBoolean = true;
let returnAnyString = "joao";
// tipo objeto sem previsibilidade
let produto = {
    name: "joao",
    cidade: "sp",
    idade: 30
};
let meuProduto = {
    name: "lata",
    preco: 7.9,
    unidades: 100
};
// arrays (ordem não importa)
let dadoDeclarado1 = ["joao", "bonito", "forte"];
let dadoDeclarado2 = ["joao", "bonito", "forte"];
let infos = ["joao", 22, "forte", 1.88];
// tuplas (ordem importa)
let boleto = ["conta água", 120.99, 80];
// datas
let aniversario = new Date("2022 12-01 05:00");
// funções
function addNumber(x, y) {
    return x + y;
}
function addNumberString(x) {
    return x;
}
function addNumberNull(x) {
    return x;
}
function getDataBase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return id;
    });
}
;
let bot = {
    id: "1",
    nameRobot: "Bot"
};
console.log(bot);
