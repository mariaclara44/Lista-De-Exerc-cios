let gradeCurricular = [
  "Matemática",
  "Português",
  "Biologia",
  "Física",
  "História",
  "Educação Física",
  "Inglês"
];

let elementoAlterado = gradeCurricular.splice(2, 2, "Programação", "Robótica");
console.log(`Depois do splice: ${gradeCurricular.join(', ')}`);

