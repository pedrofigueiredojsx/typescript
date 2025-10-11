async function fetchProduct() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json')
  const data = await response.json()
  console.log(data)
  showProduct(data)
}

fetchProduct()

interface Empresa {
  fundacao: number
  nome: string
  pais: string
}

interface DataProducts {
  nome: string
  preco: number
  descricao: string
  garantia: string
  seguroAcidentes: boolean
  empresaFabricante: Empresa
  empresaMontadora: Empresa
}

function showProduct(data: DataProducts) {
  document.body.innerHTML += `
  <div>
    <h2>${data.nome}</h2>
    <p>${data.preco}</p>
    <p>${data.descricao}</p>
    <p>${data.garantia}</p>
    <p>${data.seguroAcidentes}</p>
    <div>
      <h3>Fabricante: ${data.empresaFabricante.nome}</h3>
    </div>
    <div>
      <h3>Montadora: ${data.empresaMontadora.nome}</h3>
    </div>
  </div>`
}
