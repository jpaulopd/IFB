var space = require('to-space-case');
var capital = require('to-capital-case');
var constant = require('to-constant-case');

// module.exports = {
//     espaco: function(){
//         let entry = $("#textoEntrada1").val();
//         $('#retorno3').text(space(entry));
//     },
    
    
//     maiusculo: function(){
//         let entry = $("#textoEntrada2").val();
//         $('#retorno3').text(capital(entry));
//     },
    
//     constante: function(){
//         let entry = $("#textoEntrada3").val();
//         $('#retorno3').text(constant(entry)); 
//     }
// }

export function espaco(){
    
    let entry = $("#textoEntrada1").val();

    console.log(space(entry));

    $('#retorno1').text(space(entry));
};
    
    
export function maiusculo(){
    let entry = $("#textoEntrada2").val();
    $('#retorno2').text(capital(entry));
};
    
export function constante(){
    let entry   = $("#textoEntrada3").val();
    $('#retorno3').text(constant(entry)); 
}
