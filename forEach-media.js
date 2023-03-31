const notas = [10, 5.6, 8, 5.5];

let somaDasNotas = 0;

//callback (chama outra função)
// notas.forEach( nota =>{
//     somaDasNotas += nota
// });

notas.forEach(function(nota){

    somaDasNotas+=nota
})

let media = somaDasNotas/notas.length;
console.log(media);