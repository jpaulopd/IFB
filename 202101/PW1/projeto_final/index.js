const express = require('express');
const cors = require('cors');
const api = require("./src/controller/apis");
const app = express();
const port = 3000;
app.use(cors());

 
app.use(express.json());
 
app.get('/', api.init);
 
app.get('/status', api.bd_status);
 
app.get('/usuarios', api.retornaUsuarios);
 
app.get('/usuarios/:id', api.retornaUsuarioId);
 
app.post('/usuarios', api.salvaUsuario);
 
app.delete('/usuarios/:id', api.deletaUsuario)
 
app.put('/usuarios/:id', api.atualizaUsuario);
 
app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}...`)
});