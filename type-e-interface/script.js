let total = 20;
total = '30';
function preencherDados(dados) {
    document.body.innerHTML += `
    <div>
      <h2>${dados.nome}</h2>
      <p>R$ ${dados.preco}</p>
      <p>Inclui teclado: ${dados.teclado ? 'sim' : 'não'}</p>
    </div>
  `;
}
const computador = {
    nome: 'Computador',
    preco: 2000,
    teclado: true,
};
preencherDados({
    nome: 'Computador',
    preco: 2000,
    teclado: true,
});
preencherDados({
    nome: 'Notebook',
    preco: 2500,
    teclado: false,
});
function pintarCategoria(categoria) {
    console.log(categoria);
    if (categoria === 'design') {
        console.log('Pintar vermelho');
    }
}
pintarCategoria('design');
export {};
//# sourceMappingURL=script.js.map