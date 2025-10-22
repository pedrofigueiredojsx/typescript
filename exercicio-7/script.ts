const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(event: PointerEvent) {
  const nav = document.getElementById('nav')
  const button = event.currentTarget

  if (button instanceof HTMLButtonElement && nav) {
    const active = nav?.classList.contains('active')
    if (active) {
      nav?.classList.remove('active')
      button.setAttribute('area-expanded', 'false')
      button.setAttribute('area-label', 'Abrir Menu')
    } else {
      nav?.classList.add('active')
      button.setAttribute('area-expanded', 'true')
      button.setAttribute('area-label', 'Fechar Menu')
    }
  }
}

btnMobile?.addEventListener('pointerdown', toggleMenu)
