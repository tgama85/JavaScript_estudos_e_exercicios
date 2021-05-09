//verficando se um parâmentro é par ou ímpar
function parimpar(n){
  if (n%2 == 0){
    return 'Par!'
  } else{
    return 'Ímpar!'
  }
}

//a chamada pode ser escrita assim
let res = parimpar(5) //chamada da função, teste diferentes números
console.log(res) //exibe o resultado

console.log('----------')

//ou assim
console.log(parimpar(222)) //chamada da função e resultado, teste diferentes números