//for(i=100;i<=600;i=i+100){
//    console.log(i);
//}

//ou
console.log("------ Numero de 100 a 600: ------")

 const numeros =[100, 200, 300, 400, 500, 600];

 for(let i=0; i<numeros.length; i++){
     console.log(i+ '- ' + numeros[i]);
 }

//Media com for 
console.log("------ Media com for: --------");

const notas = [10, 6.5, 8, 7.5];
let soma = 0;

for(let i=0; i<notas.length;i++){
    soma += notas[i];   
}

let media = soma/notas.length;

console.log(media);

//Media com foreach
console.log("------ Media com foreach: --------");

const notas2 = [10, 6.5, 8, 7.5];
let somaDasNotas = 0
//callback
notas2.forEach(nota => {
    somaDasNotas+=nota;
});
let mediaForeach = somaDasNotas/notas2.length;
console.log(mediaForeach);