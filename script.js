let lista = [];
let caixa = document.querySelector('#caixa')
let tabela = document.querySelector('#tabela')
let num = document.querySelector("#numero")
let paragrafo = document.createElement("p")

function listar() {
    if (num.value < 1 || num.value > 100 || lista.indexOf(Number(num.value)) != -1) {
    alert('[ERRO] Inválido ou já está na lista')
  } else {   
    lista.push(Number(num.value))
    console.log(lista)
    let option = document.createElement("option")
    option.innerText = `Valor ${num.value} adicionado`
    tabela.appendChild(option)
    num.value = ''
    paragrafo.innerText = ''
  }
}

function calcular() {
  lista.sort(function(a, b){
    return a - b
  })
  tabela.innerHTML = ''  
  let soma = 0
  for(let i = 0; i < lista.length ; i++){
    soma += lista[i]
    console.log(soma)
  }
  paragrafo.innerText = 
  `Ao todo, temos ${lista.length} números cadastrados.
  
  O maior valor informado foi ${lista[lista.length - 1]}
  
  O menor valor informado foi ${lista[0]}
  
  Somando todos os valores temos ${soma}
  
  A média dos valores digitas é ${soma/lista.length}`
  lista = []
  caixa.appendChild(paragrafo)
}