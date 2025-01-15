const faturamento = [];
const diasNoMes = 30;

for (let dia = 1; dia <= diasNoMes; dia++) {
  // Gera um valor aleatório entre 0 e 50000
  // Alguns dias terão faturamento 0 para simular finais de semana e feriados
  const valor = Math.random() < 0.2 ? 0 : Math.random() * 50000;
  
  faturamento.push({
    dia,
    valor: parseFloat(valor.toFixed(2))
  });
}

const jsonString = JSON.stringify(faturamento, null, 2);
console.log(jsonString);

// Em um cenário real, você salvaria isso em um arquivo
// fs.writeFileSync('faturamento.json', jsonString);