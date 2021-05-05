function contar(){
  var inicio = document.getElementById('inicio')
  //var fim = document.getElementById('fim')
  var passo = document.getElementById('passo')
  //var res = document.querySelector('div#res')
  
  var n1 = Number(inicio.value)
  var n2 = Number(passo.value)
  soma = n1 + n2
  
  
  for (var i = soma; i < 9; i++){
    
    i += n2
    console.log(`${i}`) 
    
  }

  /*
  while (resultado <= fim.value){
    var n1 = Number(inicio.value)
    var n2 = Number(passo.value)
    soma = n1 + n2
    resultado = soma
    resultado += n2
    res.innerHTML = `${resultado}.`
    break
  }
  */
  

  /*
  while (numero !== fim){
    var resultado = 0
    resultado = numero + passo
    resultado++
    
    res.innerHTML = `Contando: ${resultado.value}`
    break
  } 
  */
  
  
  //res.innerHTML = `O número é ${inicio}, o fim é ${fim} e o passo é ${passo}`
}


/*
function contar(){
 
  for (var i = 0; i <= fim; i++){
    var numero = document.querySelector('div#inicio')
    var fim = document.querySelector('div#fim')
    var passo = document.querySelector('div#passo')
    var res = document.querySelector('div#res')

    i = numero

    res.innerHTML = `${i}`
  }
}
*/
