//No forEach podemos receber mais de um paramentro, neste caso o calor das notas e tambem a posicao ou o indice dos elementos.

const notas = [10,6.5,8,7.5];

let somaNota= 0;

notas.forEach((nota,indice)=> {
    somaNota += nota;
    console.log(indice);
});

const media = somaNota / notas.length;

console.log(`A media é ${media}`)