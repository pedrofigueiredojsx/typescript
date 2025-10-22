async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json')
  const json = await response.json()
  handleCursos(json)
}
fetchCursos()

interface Cursos {
  nome: string
  horas: number
  tags: string[]
}

function isCurso(value: unknown): value is Cursos {
  if (
    value &&
    typeof value === 'object' &&
    'nome' in value &&
    'horas' in value &&
    'tags' in value
  ) {
    return true
  } else {
    return false
  }
}

function handleCursos(data: unknown) {
  console.log(data)
  if (Array.isArray(data)) {
    data.filter(isCurso).forEach((item) => {
      document.body.innerHTML += `
      <div>
        <h2>${item.nome}</h2>
        <p>${item.horas}</p>
        <p>${item.tags.join(', ')}</p>
      </div>
      `
    })
  }
}
