"use strict";
// Making string with all the required symbols and numbers
const raw_sym = `!@#$%^&*()-_=+|\\[]{}"':;/?.>,<\`\~`;
const raw_num = `0123456789`;
const raw_op = `+-*/.`;

//-----------------------------

// Spliting the raw numbers and symbols
const symbols = raw_sym.split("");
const num = raw_num.split("");
const operator = raw_op.split("");
let isOperator;

//--------------------------

// Creating auto random numbers for word formation

// Empty array for word creation and sentence to print
let sentence = [];

// Creation of random word length
const wordLen = function () {
  return Math.trunc(Math.random() * 7 + 1);
};

// Selecting radom Character
const randomWord = function (arr) {
  let indexNum = Math.trunc(Math.random() * arr.length);
  return arr[indexNum];
};

// Deciding for decimals and opertors
let useOperator = function () {
  if (Math.round(Math.random())) {
    return true;
  } else {
    return false;
  }
};

// Total number of words to print
let totalWord;

// Word generation and sentence formation function
const wordGen = function (arr) {
  sentence = [];

  // For Symbols and Numbers
  if (arr === num || arr === symbols) {
    for (let i = 1; i <= totalWord; i++) {
      useOperator();

      // Runnig temp word length and creating empty word array for final result
      let tempWordLen = wordLen();
      let word = [];

      // Function to create Sentence without operator
      function createSentence() {
        let tempWord = word.join("");
        sentence.push(tempWord);
      }

      // Create Sentence with operator
      function crSentenceWithOp() {
        let tempWord = word.join("");

        //   Making condition for use of operator
        let cdn4operator = useOperator();

        // Checking condition for operator usage
        if (tempWord.length <= 2 || !cdn4operator) {
          sentence.push(tempWord);
        } else {
          // Spliting whole Word
          let chTempWord = tempWord.split("");

          // Creating random index that need to be replaced
          let index = Math.trunc(Math.random() * (tempWord.length - 2) + 1);

          // Selecting random operator and replace the number with the operator
          let tempOp = Math.trunc(Math.random() * operator.length);
          chTempWord[index] = operator[tempOp];

          // Pushing the edited sentence to the array
          sentence.push(chTempWord.join(""));
        }
      }

      for (let a = 0; a <= tempWordLen; a++) {
        if (a !== tempWordLen) {
          let tempChar = randomWord(arr);
          word.push(tempChar);
        } else {
          if (arr !== num) {
            createSentence();
          } else {
            crSentenceWithOp();
          }
        }
      }
    }
    return sentence.join(" ");
  } else if (arr === english) {
    const randomPassIndex = Math.trunc(Math.random() * english.length);
    console.log(randomPassIndex);
    return english[randomPassIndex];
  }
};

// Use wordGen(num/symbols) to run the Word Generation As shown below;
// wordGen(num);
// wordGen(symbols);
