// function extractText<T extends HTMLElement>(el: T) {
//   return {
//     texto: el.innerText,
//     el,
//   }
// }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// const link = document.querySelector('a')
// if (link) {
//   console.log(extractText(link).el.href)
// }
// document.querySelector
// function $<Tipo extends Element>(selector: string): Tipo | null {
//   return document.querySelector(selector)
// }
// const link = $<HTMLAnchorElement>('a')?.href
const link = document.querySelector('.link');
if (link instanceof HTMLVideoElement) {
    link === null || link === void 0 ? void 0 : link.volume;
}
function getData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        return yield response.json();
    });
}
function handleData() {
    return __awaiter(this, void 0, void 0, function* () {
        const notebook = yield getData('https://api.origamid.dev/json/notebook.json');
        console.log(notebook.preco);
    });
}
handleData();
export {};
//# sourceMappingURL=script.js.map