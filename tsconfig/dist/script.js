import plugin from "./plugin";
plugin();
function handleProduto(dados) {
    dados.nome;
}
const link = document.querySelector('a');
if (link) {
    link.innerHTML = 'Teste';
}
function handleClick() {
    console.log(this.innerHTML);
}
document.documentElement.addEventListener('click', handleClick);
function trocarModo(modo) {
    if (modo === 'dark') {
        return 'color: black;';
    }
    else {
        return 'color: white';
    }
}
trocarModo('light');
function maiuscula(frase) {
    console.log(frase);
    const total = 100;
}
//# sourceMappingURL=script.js.map