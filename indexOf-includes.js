const alunos = ["paulo","tobias","janete"];
const medias = [10,8,7.5]




const listaDeAlunosEMedias = [alunos,medias]

 exibeAluno = (aluno) => {
    
    if ( listaDeAlunosEMedias[0].includes(aluno)){ // includes() vai verificar se o aluno existe no array 
        const indice = listaDeAlunosEMedias[0].indexOf(aluno); // indexOf() vai nos dizer a posicao do aluno dentro do Array
        const mediaAluno = listaDeAlunosEMedias[1][indice]

        console.log(`${aluno} ja esta cadastrado(a)! sua media é de ${mediaAluno}`);
    }else{
        console.log(`${aluno} não encontrado !!`)
    }
 };

exibeAluno("janete")