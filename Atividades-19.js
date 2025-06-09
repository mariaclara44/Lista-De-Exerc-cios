let codigos = [
  "abc123",
  "def456",
  "ghi789",
  "jkl012",
  "mno345",
  "pqr678",
  "stu901",
  "vwx234"
];

let maiuscula = codigos.map(item => item.toUpperCase());

console.log(`Maiúsculas com map(): ${maiuscula.join(', ')}`);