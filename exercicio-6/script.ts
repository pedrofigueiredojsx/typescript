const links = document.querySelectorAll('.link')

function ativarElemento(elemento: HTMLElement) {
  elemento.style.color = 'red'
  elemento.style.border = '2px solid red'
}

links.forEach((link) => {
  console.dir(link)
  if (link instanceof HTMLElement) {
    ativarElemento(link)
  }
})
