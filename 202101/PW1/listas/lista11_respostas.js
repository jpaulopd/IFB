const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pg = require('pg');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const client = new pg.Client(
{
    user: 'jpaulopd',
    host: 'localhost',
    database: 'local',
    // password: senha,
    port: 5432,
});

client.connect();

/*RESPOSTAS EXERCICIO 1*/
client.query("SELECT * FROM public.contacts")
    .then(
        function(ret){
            // console.log(ret.rows);
        }
);

/*RESPOSTAS EXERCICIO 2*/
app.get('/query', (req,res) => {
    client.query("SELECT * FROM public.contacts")
    .then(
        function(ret){
            res.json(ret.rows);
        }
    );
});

/*RESPOSTAS EXERCICIO 3 e 4*/
app.get('/query/:x', (req,res) => {
    let id = req.params.x;
    console.log(id);
    client.query(
        {
            text: "SELECT * FROM public.contacts where contact_id = $1",
            values: [id]
        }
    )
    .then(
        function(ret){
            let registro = ret.rows[0];
            console.log(registro);
            res.json(
                {
                    status: 'OK',
                    resultado:[
                        {
                            nomeContato: registro.contact_name,
                            telefone: registro.phone,
                            email: registro.email
                        }
                    ]
                    
                }
                
            );
        }
    )
});


/*RESPOSTA 05*/
app.post('/cliente', (req,res) => {

    let nome_cliente = req.body.nomeCliente;

    client.query(
        {
            text: "INSERT INTO public.customers (customer_name) values ($1)",
            values: [nome_cliente]
        }
    )
    .then(

        res.json(
            {
                status: 'cliente criado!',
                resultado: nome_cliente
            }
        )
    )
});

/*RESPOSTA 06*/
app.post('/del_cliente/:id', (req,res) => {

    let id = req.params.id;

    client.query(
        {
            text: "DELETE FROM public.customers WHERE customer_id = $1 ",
            values: [id]
        }
    )
    .then(

        res.json(
            {
                status: 'cliente deletado!',
                id: id
            }
        )
    )
});

/*RESPOSTA 07*/
app.post('/upd_cliente', (req,res) => {

    let id_cliente = req.body.idCliente;
    let nome_cliente = req.body.nomeCliente;
    
    client.query(
        {
            text: "UPDATE public.customers SET customer_name = $1 WHERE customer_id = $2",
            values: [nome_cliente,id_cliente]
        }
    )
    .then(

        res.json(
            {
                status: 'dados atualizados com sucesso!',
                resultado:[
                    {
                        id: id_cliente,
                        nome: nome_cliente
                    }
                ]
            }
        )
    )
});


app.listen(
    3000,
    function(){
        console.log('Serviço iniciado...');
    }
);