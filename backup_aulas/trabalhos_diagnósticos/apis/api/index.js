const express = require('express');
const server = express();

const bp = require('body-parser');

const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
};

const cors = require('cors');
server.use(cors(corsOptions));

const mysql = require('mysql2');
const banco = mysql.createPool({
    host: "localhost",
    database: "3e_ga_PW3_2022",
    user: "root",
    password: ""
});

server.use(bp.urlencoded({ extended: false }));
server.use(bp.json());

server.get("/conexao", (req, res) => {
  banco.getConnection((erro, con) => {
    if (erro) {
      return res.status(500).send({
        mensagem: 'Erro na conexão com o banco',
        erro: erro
      });
    }

    return res.status(200).send({
      mensagem: 'Conexão bem sucedida!'
    });
  });
});

server.post('/cadastro', (req, res) => {
  const c = req.body;
  const SQL = `INSERT INTO usuario (username, email, senha, dataNascimento) VALUES ('${c.username}', '${c.email}', '${c.senha}', '${c.dataNascimento}')`;

  banco.getConnection((erro, con) => {
    if (erro) {
      return res.status(500).send({
        mensagem: 'Erro na conexão',
        detalhes: erro
      });
    }

    con.query(SQL, (erro, result) => {
      con.release();

      if (erro) {
        return res.status(500).send({
          mensagem: 'Erro no SQL',
          detalhes: erro,
          sql: SQL
        });
      }

      return res.status(200).send({
        mensagem: 'Cadastro realizado com sucesso!'
      });
    });
  });
});

server.listen(3000, () => {
  console.log('O servidor está funcionando!');
});


/* const express = require('express');
const server = express();
const bp = require('body-parser');

const corsOptions = {
    origin: 'http://localhost:4200/',
    optionsSuccessStatus: 200
}
const cors = require('cors');
server.use(cors(corsOptions));

const mysql = require('mysql2');
const banco = mysql.createPool({
    host: "localhost",
    database: "3e_ga_PW3_2022",
    user: "root",
    password: ""
});

server.use(bp.urlencoded({ extended: false }));
server.use(bp.json());

server.post("/cadastro", (req, res) => {
    const cad = req.body
    //template string
    const SQL = `INSERT INTO cadastroUsuario (username, email, senha, dataNascimento) VALUES ('${u.username}', '${u.email}', '${u.senha}', '${u.dataNascimento}')`;

    banco.getConnection((erro, con) => {
        if(erro){
            return res.status(500).send({
                mensagem: 'Erro de conexão',
                detalhes: erro
            });
        }

        con.query(SQL, (erro, result) => {
            con.release();

            if(erro){
                return res.status(500).send({
                    mensagem: 'Erro na SQL',
                    detalhes: erro,
                    sql: SQL
                });
            }

            return res.status(200).send({
                mensagem: 'Cadastro realizado com sucesso!'
            });
        });
    });
});

server.listen(3000, () => {
    console.log('Servidor funcionando!');
});
 */
