"use strict";

// Selectors
const btn = document.querySelectorAll(".btn");
const selector = document.querySelectorAll(".form-check-input");
const genBtn = btn[0];
const copyBtn = btn[1];
const specials = selector[0];
const textArea = document.querySelectorAll("textarea")[0];

// Selector register (special or number)
let speOrNum;
selector[0].addEventListener("click", () => {
  speOrNum = "symbols";
});
selector[1].addEventListener("click", () => {
  speOrNum = "num";
});

// Words
selector[2].addEventListener("click", () => {
  totalWord = 10;
});
selector[3].addEventListener("click", () => {
  totalWord = 25;
});
selector[4].addEventListener("click", () => {
  totalWord = 50;
});
selector[5].addEventListener("click", () => {
  totalWord = 100;
});

// To generate Sentence
genBtn.addEventListener("click", () => {
  if (speOrNum === "num") {
    let print = wordGen(num);
    textArea.innerText = print;
  } else {
    let print = wordGen(symbols);
    textArea.innerText = print;
  }
});
