let usuariosSistemaA = [
  "aline.souza",
  "maria.ferreira",
  "carlos.lima",
  "ana.martins"
];

let usuariosSistemaB = [
  "joao.silva",
  "paulo.pereira",
  "fernanda.alves",
  "marcelo.cardoso"
];


console.log(`A lista combinada: ${usuariosSistemaA.concat(usuariosSistemaB)}`);

console.log(`Playlist combinada: ${usuariosSistemaA.concat(usuariosSistemaB).join(', ')}`);