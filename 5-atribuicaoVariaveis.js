console.log("Trabalhando com atribuição de variáveis")

const idade = 18; // Após atribuir uma variável como const, ela não poderá ser alterada futuramente.
let nome = "Matheus" ; // Quando usamos let, definimos que essa variável poderá ser alterada futuramente.
const sobrenome = "Takasaki";

// Há duas formas de concatenação
console.log(nome , sobrenome); // Com vírgula.
console.log(nome + " " + sobrenome); // Com soma.

// INTERPOLAÇÃO DE VARIÁVEIS
console.log(`Meu nome é ${nome}`); 
// Dessa forma, eu consigo colocar uma variável dentro do texto e fazer com que não haja a conversão da variável. Devemos usar a crase para realizar esse tipo de operação.


//A boa prática é sempre reduzir a alteração dos tipos das variáveis. Uma vez que definimos a variavel de um tipo, esse tipo deve ser mantido.

// Quanto mais constantes, melhor.
nome = nome + sobrenome; 
console.log(`Eu sou `+`${nome}`);


//Podemos fazer a declaração de variáveis mutáveis, podemos fazer assim:
let anosDeVida;
anosDeVida = 22;
anosDeVida = anosDeVida + 1;
console.log(anosDeVida);
