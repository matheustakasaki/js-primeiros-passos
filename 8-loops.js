console.log(`\n Trabalhando com loops`);

//Declaração da lista
const destinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos possíveis: ");
console.log(destinos);

const podeComprar = (idadeComprador >= 18 || estaAcompanhada == true);

let contador = 0;
let destinoExiste = false;

//Laço While 
while (contador < 3) {
    if (destinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador += 1; // Somando um ao valor do contador
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa viagem");
} else {
    console.log("Desculpe! Tivemos um erro!");
}

// Laço com For
for (let cont = 0; cont < 3; cont++) { // Inicialização, condição e o incremento
    if (destinos[cont] == destino) {
        destinoExiste = true;
    }
}
