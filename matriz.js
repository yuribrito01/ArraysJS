const nomes = ['Yuri', ' Ana', ' Pedro', ' Joao'];
const notas = [5,6,8,10];

const alunos = [nomes,notas];

for (i=0; i<=3; i++){
    console.log(`${alunos[0][i]}, sua nota é ${alunos[1][i]}`);
}
