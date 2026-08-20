const chalk = require('chalk');

const nota = 20

if (nota >= 10) {
    console.log(chalk.green('Parabéns! Você foi aprovado!'));
    console.log(chalk.bold('Você é muito inteligente!'));
} else {
    console.log(chalk.red('Você foi reprovado!'));
    console.log(chalk.bold('Você é muito burro!'));
}