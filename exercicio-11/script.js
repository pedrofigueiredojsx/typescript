var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchVendas() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.origamid.dev/json/vendas.json');
        const data = yield response.json();
        console.log(data);
        somarVendas(data);
    });
}
fetchVendas();
function somarVendas(vendas) {
    var _a, _b;
    let total1 = 0;
    for (let i = 0; i < vendas.length; i++) {
        total1 += (_b = (_a = vendas[i]) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : 0;
    }
    document.body.innerHTML += `<p>Total: ${total1}</p>`;
    const total2 = vendas.reduce((total, venda) => {
        return total + venda[1];
    }, 0);
    document.body.innerHTML += `<p>Total: ${total2}</p>`;
}
export {};
// const arr = [3, 5, 10, 20, 30]
// const somar = arr.reduce((anterior, atual) => {
//   return anterior + atual
// }, 0)
//# sourceMappingURL=script.js.map