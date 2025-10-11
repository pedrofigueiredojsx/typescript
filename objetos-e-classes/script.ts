class Produto {
  nome: string
  preco: number
  constructor(nome: string, preco: number) {
    this.nome = nome
    this.preco = preco
  }
  precoReal() {
    return `R$ ${this.preco}`
  }
}

const livro = new Produto('A Guerra dos Tronos', 200)

console.log(livro instanceof Array)

class Livro {
  autor: string
  constructor(autor: string) {
    this.autor = autor
  }
}

class Jogo {
  jogadores: number
  constructor(jogadores: number) {
    this.jogadores = jogadores
  }
}

function buscarProduto(busca: string) {
  if (busca === 'O Hobbit') {
    return new Livro('J. R. R. Tolkien')
  }
  if (busca === 'Dark Souls') {
    return new Jogo(1)
  }
  return null
}

const produto = buscarProduto('Dark Souls')

if (produto instanceof Livro) {
  console.log(produto.autor)
}

if (produto instanceof Jogo) {
  console.log(produto.jogadores)
}
