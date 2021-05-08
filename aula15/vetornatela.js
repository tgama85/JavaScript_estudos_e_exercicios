let valores = [0, 1, 5, 4, 7, 3]
console.log(valores) //mostra array
console.log('---------')
//mostra os valores do array linha a linha
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

//mostra o array por repetição
console.log('---------')
for (let pos = 0; pos < valores.length; pos++){
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

//Simplificando
console.log('---------')
for (let pos in valores){
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}