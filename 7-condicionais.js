console.log(`Trabalhando com condicionais`);

//Declaração da lista
const destinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhada = true;
const temPassagemComprada = false;

console.log("Destinos possíveis: ");
console.log(destinos);
// Código com instruções duplicadas
// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     destinos.splice(1, 1) // Removendo um item da lista.
// } else if (estaAcompanhada == true) {
//     console.log("Comprador está acompanhado");
//     destinos.splice(1, 1) // Removendo um item da lista.
// } else {
//     // Não está acompanhada e é menor de idade
//     console.log("Comprador menor de idade, não é possível vender");
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem!");
    destinos.splice(2, 1) // Removendo um item da lista.
} else {
    // Não está acompanhada e é menor de idade
    console.log("Comprador menor de idade e não está acompanhado não é possível vender");
}

console.log("Embarcando \n\n");

if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem!!"); 
} else {
    console.log("Você não pode embarcar.");
}

console.log(destinos);

