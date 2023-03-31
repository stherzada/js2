// const salaJS = [2, 5, 6, 3, 1, 8, 5.5, 9, 2];
// const salaJava = [9, 7, 4, 1, 10, 2];
// const salaPython = [6, 3, 1, 8, 2, 4];

// //reduce = reduzir os arrays em um unico valor númerico
// function mediaSala(notasDaSala){
//      const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum, 0)
//      return somaDasNotas/notasDaSala.length
// }

// console.log(`Média da sala de JavaScript ${mediaSala(salaJS)}`)
// console.log(`Média da sala de Java ${mediaSala(salaJava)}`)
// console.log(`Média da sala de Python ${mediaSala(salaPython)}`)

const notas = [10, 6.5, 8, 7]

const media = notas.reduce((acum, atual) => atual + acum, 0) /notas.length

console.log(media)