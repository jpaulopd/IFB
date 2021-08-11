const express = require('express');
const cors = require('cors');
const api = require("./src/controller/apis");
const app = express();
const port = 3000;
app.use(cors());

 
app.use(express.json());
 
// url - http://localhost:3000/
app.get('/', api.init);
 
// url - http://localhost:3000/status
app.get('/status', api.bd_status);
 
// url - http://localhost:3000/usuarios
app.get('/usuarios', api.retornaUsuarios);
 
// url - http://localhost:3000/usuarios/2
app.get('/usuarios/:id', api.retornaUsuarioId);
 
// url - http://localhost:3000/retornaUsuarioId
// sample request body
/* 
{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@gupshup.com",
    "gender": "F",
    "phone": "860-861-4604"
}
*/
app.post('/usuarios', api.salvaUsuario);
 
// url - http://localhost:3000/users/10
app.delete('/usuarios/:id', api.deletaUsuario)
 
// url - http://localhost:3000/users/10
// sample request body
/* 
{
    "firstName": "Radhe Shyam",
    "lastName": "Tiwari",
    "email": "radhe-shyam.tiwari@gupshup.com",
    "gender": "M",
    "phone": "727-213-8139"
}
*/
app.put('/usuarios/:id', api.atualizaUsuario);
 
app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}...`)
});