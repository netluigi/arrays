
const notas = [10,6.5,8,7.5];

let somaNota= 0;

for ( let i = 0; i < notas.length; i++){
    somaNota += notas[i]
    
}

const media = somaNota / notas.length;

console.log(`A media das notas é ${media}`)


const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let mediana = 0

for (let i = 0; i < notasGerais.length; i++) {
    for (let j = 0; j < notasGerais[i].length; j++) {
       mediana += notasGerais[i][j]/notasGerais[i].length;
    }
}
  console.log(mediana)

  // percorrer um array do fim ao início:

const numeros = [100, 200, 300, 400, 500, 600];

for (let i = numeros.length - 1; i >= 0; i--) {
  console.log(numeros[i]);
}

 