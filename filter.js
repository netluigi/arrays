// Neste caso usamos o parametro filter para filtrar os alunos que ficaram com media abaixo de 7;
// a funcao filter vai retornar um elemento, seu callback é um boleano ( true ou false), se for tudo que for true vai voltar no array de retorno(callback) e o que for false ele vai descartar.

const alunos = ['Ana','Marcos','Maria','Mauro'];
const medias = [7,4.5,8,7.5];

const reprovados = alunos.filter((aluno, i) => {
    return medias[i] < 7;

    
})

console.log(reprovados)