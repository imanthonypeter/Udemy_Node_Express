const inquirer = require('inquirer');

inquirer.prompt([{
    name: "p1",
    message: "Qual é o primeiro número?",
}, {
    name: "p2",
    message: "Qual é o segundo número?",
}
]).then((answers) => {
    console.log(answers);
    const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2;
    console.log(`A média é ${media}`);
}).catch((err) => {
    console.log(err);
});