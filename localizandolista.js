const alunos = ['João' , 'Juliana', 'Caio', 'Ana']

const mediaDosAlunos = [10, 9, 8, 7]

let  listaDeNotasEAlunos = [alunos, mediaDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    //                            busca o aluno
    if(listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ', sua media é ' + listaDeNotasEAlunos[1][indice]
        ///              0 é considerado a lista de nomes e o [1] é a média deles. ARRAY DENTRO DE ARRAY
    } else{
        return "Aluno não está no cadastro"
    }
}


console.log(exibeNomeNota("Maria"))