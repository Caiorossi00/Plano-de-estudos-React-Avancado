function exemploEscopo() {
  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
  }

  console.log(a); // 10
  console.log(b); // ReferenceError
  console.log(c); // ReferenceError
}

// var possui escopo de função, então a variável "a" continua acessível
// fora do bloco if. Já let e const possuem escopo de bloco, o que impede
// o acesso às variáveis "b" e "c" fora da estrutura condicional. Esse é
// um dos principais motivos para evitar o uso de var em código moderno.
