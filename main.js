// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert('Hello World')

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let num1 = 10
let num2 = 15

const sum = num1 + num2

alert(`a soma entre ${num1} e ${num2} é ${sum}`)

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número". Para saber o tipo de dado você pode usar o operador `typeof`

const isNumber = 10

if (typeof isNumber === 'number') {
  alert(`${isNumber} é um número`)
} else {
  alert(`${isNumber} não é um número`)
}

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

const isString = 'Isso é uma string'

if (typeof isString == 'string') {
  alert(`'${isString}' é uma string`)
} else {
  alert(`${isString} não é uma string`)
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

const isBoolean = false

if (typeof isBoolean == 'boolean') {
  alert(`${isBoolean} é um booleano`)
} else {
  alert(`${isBoolean} não é um booleano`)
}
// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

const sub = num1 - num2
alert(`a subtração entre ${num1} e ${num2} é ${sub}`)

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

const mult = num1 * num2
alert(`a multiplicação entre ${num1} e ${num2} é ${mult}`)

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

const div = num1 / num2
alert(`a divisão entre ${num1} e ${num2} é ${div}`)

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

const isEven = 4
if (isEven % 2 === 0) {
  alert(`O número ${isEven} é um número par`)
} else {
  alert(`O número ${isEven} não é um número par`)
}

// 10.Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

const isOdd = 5
if (isOdd % 2 !== 0) {
  alert(`O número ${isOdd} é um número ímpar`)
} else {
  alert(`O número ${isOdd} não é um número ímpar`)
}
