const turma1 = ['Yuri', ' Ana', ' Pedro', ' Joao'];
const turma2 = [' Claudio', ' Rodrigo', ' Murilo', ' Barbara'];
const turmaUnificada = turma1.concat(turma2);
//concat() é um método útil quando não se deseja alterar o array original, e 
//sim fazer uma cópia alterada. Caso isso não seja necessário, considere utilizar 
//push() ou splice() para inserir novos elementos ou fazer alterações no array original.
console.log(`A junção da turma 1 com a turma dois é: ${turmaUnificada}`);