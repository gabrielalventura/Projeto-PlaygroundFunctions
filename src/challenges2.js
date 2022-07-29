// Desafio 11
function generatePhoneNumber(celNumber) {
  if (celNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let quantit = 0;
  for (let number of celNumber) {
    for (let index = 0; index < celNumber.length; index += 1) {
      if (number === celNumber[index]) {
        quantit += 1;
      }
      if (quantit >= 3 || number < 0 || number > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    quantit = 0;
  }
  return (`(${celNumber[0]}${celNumber[1]}) ${(celNumber.slice(2, 7)).join('')}-${(celNumber.slice(7, 11)).join('')}`);
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sum = lineB + lineC;
  let subtract = lineB - lineC;
  if (lineA < sum && lineA > Math.abs(subtract)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(drinks) {
  let quant = drinks.replace(/\D+/g, '');
  let water = 0;
  for (let index = 0; index < quant.length; index += 1) {
    water += Number(quant[index]);
  }
  if (water === 1) {
    return `${water} copo de água`;
  } return `${water} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
