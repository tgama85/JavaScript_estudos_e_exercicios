let num = [5,9,1,8]

console.log(`Nosso valor é ${num}`)//mostra os valores
console.log(num) //mostra os valores dentro do array
console.log(`O valor tem ${num.length} posições`) //mostra o número de elementos do array
console.log(`${num[1]}`) //mostra o valor da posição 1
console.log(`O primeiro valor do vetor é ${num[0]}`)
num.sort() //método interno que organiza o array em ordem crescente
console.log(num) //array ordenado
num.push(3) //adiciona um número na última posição
console.log(num) //mostrando o número adicionado

//procura um valor no array
console.log('----------')
let pos = num.indexOf(0) //teste números que estão e não estão no array
console.log(`O valor 8 está na posição ${pos}`)
if (pos == -1){
  console.log('O valor não foi encontrado!')
} else{
  console.log(`O valor está na posição ${pos}`)
}
