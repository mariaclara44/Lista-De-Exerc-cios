//  6 – Primeira mensagem indevida

let mensagens = [
    "Propaganda indevida",
    "Bom dia, posso ajudar?",
    "Preciso de suporte técnico",
    "Claro, qual o problema?",
    "Erro ao acessar conta"
  ];
  
  let mensagemRemovida =  mensagens.shift();
  console.log(`Após o shift: ${mensagemRemovida}`);
  console.log(`A mensagem removida foi: ${mensagemRemovida}`);
  