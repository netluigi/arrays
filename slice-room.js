const students = [
  "Luiz",
  "Carlos",
  "patricia",
  "Janete",
  "Bia",
  "Janaina",
  "Paulo",
  "Larissa",
  "Diego",
  "Paulina",
];

const roomOne = students.slice(0, students.length / 2);
const roomTwo = students.slice(students.length / 2);
console.log(roomOne);
console.log(roomTwo);

// Slice -  divide o array na quantidade que estipulamos,
// é preciso criar uma nova variavel para armazenar o novo array.