const nomes = ['Yuri', 'Ana', 'Pedro', 'Joao'];
const notas = [5,6,8,10];

const alunos = [nomes,notas];

const exibeNomeNota = (nomeAluno) => {
    if(alunos[0].includes(nomeAluno)){
        let indice = alunos[0].indexOf(nomeAluno);
        return alunos[0][indice] + ', sua nota é: ' + alunos[1][indice];
    } else { 
        return"Esse aluno não foi cadastrado";
    }   
}

console.log(exibeNomeNota("Pedro"));