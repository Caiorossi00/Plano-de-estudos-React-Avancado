10 == "10"; // true
0 == false; // true
"" == false; // true
null == undefined; // true

10 === "10"; // false
0 === false; // false
"" === false; // false
null === undefined; // false

function comparar(a, b) {
  console.log(a == b); // coerção implícita
  console.log(a === b); // comparação estrita
}

comparar(10, "10");
comparar(0, false);
comparar("", false);
comparar(null, undefined);
comparar(1, true);
