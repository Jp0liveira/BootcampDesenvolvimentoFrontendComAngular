
// objetos
const joao = {
    nome: 'joao',
    idade: 22,
    descrever: function(){
        console.log(`Olá meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};

joao.altura = 1.91;
joao.descrever();

console.log(joao);
delete joao.altura;
console.log(joao);
// acessar dinamicamente
joao['idade'] = 23;


// classes
class Pessoa{
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    };

    descrever(){
        console.log(`Nome ${this.nome} Idade ${this.idade}`);
    };

    getNome(){return this.nome;};
    setNome(nome){this.nome = nome};
       
}

const joao2 = new Pessoa('Joao', 22);
console.log(joao2.getNome());
console.log(joao2);


class Animal {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    emitirSom() {
      console.log('Som genérico de animal');
    }
  
    descrever() {
      console.log(`Nome: ${this.nome}, Idade: ${this.idade} anos`);
    }
  }
  
  class Mamifero extends Animal {
    constructor(nome, idade, quantidadeMamas) {
      super(nome, idade);
      this.quantidadeMamas = quantidadeMamas;
    }
  
    amamentar() {
      console.log(`${this.nome} está amamentando.`);
    }
  
    emitirSom() {
      console.log('Som de mamífero');
    }
  }
  
  class Ave extends Animal {
    constructor(nome, idade, envergadura) {
      super(nome, idade);
      this.envergadura = envergadura;
    }
  
    voar() {
      console.log(`${this.nome} está voando.`);
    }
  
    emitirSom() {
      console.log('Som de ave');
    }
  }
  
  // Exemplo de uso das classes:
  const leao = new Mamifero('Leão', 5, 0);
  leao.descrever();
  leao.amamentar();
  leao.emitirSom();
  
  const aguia = new Ave('Águia', 3, 2);
  aguia.descrever();
  aguia.voar();
  aguia.emitirSom();
  


