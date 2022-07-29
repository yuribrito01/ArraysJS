const nomes = ['Yuri', 'Ana', 'Carlos', 'Joao', 'Pedro', 'Clara', 'Barbara', 'Luis'];


nomes.splice(1,2, 'Rodrigo');

//se  quiser so adicionar sem eliminar usa o 0 
// nomes.splice(2,0,'Lucas');

console.log(`A lista atualizada é: ${nomes}`);