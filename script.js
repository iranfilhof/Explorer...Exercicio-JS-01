alert("Vamos fazer algumas operações!")

let numberOne = prompt("Digite o primeiro número:")
let numberTwo = prompt("Digite o segundo número:")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = (numberOne / numberTwo).toFixed(2)
const resDiv = numberOne % numberTwo

alert("A soma dos dois números é: " + sum)
alert("A subtração dos dois números é: " + sub)
alert("A multiplicação dos dois números é: " + multi)
alert("A divisão dos dois números é: " + div)
alert("O resto da divisão dos dois números é: " + resDiv)

if(sum % 2 == 0) {
  alert(`A soma dos números digitados (${numberOne}, ${numberTwo}) é par`);
}
else {
  alert(`A soma dos números digitados (${numberOne}, ${numberTwo}) é impar`)
}
if(numberOne == numberTwo) {
  alert(`Os números inseridos (${numberOne}, ${numberTwo}) são iguais`)
}
else {
  alert(`Os números inseridos (${numberOne}, ${numberTwo}) são diferentes`)
}

alert("Até mais! :)")