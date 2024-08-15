const pessoa = {
    primeiroNome: 'Miguel',
    sobrenome: 'Sarti',
    idade: 16,
    corOlho: 'castanho',
    altura: 170,
    dataNascimento: '20/02/2008',
    usaOculos: false,
    corPele: 'branco',
    corFavorita: 'preto',
    sexo: 'masculino',
};

// Primeira frase
console.log("1 - O " + pessoa.primeiroNome + " " + pessoa.sobrenome + " tem "  + pessoa.idade + " anos.");

// Alterar objeto
pessoa.sobrenome = "Sartii"

// Segunda frase
console.log("2 - O " + pessoa.primeiroNome + " " + pessoa.sobrenome + " tem "  + pessoa.idade + " anos.");