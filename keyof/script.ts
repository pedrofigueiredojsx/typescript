// interface Produto {
//   nome: string
//   preco: string
//   novo: boolean
// }

// let chave: keyof Produto
// // let chave = 'novo' | 'preco' | 'novo'
// chave = 'novo'

// console.log(chave)

// function coordenadas(x: number, y: number) {
//   return { x, y }
// }

// let coord: typeof coordenadas

// coord = (x: number, y: number) => {
//   return { x, y }
// }

interface Elementos {
  a: HTMLAnchorElement
  video: HTMLVideoElement
  div: HTMLElement
  body: HTMLBodyElement
  audio: HTMLAudioElement
}

function selecionar<K extends keyof Elementos>(
  seletor: K
): Elementos[K] | null {
  return document.querySelector(seletor)
}

selecionar('a')?.href
selecionar('video')?.volume
selecionar('body')
