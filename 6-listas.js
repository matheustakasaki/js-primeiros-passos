console.log(`Trabalhando com listas`);

// Forma não aconselhada
/*
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;
console.log("Destinos Possíveis");
console.log(salvador, saoPaulo, rioDeJaneiro);
*/


// Trabalhando com Arrays/Listas

//Declaração da lista
const destinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

destinos.push(`Curitiba`) //Adicionando um item dentro da lista.

//definindo a lista como const, não permitimos que o tipo da lista seja alterado.

console.log("Destinos possíveis: ");
console.log(destinos);

destinos.splice(1,1) // Removendo um item da lista.
console.log(destinos);
// o primeiro parâmetro é a posição de início e o segundo é a quantidade de elementos.

// Exibindo apenas um elemento da lista
console.log(destinos[1]); //Exibiremos apenas o elemento da posição 1

console.log("Exibindo apenas 2 elementos: \n" + destinos[0] , destinos[1]); //Exibiremos apenas o elemento da posição 1 e 2

