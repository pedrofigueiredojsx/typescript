const button = document.querySelector('button')
const config = localStorage.getItem('config')

if (button !== null) {
  button.click()
}

if (button) {
  button.click()
}

console.log(typeof null)

button?.click()

let total

function teste() {}

// console.log(typeof undefined)

// if (total) {
//   console.log('Total foi difinido')
// } else {
//   console.log('Total não foi definido')
// }

interface Product {
  nome?: string
}

const jogo: Product = {
  nome: 'Ragnarok',
}
const livro: Product = {}

if (jogo.nome) {
  jogo.nome.toLowerCase()
}

livro.nome?.toLowerCase()
