let alunos = [
  { nome: "Carlos", media: 6.5 },
  { nome: "Fernanda", media: 7.2 },
  { nome: "Lucas", media: 8.1 },
  { nome: "Marina", media: 5.9 },
  { nome: "João", media: 7.0 },
  { nome: "Aline", media: 9.3 }
];

let notasFiltradas = alunos.filter (notas => notas.media >= 7.0);

console.log (`Os alunos que atingiram a média igual ou superior 7.0 são):` , notasFiltradas);
