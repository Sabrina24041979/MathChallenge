function getRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

function generateProblem() {
  const number1 = getRandomNumber(99);
  const number2 = getRandomNumber(99);
  const operation = Math.random() < 0.5 ? '+' : '-';
  const problemElement = document.getElementById('problem');
  problemElement.textContent = `${number1} ${operation} ${number2}`;
  document.getElementById('answer').value = '';
  document.getElementById('result').textContent = '';
}

function checkAnswer() {
  const problemText = document.getElementById('problem').textContent;
  const [number1, operation, number2] = problemText.split(' ');
  const userAnswer = parseInt(document.getElementById('answer').value);
  const correctAnswer = operation === '+' ? parseInt(number1) + parseInt(number2) : parseInt(number1) - parseInt(number2);

  const resultElement = document.getElementById('result');
  resultElement.textContent = userAnswer === correctAnswer ? 'Correct ! 🎉' : 'Incorrect. 😔';
}

function generateSubtractionProblem() {
  const number1 = getRandomNumber(99);
  const number2 = getRandomNumber(99);
  const problemElement = document.getElementById('subtractionProblem');
  problemElement.textContent = `${number1} - ${number2}`;
  document.getElementById('subtractionAnswer').value = '';
  document.getElementById('subtractionResult').textContent = '';
}

function checkSubtractionAnswer() {
  const problemText = document.getElementById('subtractionProblem').textContent;
  const [number1, _, number2] = problemText.split(' ');
  const userAnswer = parseInt(document.getElementById('subtractionAnswer').value);
  const correctAnswer = parseInt(number1) - parseInt(number2);

  const resultElement = document.getElementById('subtractionResult');
  resultElement.textContent = userAnswer === correctAnswer ? 'Correct ! 🎉' : 'Incorrect. 😔';
}

function generateMultiplicationProblem() {
  const number1 = getRandomNumber(12); // Limiting to 12 for multiplication tables
  const number2 = getRandomNumber(12); // Limiting to 12 for multiplication tables
  const problemElement = document.getElementById('multiplicationProblem');
  problemElement.textContent = `${number1} × ${number2}`;
  document.getElementById('multiplicationAnswer').value = '';
  document.getElementById('multiplicationResult').textContent = '';
}

function checkMultiplicationAnswer() {
  const problemText = document.getElementById('multiplicationProblem').textContent;
  const [number1, _, number2] = problemText.split(' ');
  const userAnswer = parseInt(document.getElementById('multiplicationAnswer').value);
  const correctAnswer = parseInt(number1) * parseInt(number2);

  const resultElement = document.getElementById('multiplicationResult');
  resultElement.textContent = userAnswer === correctAnswer ? 'Correct ! 🎉' : 'Incorrect. 😔';
}

function generateDivisionProblem() {
  let number1, number2;
  do {
    number1 = getRandomNumber(99);
    number2 = getRandomNumber(10); // Limiting denominator to 10 for simplicity
  } while (number1 % number2 !== 0); // Ensuring division results in whole number
  const problemElement = document.getElementById('divisionProblem');
  problemElement.textContent = `${number1} ÷ ${number2}`;
  document.getElementById('divisionAnswer').value = '';
  document.getElementById('divisionResult').textContent = '';
}

function checkDivisionAnswer() {
  const problemText = document.getElementById('divisionProblem').textContent;
  const [number1, _, number2] = problemText.split(' ');
  const userAnswer = parseInt(document.getElementById('divisionAnswer').value);
  const correctAnswer = parseInt(number1) / parseInt(number2);

  const resultElement = document.getElementById('divisionResult');
  resultElement.textContent = userAnswer === correctAnswer ? 'Correct ! 🎉' : 'Incorrect. 😔';
}