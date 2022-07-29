// Desafio 11
function generatePhoneNumber() {
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
  for (let index = 0; index < quant.length; index +=1){
    water += Number(quant[index]);
  }
  if(water === 1){
    return water + ' copo de água';
  } return water + ' copos de água';
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
