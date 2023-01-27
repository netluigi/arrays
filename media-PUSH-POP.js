// const not1 = 10;
// const not2 = 10;
// const not3 = 10;
// const not4 = 10;

const notas = [10,6,8,5.5,10]

notas.push(8.5) // atribuir novo ao final do elemento ao array
notas.pop() // remove o ultimo elemento do array

console.log(notas)

const media= (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length ;

console.log(`A media é ${media}`)

//criar dinamicamente um array com todos os números pares de 0 a 100:

const numerosPar = []

for ( let i = 0; i <= 100; i+=2){
    numerosPar.push(i)   
}

console.log(numerosPar)