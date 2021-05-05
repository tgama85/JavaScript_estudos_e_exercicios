//aprendendo condicionais múltiplas
var agora = new Date()
var semana = agora.getDay()

//semana = 7 //força a leitura de um dia pelo sistema

/* para o JS os dias da semana são:
  0 - Domingo
  1 - Segunda
  2 - Terça
  3 - Quarta
  4 - Quinta
  5 - Sexta
  6 - Sábado
*/

//console.log(semana) //mostra o número do dia da semana

switch (semana) {
  case 0:
    console.log('Domingo')
    break;
  case 1:
    console.log('Segunda')
    break;
  case 2:
    console.log('Terça')
    break;
  case 3:
    console.log('Quarta')
    break;
  case 4:
    console.log('Quinta')
    break;
  case 5:
    console.log('Sexta')
    break;
  case 6:
    console.log('Sábado')
    break;

  default:
    console.log('[ERRO] Dia inválido!')
    break;
}