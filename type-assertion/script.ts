// const video = document.querySelector('#video') as HTMLVideoElement

interface Produto {
  nome: string
  preco: number
}

async function fetchProduto() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json')
  return response.json() as Promise<Produto>
}

async function handleProduto() {
  const produto = await fetchProduto()
  console.log((produto as Produto).nome)
}

handleProduto()

const video = document.querySelector('video')!

video?.volume

document.querySelector('a')!.href = 'https://www.origamid.com'

const video1 = document.querySelector('.player') as HTMLVideoElement
const video2 = <HTMLVideoElement>document.querySelector('.player')
const video3 = document.querySelector<HTMLVideoElement>('.player')
const video4 = document.querySelector('.player')

;(video4 as HTMLVideoElement).volume
