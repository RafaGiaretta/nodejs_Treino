const chalk = require('chalk')
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

readline.question('Entre com seu nome: ', (nome) => {
  console.log(chalk.bgYellow.black(`Seu nome é: ${nome}`))

  readline.question('Entre com sua idade: ', (idade) => {
    console.log(chalk.bgYellow.white(`Idade: ${idade} anos.`))
    readline.close() // Fechamos a interface após a última entrada
  })
})
