let hardware = [
  "processador i7",
  "placa-mãe",
  "memória RAM 16GB",
  "SSD 1TB"
];

let perifericos = [
  "teclado gamer",
  "mouse ótico",
  "webcam HD",
  "fone com microfone"
];

console.log(`A lista combinada: ${hardware.concat(perifericos)}`);

console.log (`A lista combinada: ${hardware.concat(perifericos).join(', ')}`);
