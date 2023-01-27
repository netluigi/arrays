
const notas = [7,5,8,9]

// com os 3 pontos( spread operator) conseguimos copiar o conteudo do array antigo sem autera-lo, criando assim um novo array.

const novoArray = [...notas] 
novoArray.push(10)

console.log(novoArray)