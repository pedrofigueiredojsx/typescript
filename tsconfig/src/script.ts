import plugin from "./plugin"
// import slide from './slide.js'

// ativa o plugin
plugin()
// slide()

interface Produto {
  nome: string
  preco: number
}

function handleProduto(dados: Produto) {
  dados.nome
}

const link = document.querySelector('a')

if (link) {
  link.innerHTML = 'Teste'
}

function handleClick(this: HTMLElement) {
  // console.log(e);
  console.log(this.innerHTML)
}

document.documentElement.addEventListener('click', handleClick)

function trocarModo(modo: string) {
  if (modo === 'dark') {
    return 'color: black;'
  } else {
    return 'color: white'
  }
}

trocarModo('light')

function maiuscula(frase: string) {
  console.log(frase)
  const total = 100
}
