// importing module
const pg = require('pg');
// const bodyParser = require('body-parser');

// db configuração
const client = new pg.Client(
    {
        user: 'jpaulopd',
        host: 'localhost',
        database: 'ppi1_projeto2',
        password: 'jpc0d3',
        port: 5432,
    });
client.connect();

 
// endpoint basico
 
const init = (request, response) => {
    response.status(200).json({ info: 'Aplicação iniciada com sucesso...' });
};
 
// endpoint status do BD
 
const bd_status = (request, response) => {
    client.query('SELECT NOW()', (err, results) => {
        error(err, response);
        response.status(200).json({ info: 'Base de dados operacional...' });
    });
};
 
// endpoints da aplicação
 
// consulta todos os usuários
const retornaUsuarios = (request, response) => {
    console.log('Consultando todos os usuários');
    client.query('SELECT * FROM usuario', (err, results) => {
        error(err, response);
        response.status(200).json( results.rows );            
    });
};
 
// consulta usuário por id
const retornaUsuarioId = (request, response) => {
    const id = parseInt(request.params.id)
    console.log('Consultado o usuário de ID = ' + id);
    client.query('SELECT * FROM usuario WHERE id = $1', [id], (err, results) => {
        error(err, response);
        response.status(200).json( results.rows );
    });
};
 
// salvar novo usuário
const salvaUsuario = (request, response) => {
    console.log('Criando novo usuário...');
    const { primeiro_nome, ultimo_nome, email, telefone } = request.body
    client.query('INSERT INTO usuario (primeiro_nome, ultimo_nome, email, telefone) VALUES ($1, $2, $3, $4) RETURNING *',
        [primeiro_nome, ultimo_nome, email, telefone], (err, results) => {
            error(err, response);
            response.status(201).json({ info: 'Usuário criado com sucesso!' });
        });
};
 
// deletar usuário por id
const deletaUsuario = (request, response) => {
    const id = parseInt(request.params.id);
    console.log('Deletando usuário de ID = ' + id);
    client.query('DELETE FROM usuario WHERE id = $1', [id], (err, results) => {
        error(err, response);
        if (results.rowCount == 0)
            response.status(400).json({ info: 'ID não localizado na base' });
        else
            response.status(200).json({ info: `Usuário deletado de ID: ${id}` });
    });
};
 
// atualizar usuario por id
// db part skipped for brevity. you are free to play around
const atualizaUsuario = (request, response) => {
    const id = parseInt(request.params.id);
    const { primeiro_nome, ultimo_nome, email, telefone } = request.body
    console.log(request.body);
    console.log('Atualizado usuário de ID = ' + id);
    client.query('UPDATE usuario SET primeiro_nome = $1, ultimo_nome = $2, email = $3, telefone = $4 WHERE id = $5 RETURNING * ',
        [primeiro_nome, ultimo_nome, email, telefone, id], (err, results) => {
            error(err,response);
            response.status(201).json({ info: `Usuário atualizado de ID: ${id}` });
        });
    
};
 
// helper method
function error(err, response) {
    if (err) {
        // console.log(err);
        response.status(503).json({ info: 'Erro interno...' });
    }
}
 
module.exports = {
    init,
    bd_status,
    retornaUsuarios,
    retornaUsuarioId,
    salvaUsuario,
    deletaUsuario,
    atualizaUsuario
};