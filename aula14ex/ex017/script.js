function operacao(){
  let num = document.getElementById('numtxt')
  let tab = document.getElementById('tabuadasel')
  if (num.value.length == 0){
    window.alert('Por favor, digite um número!')
  } else{
    let valor = Number(num.value)
    let contador = 1
    //para limpar a tabuada
    tab.innerHTML = ''
    while (contador <= 10){
      let item = document.createElement('option')
      //criando o option de forma dinâmica
      item.text =  `${valor} x ${contador} = ${valor*contador}`
      tab.appendChild(item)
      contador++
    }
  }
}