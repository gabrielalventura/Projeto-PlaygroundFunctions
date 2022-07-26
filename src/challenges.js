// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(phrase) {
  let result = phrase.split(" ");
  return result;
}

// Desafio 4
function concatName(nameList) {
  let lastName = nameList[nameList.length - 1];
  let firstName = nameList[0];
  let concat = lastName + ", " + firstName;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsOfWins = wins * 3;
  let pointsOfTies = ties * 1;
  let totalPoints = pointsOfWins + pointsOfTies;
  return totalPoints;
}

// Desafio 6
function highestCount(numberList) {
  let biggestNumber = numberList[0];
  let repeatNumber = 0;
  for (let index = 0; index < numberList.length; index += 1) {
    if (biggestNumber < numberList[index]) {
      biggestNumber = numberList[index];
    }
  }
  for (let index = 0; index < numberList.length; index += 1) {
    if (biggestNumber === numberList[index]) {
      repeatNumber += 1;
    }
  }
  return repeatNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Position = cat1-mouse;
  let cat2Position = cat2-mouse;
  if (Math.abs(cat1Position) > Math.abs(cat2Position)) {
    return 'cat2';
  } else if (Math.abs(cat1Position) < Math.abs(cat2Position)) {
    return 'cat1'
  } else {
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
