const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

readline.question('Qual sua linguagem preferida? ', (language) => {
  console.log('A linguagem preferida é: ' + language)

  readline.close()
})
