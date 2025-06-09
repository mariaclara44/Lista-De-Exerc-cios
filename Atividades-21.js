let estoque = [
  { produto: "Teclado", quantidade: 5 },
  { produto: "Mouse", quantidade: 12 },
  { produto: "Monitor", quantidade: 3 },
  { produto: "Notebook", quantidade: 18 },
  { produto: "Impressora", quantidade: 9 },
  { produto: "Webcam", quantidade: 20 }
];

let produtosFiltradas = estoque.filter (item => item.quantidade > 10);

console.log (`A lista do estoque filtrado (produtos com mais de 10 unidades):` , produtosFiltradas);

