// SOLUCAO QUINTa QUESTÃO

function inverterString(texto) {
    let textoInvertido = '';
    for (let i = texto.length - 1; i >= 0; i--) {
      textoInvertido += texto[i];
    }
    return textoInvertido;
  }
  
  const textoOriginal = "Target Sistemas";
  const textoInvertido = inverterString(textoOriginal);
  
  console.log(`Texto original: ${textoOriginal}`);
  console.log(`Texto invertido: ${textoInvertido}`);