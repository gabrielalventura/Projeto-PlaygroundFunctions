// Desafio 11
function generatePhoneNumber(celNumber) {
  let phoneNumber = [];
  for (index = 0; index < celNumber.length; index += 1) {
    if (celNumber.length !== 11) {
      return 'Array com tamanho incorreto'
    } else if (celNumber.length == 11 && [index] === 0) {
      phoneNumber.unshift("(");
    } else if (celNumber.length == 11 && [index] === 3) {
      phoneNumber.push(")")
    } else if (celNumber.length == 11 && [index] === 8) {
      phoneNumber.push("-");
    } else {
      phoneNumber.push(celNumber[index]);
    }
  }
  return phoneNumber.join("");
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  sum = lineB + lineC;
  subtract = lineB - lineC;
  if(lineA < sum && lineA > Math.abs(subtract)){
    return true;
  }
  return false;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
