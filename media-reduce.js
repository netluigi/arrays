const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

//A funcao reduce() recebe dois parametros uma funcao callback (arrow function) e o valor inicial do contador 0, e a funcao arrow tambem recebem dois paramentros, um contador e os valores 

function mediaGeral(notaSala)  {
  const SomaDasNotas = notaSala.reduce((acumulador, nota) => {
    console.log(acumulador)
    return acumulador + nota;
  }, 0);

  const media = SomaDasNotas / notaSala.length;

  return media;
};

console.log(mediaGeral(salaJS));
console.log(mediaGeral(salaJava))
console.log(mediaGeral(salaPython))
