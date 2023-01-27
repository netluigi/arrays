const notas = [10,9.5,58,7,6];

// O map não altera o array original, para isso precisamos colocar seu retorno dentro de uma const criando um novo array.
// Seu uso é mais adequado para quando queremos reescrever os valores de um array

const newNotas= notas.map((nota)=>{
    return nota + 1 >= 10 ? 10 : nota +1 
    // nota + 1 o resultado é maior ou igual a 10 ? se for verdadeiro retornar o valor 10 se não somar os valores e retornar o resultado.

})

console.log

//operadores ternais
// ? = teste logico verdadeiro ou falso
// : = se não