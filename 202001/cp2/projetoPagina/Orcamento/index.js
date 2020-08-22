 document.addEventListener('DOMContentLoaded', function() {
      M.AutoInit();
  });


let servicoEscolhido = ''
let componentesEscolhidos = []


/**
 * Função que retorna o conteúdo do serviço escolhido, 
 */
function escolherServico() {
  
  let form_servicos = document.forms['form-servicos']
  servicoEscolhido = form_servicos.servicos.value  
  console.log(servicoEscolhido)

  fetch('./componentes/'+servicoEscolhido+'.html')
    .then(response => {
      return response.text()
    })
    .then(data => {
      document.querySelector('.container').innerHTML = data
      document.querySelector('#servico-escolhido').textContent = servicoEscolhido
    })
}

/**
 * função que retorna o conteúdo do orçamento
 */
function escolherComponentes() {
  let form_componentes = document.forms['form-componentes']
  let listaDeComponentes = form_componentes.componentes

  for (let index = 0; index < listaDeComponentes.length; index++) {
    if (listaDeComponentes[index].checked) {
      componentesEscolhidos.push(listaDeComponentes[index])     
    }
  }

// implementação do cálculo do valor e tempo 
  let teste1 = componentesEscolhidos[0].getAttribute('valor-componente')
   

  fetch('./orcamento.html')
    .then(response => {
      return response.text()
    })
    .then(data => {
      document.querySelector('.container').innerHTML = data
   
      // listando os componentes escolhidos na tela de orçamento
      let elemento = document.querySelector('#lista-de-componentes')
      for (let i = 0; i < componentesEscolhidos.length; i++) {

        let item = document.createElement('LI')
        let icon = document.createElement('I')
        let div = document.createElement('DIV')

        div.className = 'valign-wrapper collection-item'
        icon.className = 'material-icons blue-text'
        item.className = 'collection-item'        
        
        icon.textContent = 'check'
        item.textContent = componentesEscolhidos[i].value
        
        item.appendChild(icon)
        div.appendChild(icon)
        div.appendChild(item)
        elemento.appendChild(div)
      }
    })
}



