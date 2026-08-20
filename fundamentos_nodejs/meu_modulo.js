// Módulo: um arquivo que contém código JavaScript que pode ser reutilizado em outros arquivos.

//Módulo Interno: É um módulo que é criado pelo próprio desenvolvedor. É um módulo que é criado para ser reutilizado em outros arquivos.

//Módulo Externo: É um módulo que é criado por outra pessoa e é reutilizado em outros arquivos.

// Core Modules: São módulos que são nativos do Node.js e são pré-instalados.

// 1 - Módulo Interno:
module.exports = {
    soma(a, b) {
        return a + b;
    }
}

// 2 - Módulo Externo:
const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

console.log(args);

module.exports = args;

// 3 - Core Modules:
const path = require('path');

const extension = path.extname('arquivo.txt');

console.log(extension);

