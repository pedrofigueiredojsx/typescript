const { body } = document;
// interface Produto {
//   nome: string
//   preco?: number
// }
// function handleData({ nome, preco }: Produto)
function handleData({ nome, preco }) {
    nome.includes('book');
    preco === null || preco === void 0 ? void 0 : preco.toFixed();
}
handleData({
    nome: 'Notebook',
    preco: 1200,
});
function handleClick1({ currentTarget, pageX, }) {
    if (currentTarget instanceof HTMLElement) {
        currentTarget.innerHTML = `<h1>Mouse click em x: ${pageX}</h1>`;
        console.log(currentTarget);
    }
    console.log(pageX);
}
function handleClick({ currentTarget }) {
    if (currentTarget instanceof HTMLElement) {
        currentTarget.innerHTML = `<h1>Mouse click em x: $1</h1>`;
        console.log(currentTarget);
    }
}
// document.documentElement.addEventListener('click', handleClick)
// document.documentElement.addEventListener('touchstart', handleClick)
function comparar(tipo, ...numeros) {
    if (tipo === 'menor') {
        return Math.min(...numeros);
    }
    if (tipo === 'maior') {
        return Math.max(...numeros);
    }
}
console.log(comparar('menor', 3, 4, 5, 67, 8, 1, 5, 47, 9));
console.log(comparar('maior', 3, 4, 5, 67, 8, 1, 5, 47, 9));
export {};
//# sourceMappingURL=script.js.map