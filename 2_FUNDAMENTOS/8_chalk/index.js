const chalk = require('chalk')

const nota = 9

if (nota < 7) {
  console.log(chalk.green('Você passou na prova'))
} else {
  console.log(chalk.red('Nota abaixo da media '))
}
