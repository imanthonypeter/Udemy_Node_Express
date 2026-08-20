const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.output,
});

readline.question('Qual é o seu nome? ', (name) => {
    console.log(`Olá, ${name}!`);
    readline.close();
});