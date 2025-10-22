// const video = document.querySelector('#video') as HTMLVideoElement
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchProduto() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.origamid.dev/json/notebook.json');
        return response.json();
    });
}
function handleProduto() {
    return __awaiter(this, void 0, void 0, function* () {
        const produto = yield fetchProduto();
        console.log(produto.nome);
    });
}
handleProduto();
const video = document.querySelector('video');
video === null || video === void 0 ? void 0 : video.volume;
document.querySelector('a').href = 'https://www.origamid.com';
const video1 = document.querySelector('.player');
const video2 = document.querySelector('.player');
const video3 = document.querySelector('.player');
const video4 = document.querySelector('.player');
video4.volume;
export {};
//# sourceMappingURL=script.js.map