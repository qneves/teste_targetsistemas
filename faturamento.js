// SOLUCAO TERCEIRA QUESTÃO

const fs = require('fs');

const dadosFaturamento = JSON.parse(fs.readFileSync('faturamento.json', 'utf8'));

const diasComFaturamento = dadosFaturamento.filter(dia => dia.valor > 0);

const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.valor));
const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.valor));

const mediaMensal = diasComFaturamento.reduce((soma, dia) => soma + dia.valor, 0) / diasComFaturamento.length;

const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;

console.log(`Menor faturamento diário: R$ ${menorFaturamento.toFixed(2)}`);
console.log(`Maior faturamento diário: R$ ${maiorFaturamento.toFixed(2)}`);
console.log(`Dias com faturamento acima da média mensal: ${diasAcimaDaMedia}`);