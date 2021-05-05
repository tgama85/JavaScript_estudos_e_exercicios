//Aprendendo estrutura de repetição com teste lógico no início (while)
/* imagina repetir isso 500 vezes
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
*/

var contador = 1
while (contador <= 6) {
  console.log(`Passo ${contador}`)
  contador++ //significa contador = contador + 1
}

//Apredendo estrutura de repetição com teste lógico no final (do while)

var contador2 = 1
do {
  console.log(`Outro passo ${contador2}`)
  contador2++
} while (contador2 <= 6)

