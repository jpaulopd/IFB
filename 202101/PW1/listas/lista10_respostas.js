const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());


/*RESPOSTA 01*/
app.get('/', function (req, res) {
    res.send("Funciona! Resposta da questão 1.");
});

/*RESPOSTA 01*/
app.get('/joaopaulo', function (req, res) {
    res.send("Resposta alternativa da questão 1.");
});

/*RESPOSTA 03*/

app.get('/user_agent', (req,res) => {
    res.send(
        'Você está acessando como:' + req.headers['user-agent']
    )
});

/*RESPOSTA 04*/
app.post('/convfahr/:x', (req,res) => {
    let temp = req.params.x;
    console.log(temp);
    let celsius = (5/9)*(temp-32);
    console.log(celsius);
    res.send(
         'A temperatura Fahrenheit ' + temp.toString() + '  corresponde a ' + celsius.toString() + ' em Celsius '
    )
});

/*RESPOSTA 05*/
app.post('/convfahr2/:x', (req,res) => {
    let temp = req.params.x;
    let celsius = (5/9)*(temp-32);
    let kelvin = (temp-32)*5/9+273.15;
    
    res.json(
        {
            "fahrenheit": temp.toString(),
            "celsius": celsius.toString(),
            "kelvin": kelvin.toString()   
        }
    )
});


app.listen(
    3000,
    function(){
        console.log('Serviço iniciado...');
    }
);