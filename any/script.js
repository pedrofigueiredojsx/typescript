var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function normalizar(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizar(' DeSiGn  '));
// console.log(normalizar(200))
function fetchJSON(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const data = yield response.json();
        manipularData(data);
    });
}
fetchJSON('https://api.origamid.dev/json/cursos.json');
function manipularData(data) {
    console.log(data.nome);
}
function mostrarCursos(cursos) {
    cursos.forEach((curso) => {
        document.body.innerHTML += `
      <div>
        <h2>${curso.nome}</h2>
        <p>Horas: ${curso.horas}</p>
      </div>
    `;
    });
}
const dados = 'o any gera problemas';
mostrarCursos(dados);
export {};
//# sourceMappingURL=script.js.map