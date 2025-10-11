const frase = 'Front End';
const preco = 500;
const condi = preco > 500;
console.log(typeof frase);
console.log(typeof preco);
console.log(typeof condi);
console.log(typeof null);
if (typeof frase === 'string') {
    frase.toLowerCase();
}
else {
    console.log('Frase não é uma string');
}
const frase1 = new String('Front End');
const frase2 = String('Front End');
const frase3 = 'Front End';
console.log(typeof String);
console.log(frase1.toLowerCase());
console.log(typeof frase1);
console.log(typeof frase2);
console.log(typeof frase3);
export {};
//# sourceMappingURL=script.js.map