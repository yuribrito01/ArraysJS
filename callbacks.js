const nomes = ['Yuri', 'Ana', 'Carlos', 'Joao', 'Pedro', 'Clara', 'Barbara', 'Luis'];

// nomes.forEach(exibeNomes);

// function exibeNomes(nome){
//     console.log(nome);
// }

const nomesAtualizados = nomes.map(nome => nome.toUpperCase());

console.log (nomesAtualizados);