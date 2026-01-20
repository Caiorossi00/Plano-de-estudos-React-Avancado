console.log(x); // undefined
var x = 10;

// com var ocorre hoisting, ou seja, a declaração da variável é movida
// para o topo do escopo antes da execução do código, mas a atribuição
// do valor acontece apenas na linha onde ela foi definida. Por isso,
// a variável existe no momento do console.log, porém ainda não foi
// inicializada, resultando em undefined.
