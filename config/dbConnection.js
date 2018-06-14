const mysql = require('mysql');//importa o mysql

const connMySQL = function(){//cria uma variavel com uma funcao
    console.log('connection DB sussa');//confere a conexao
    return mysql.createConnection({//retorna e cria uma conexao
        host: 'localhost',//local do host
        user: 'root',//usuario do host
        password:'',//senha do host
        database: 'portal_noticiasb'//tabela
    });
}

module.exports = function(){//faz a conexao
    console.log("auto-load foi");
    return connMySQL;
}