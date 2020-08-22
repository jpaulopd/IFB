// let cachese = document.querySelector("#siteestatico");
// let cachesd = document.querySelector("#sitedinamico");
// let cacheapm = document.querySelector("#appmobile");

// const divSelect ($) => {
//     let precPrev = document.getElementById("precoprev");
//     precPrev.innerText = "" +${val};
// }
// 

// var calculateTotalpreco = function () {
//     return servicos.reduce(function (total, item) {
//       return total + item.servico.preco * item.quantidade;
//     }, 0);
// };

// function calcular(item, index) {
//     for (x in sessionStorage){
//         console.log(sessionStorage[x]);
//     }
// }

for (x in sessionStorage=[]){
  
    if(sessionStorage.cachese){
        document.getElementById('siteestatico').value = sessionStorage.cachese;
    }
    if(sessionStorage.cachesd){
        document.getElementById('sitedinamico').value = sessionStorage.cachesd;
    }
    if(sessionStorage.cacheapm){
        document.getElementById('appmobile').value = sessionStorage.cacheapm;
    }
}



let salvarCache = function() {

    let cachese = document.getElementById('siteestatico').value;
    let cachesd = document.getElementById('sitedinamico').value;
    let cacheapm = document.getElementById('appmobile').value;
    console.log(cachese, cachesd, cacheapm);
    sessionStorage.setItem('siteestatico', cachese);
    sessionStorage.setItem('sitedinamico', cachesd);
    sessionStorage.setItem('appmobile', cacheapm);

};

document.onchange = salvarCache;

console.log('cacheapm');

let arrei = [cachese, cachesd, cacheapm];
let reducer = (acumulador, atualValue) => acumulador + atualValue;

myarr = arrei.reduce(reducer);


var siteestaticos = document.getElementById('siteestatico').value;

console.log(siteestaticos)