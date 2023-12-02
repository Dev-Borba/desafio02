let student = prompt("Qual o nome do(a) aluno(a)?")
let n1 = prompt("Qual a nota da primeira prova?")
let n2 = prompt("Qual a nota da segunda prova?")

let average =  (Number(n1) + Number(n2)) / 2

let result = average > 7

average = average.toFixed()

if (result) {
  alert("Parabéns, " + student + "! Sua média foi de: " + average)
  } else if (average <= 5) {
  alert("Reprovado")
  } else if (average == 6) {
  alert("Recuperação")
}