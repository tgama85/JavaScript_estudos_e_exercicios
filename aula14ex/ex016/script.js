function contar(){
  let inicio = document.getElementById('iniciotxt')
  let fim = document.getElementById('fimtxt')
  let passo = document.getElementById('passotxt')
  let res = document.querySelector('div#res')
  
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
      res.innerHTML = 'Impossível contar!'
    } else{
      res.innerHTML = 'Contando: <br>'
      let ini = Number(inicio.value)
      let fi = Number(fim.value)
      let pas = Number(passo.value)
      
      if (pas <= 0 ){
        window.alert('Passo inválido! Considerando PASSO 1')
        pas = 1
      }

      if (ini < fi){
        //contador crescente
        for ( let contador = ini; contador <= fi; contador += pas){
          res.innerHTML += ` ${contador} \u{1F449}`
        }
      }else{
        //contador decrescente
        for (let contador = ini; contador >= fi; contador -=pas){
          res.innerHTML += `${contador} \u{1F449}`
        }
      }
      res.innerHTML += `\u{1F3C1}`
    }
  }
  //unicode emoji list
