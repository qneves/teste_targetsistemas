// SOLUCAO SEGUNDA QUESTÃO
// 

function pertenceSequenciaFibonacci(numero) {
  let anterior = 0;
  let atual = 1;

  while (atual < numero) {
    const proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
  }

  return atual === numero;
}

const numeroTeste = 21;
const resultado = pertenceSequenciaFibonacci(numeroTeste)
  ? "pertence"
  : "não pertence";

console.log(`O número ${numeroTeste} ${resultado} à sequência de Fibonacci.`);