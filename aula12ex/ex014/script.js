function carregar(){
  var msg = window.document.getElementById('msg')
  var imagem = window.document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} hora(s).`
  if (hora >= 0 && hora < 12){
    //Bom dia
    imagem.src = 'manha.png'
    document.body.style.background = 'url(https://images.pexels.com/photos/1090745/pexels-photo-1090745.jpeg?cs=srgb&dl=pexels-elias-tigiser-1090745.jpg&fm=jpg)'
  } else if (hora >=12 && hora <= 18){
    //Boa tarde
    imagem.src = 'tarde.png'
    document.body.style.background = 'url(https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)'
  } else{
    //Boa noite
    imagem.src = 'noite.png'
    document.body.style.background = 'url(https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)'
  }
}
