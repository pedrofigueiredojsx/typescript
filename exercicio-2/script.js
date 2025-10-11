function toNumber(value) {
    if (typeof value === 'number') {
        return value;
    }
    else if (typeof value === 'string') {
        return Number(value);
    }
    else {
        throw 'value deve ser um number | string';
    }
}
console.log(toNumber(23));
console.log(toNumber('55'));
export {};
// console.log(toNumber(true))
//# sourceMappingURL=script.js.map