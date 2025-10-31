import moedaParaNumero from './moedaParaNumero.js';
import stringToData from './stringToDate.js';
export default function normalizarTransaao(transacao) {
    return {
        nome: transacao.Nome,
        id: transacao.ID,
        data: stringToData(transacao.Data),
        status: transacao.Status,
        email: transacao.Email,
        moeda: transacao['Valor (R$)'],
        valor: moedaParaNumero(transacao['Valor (R$)']),
        pagamento: transacao['Forma de Pagamento'],
        novo: Boolean(transacao['Cliente Novo']),
    };
}
//# sourceMappingURL=normalizarTransacao.js.map