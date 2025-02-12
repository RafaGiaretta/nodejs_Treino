const inquirer = require('inquirer')

inquirer
  .prompt([
    { name: 'p1', message: 'Qual primeira nota' },
    { name: 'p2', message: 'Qual a segunda nota?' },
  ])
  .then((answers) => {
    console.log(answers)
    const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2
    console.log(`A média das notas é de ${media}`)
  })
  .catch((err) => console.log(err))
