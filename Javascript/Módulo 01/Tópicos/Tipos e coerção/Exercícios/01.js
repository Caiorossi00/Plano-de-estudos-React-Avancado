function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}

function isString(value) {
  return typeof value === "string";
}

function isBoolean(value) {
  return typeof value === "boolean";
}

function isSymbol(value) {
  return typeof value === "symbol";
}

function isUndefined(value) {
  return typeof value === "undefined";
}

function isBigInt(value) {
  return typeof value === "bigint";
}

function isNull(value) {
  return value === null;
}

// Number
isNumber(10); // true
isNumber(0); // true
isNumber(NaN); // false
isNumber("10"); // false

// String
isString("Olá"); // true
isString(""); // true
isString(10); // false

// Boolean
isBoolean(true); // true
isBoolean(false); // true
isBoolean(0); // false

// Symbol
const id = Symbol("id");
isSymbol(id); // true
isSymbol("id"); // false

// Undefined
let x;
isUndefined(x); // true
isUndefined(null); // false

// BigInt
isBigInt(10n); // true
isBigInt(10); // false

// Null
isNull(null); // true
isNull(undefined); // false
