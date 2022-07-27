const notas = [10, 6 , 8, 10, 9];
notas.pop();
notas.push(7);
notas.shift();
notas.reverse();

console.log(notas);

let media = (notas[0]+notas[1]+notas[2]+notas[3])/notas.length;

console.log(`A media é ${media}`);