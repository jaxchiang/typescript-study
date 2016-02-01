function isNumber(x) {
    return typeof x === 'number';
}
function isString(x) {
    return typeof x === 'string';
}
function padLeft(value, padding) {
    if (isNumber(padding)) {
        return Array(padding).join('') + value;
    }
    ;
    if (isString(padding)) {
        return padding + value;
    }
    ;
    throw new Error("Expected string or number,got '" + value + "'.");
}
var ex2 = padLeft('Hello World', 'this is a ');
console.log(ex2);
