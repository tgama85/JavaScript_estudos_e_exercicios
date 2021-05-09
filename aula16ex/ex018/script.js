let num = document.querySelector('input#numtxt') //guarda o número digitado
let listador = document.querySelector('select#listatxt') //guarda os dados da lista
let res = document.querySelector('div#res') //armazena resultado da análise
let valores = [] //armazena os dados analisados no vetor/array

//funções para ler e armazenar os números
function ehNumero(n){
  if (Number(n) >= 1 && Number(n) <= 100){
    return true
  }else{
    return false
  }
}

function emLista(n, lista1){
  if (lista1.indexOf(Number(n)) != -1){
    return true
  } else {
    return false
  }
}

function adicionar(){
  if(ehNumero(num.value) && !emLista(num.value, valores)){  //a exclamação quer dizer não
    valores.push(Number(num.value)) //push é adicionar um elemento num vetor
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado.`
    listador.append(item)
    res.innerHTML = ''
  }else{
    window.alert('Valor inválido ou encontrado na lista.')
  }
  //apaga número no input de números
  num.value = ''
  num.focus()
}

//funções para analisar os números
function finalizar(){
  if (valores.length == 0){
    window.alert('Adicione valores antes de finalizar!')
  } else{
    let total = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for (let posicao in valores){
      soma += valores[posicao]
      if (valores[posicao] > maior)
        maior = valores[posicao]
      if (valores[posicao] < menor)
        menor = valores[posicao]
    }
    media = soma/total
    res.innerHTML = ''
    res.innerHTML += `<br><p>Ao todo temos ${total} números cadastrados.</p>`
    res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p> A soma dos valores informados é ${soma}.</p>`
    res.innerHTML += `<p> A média dos valores é ${media}.</p>`
  }
}