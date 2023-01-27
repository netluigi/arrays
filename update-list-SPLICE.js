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
"Paulina",]

students.splice(1, 8 , 'Fabiana')
// O Splice altera o array principa
// o Primeiro parametro vai definir onde vai comecar a elimiar, o segunto quantos irao ser eliminados, e o terceiro vai incluir um novo elemento.

console.log(students)
