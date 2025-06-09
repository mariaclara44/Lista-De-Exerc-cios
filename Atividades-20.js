let precos = [
  129.9,
  399.5,
  259.0,
  89.9,
  599.99,
  39.5,
  999.0
];

let novosValoresFormatados = precos.map(preco => `R$ ${preco.toFixed(2)}`);
console.log(`Novos valores formatados: ${novosValoresFormatados.join(', ')}`);
