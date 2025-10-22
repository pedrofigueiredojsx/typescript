function normalizar(valor) {
    if (typeof valor === 'string') {
        return valor.trim().toLowerCase();
    }
    else {
        return valor.map((item) => item.trim().toLowerCase());
    }
}
console.log(normalizar(' Produto ').toUpperCase());
console.log(normalizar([' BanaNa ', 'UVA ']));
function $(seletor) {
    return document.querySelector(seletor);
}
$('a');
$('video');
$('.item');
export {};
//# sourceMappingURL=script.js.map