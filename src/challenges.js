// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(phrase) {
  let result = phrase.split(' ');
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
  let cat1Position = cat1 - mouse;
  let cat2Position = cat2 - mouse;
  if (Math.abs(cat1Position) > Math.abs(cat2Position)) {
    return 'cat2';
  } else if(Math.abs(cat1Position) < Math.abs(cat2Position)) {
    return 'cat1'
} return 'os gatos trombam e o rato foge'
}

// Desafio 8
function fizzBuzz(listOfNumbers) {
  let answer = [];
  for (let number in listOfNumbers) {
    if (listOfNumbers[number] % 3 === 0 && listOfNumbers[number] % 5 === 0) {
      answer.push('fizzBuzz');
    } else if (listOfNumbers[number] % 3 === 0) {
      answer.push('fizz');
    } else if (listOfNumbers[number] % 5 === 0) {
      answer.push('buzz');
    } else {
      answer.push('bug!');
    }
  }
  return answer;
}
// Desafio 9
function encode(phrase1) {
  let newPhrase = [];
  for (index in phrase1) {
    if (phrase1[index] === "a") {
      newPhrase.push("1");
    } else if (phrase1[index] === "e") {
      newPhrase.push("2");
    } else if (phrase1[index] === "i") {
      newPhrase.push("3");
    } else if (phrase1[index] === "o") {
      newPhrase.push("4");
    } else if (phrase1[index] === "u") {
      newPhrase.push("5");
    } else {
      newPhrase.push(phrase1[index]);
    }
  }
  return newPhrase.join("");
}
function decode(phrase1) {
  let newPhrase = [];
  for (let index in phrase1) {
    if (phrase1[index] === "1") {
      newPhrase.push("a");
    } else if (phrase1[index] === "2") {
      newPhrase.push("e");
    } else if (phrase1[index] === "3") {
      newPhrase.push("i");
    } else if (phrase1[index] === "4") {
      newPhrase.push("o");
    } else if (phrase1[index] === "5") {
      newPhrase.push("u");
    } else {
      newPhrase.push(phrase1[index])
    }
  }
  return newPhrase.join("");
}

// Desafio 10
function techList(techs, name) {
  let result = [];
  techs.sort();
  for (let index in techs) {
    result.push({ 'tech': techs[index], 'name': name });
  }
  if (techs.length === 0) {
    return 'Vazio!'
  }
  return result;
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
