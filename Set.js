
const nomes = ['Ana','Clara','Maria','Maria','Joao','Joao','Joao'];

//Set é uma classe do JavaScript, nela não é permitido elementos repetidos.

const meuSet = new Set(nomes)

// Usamos o spread Operations junto com meuSet para voltar a ser um array

const novosNome = [...meuSet]

console.log(novosNome)