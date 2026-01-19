function validarUsuario(isAdmin) {
  if (isAdmin) {
    let mensagem = "Acesso permitido";
    console.log(mensagem);
  }

  console.log(mensagem); // ReferenceError
}

// a variável "mensagem" foi declarada com let dentro do bloco if, portanto
// seu escopo está limitado a essa estrutura condicional. Fora do bloco,
// a variável não existe, o que gera um erro de referência. Esse controle
// de visibilidade evita o uso indevido de variáveis fora do contexto
// onde elas fazem sentido.
