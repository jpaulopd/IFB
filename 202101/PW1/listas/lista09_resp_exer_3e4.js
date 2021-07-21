var space = require('to-space-case');
var capital = require('to-capital-case');
var constant = require('to-constant-case');

console.log( space('InstitutoFederalDeBrasilia') );
console.log( space('sistemas.para.internet') );
console.log( space('Programacao_para_Internet-1') );

console.log( capital('InstitutoFederalDeBrasilia') );
console.log( capital('sistemas.para.internet') );
console.log( capital('Programacao_para_Internet-1') );

console.log( constant('InstitutoFederalDeBrasilia') );
console.log( constant('sistemas.para.internet') );
console.log( constant('Programacao_para_Internet-1') );