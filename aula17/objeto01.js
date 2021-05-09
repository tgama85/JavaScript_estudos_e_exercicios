//tanto array quanto objeto no JS aparecem como objeto
//o array é um objeto, e o objeto é o objeto
//são estruturas da mesma classe e origem
let amigo = []
let amigo1 = {}
console.log(typeof amigo)
console.log('---------')
console.log(typeof amigo1)
let amigo2 = {nome: 'José', sexo: 'M', peso: 85.4}
console.log(amigo2)
console.log('---------')
let amigo3 = {nome: 'Maria',
sexo: 'F',
peso: 67.8,
engordar(p){

}}
console.log(amigo3)
console.log('---------')
let amigo4 = {nome: 'Tati',
sexo: 'F',
peso: 61.8,
engordar(p){
  console.log('Engordou')
  this.peso += p
}}
console.log(amigo4.nome)
amigo4.engordar(2)
console.log(`${amigo4.nome} pesa ${amigo4.peso}Kg`)