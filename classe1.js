class Carro {
    constructor(modelo, cor, placa, ano, combustível, apelido) {
        this.modelo = modelo;
        this.cor = cor;
        this.placa = placa;
        this.ano = ano;
        this.combustível = combustível;
        this.apelido = apelido;
    } 
    descricao(){
        console.log(`Minha caranga do modelo: ${this.modelo}, do ano ${this.ano}, da cor ${this.cor}, minha placa é ${this.placa}, e meu carro bebe ${this.combustível}`);
    }
    buzinar(){
    console.log(`O ${this.apelido} está buzinando: Beep Beep!`);
    }
}

const carro1 = new Carro ("Camaro", "Amarelo", "CLS-8G10", "2014", "Gasolina", "Bumblebee");
const carro2 = new Carro ("Fusca", "Azul", "BRA-8G10", "1970", "Alcool","Fusquinha");
const carro3 = new Carro ("Gol", "Preto", "BRA-8G10", "2000", "Gasolina", "Golzinho");

carro1.descricao();
carro1.buzinar();

console.log(" ");

carro2.descricao();
carro2.buzinar();

console.log(" ")

carro3.descricao();
carro3.buzinar();