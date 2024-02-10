// tipos primitivos: boolean, string, number 
let isLigado: boolean = true;
let nameString: string = "joao";
let numberInteger: number = 23;
let numberFloat: number = 1.9;

// tipos especiais: null, undefined
let nullNull: null = null;
let undefinedUndefined: undefined = undefined;

// tipos abrangentes: any, void 
let returnVoid: void;
let returnAnyNumber: any = 1;
let returnAnyBoolean: any = true;
let returnAnyString: any = "joao";

// tipo objeto sem previsibilidade
let produto: object = {
    name: "joao",
    cidade: "sp",
    idade: 30
};

// tipo objeto com previsibilidade
type produtoLoja = {
    name: string,
    preco: number,
    unidades: number
};

let meuProduto: produtoLoja = {
    name: "lata",
    preco: 7.9,
    unidades: 100
} 

// arrays (ordem não importa)
let dadoDeclarado1: string[] = ["joao", "bonito", "forte"];
let dadoDeclarado2: Array<string> = ["joao", "bonito", "forte"];
let infos: (string | number)[] = ["joao", 22, "forte", 1.88];

// tuplas (ordem importa)
let boleto: [string, number, number] = ["conta água", 120.99, 80];

// datas
let aniversario: Date = new Date("2022 12-01 05:00");

// funções

function addNumber(x: number, y: number): number{
    return x + y;
}

function addNumberString(x: number | string): number | string{
    return x;
}

function addNumberNull(x: number | null): number | null{
    return x;
}

async function getDataBase(id: number): Promise<number>{
    return id;
}


// interfaces
interface robot{
    readonly id: number | string,
    nameRobot: string
};

let bot: robot = {
    id: "1",
    nameRobot: "Bot" 
}

console.log(bot);


// classes 
//.
//.
//.

// genererics
function concatArrays<T>(...itens: T[]): T[]{
    return new Array().concat(...itens);
}

const numArray = concatArrays<number[]>([1,2], [3]);
const stringArray = concatArrays<string[]>(["joao", "paulo"], ["oliveira"]);
console.log(numArray);
console.log(stringArray);

// decorators
// class decorators
function exibirNome(target: any){
    console.log(target);
}

@exibirNome
class Funcionario{
};

function apiVersion(version: string){
    return (target: any) =>{
        Object.assign(target.prototype, {
            __version: version,
            __name: "joao"
        })
    }
}

@apiVersion("1.0")
class Api{};

const api = new Api();
console.log(api.__name);

// atribute decorator

function minlength(lenght: number){
    return (target: any, key: string) =>{
        let __value = target[key];
        const getter = () => "play " + __value;
        const setter = (value: string ) =>{
            if(value.length < __value){
                throw new Error(`Tamanho menor do que ${lenght}`);
            }else{
                __value = value;
            }
        } 
    }
}

class ApiAtribute{
    @minlength(10)
    name: string;

    constructor(name: string){
        this.name = name;
    }
};
