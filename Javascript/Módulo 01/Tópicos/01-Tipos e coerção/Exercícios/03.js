function identificarTipo(valor) {
  if (valor === null) {
    return "null";
  }

  if (Array.isArray(valor)) {
    return "array";
  }

  return typeof valor;
}

identificarTipo(10); // "number"
identificarTipo("texto"); // "string"
identificarTipo(true); // "boolean"
identificarTipo(undefined); // "undefined"
identificarTipo(Symbol("id")); // "symbol"
identificarTipo(10n); // "bigint"
identificarTipo(function () {}); // "function"
identificarTipo({}); // "object"
identificarTipo([]); // "array"
identificarTipo(null); // "null"
