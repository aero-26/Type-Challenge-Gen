"use strict";

// Selectors
const btn = document.querySelectorAll(".btn");
const selector = document.querySelectorAll(".form-check-input");
const genBtn = btn[0];
const copyBtn = btn[1];
const specials = selector[0];
const textArea = document.querySelectorAll("textarea")[0];
const alert = document.querySelectorAll(".alert")[0];

// Selector register (special or number)
let speOrNum;
selector[0].addEventListener("click", () => {
  speOrNum = "symbols";
  localStorage.setItem("type", "specials");
});
selector[1].addEventListener("click", () => {
  speOrNum = "num";
  localStorage.setItem("type", "number");
});

// Setting up local storage
// Check if local storage is there or not
const typeCheck = localStorage.getItem("type");
const wordCheck = localStorage.getItem("words");

if (wordCheck === null) {
  localStorage.setItem("words", "50");
  selector[4].click();
  totalWord = 50;
}
if (typeCheck === null) {
  localStorage.setItem("type", "specials");
  selector[0].click();
  speOrNum = "symbols";
} else {
  if (typeCheck === "specials") {
    selector[0].click();
    speOrNum = "symbols";
  }
  if (typeCheck === "number") {
    selector[1].click();
    speOrNum = "num";
  }
  if (wordCheck === "10") {
    selector[2].click();
    totalWord = 10;
  }
  if (wordCheck === "25") {
    selector[3].click();
    totalWord = 25;
  }
  if (wordCheck === "50") {
    selector[4].click();
    totalWord = 50;
  }
  if (wordCheck === "100") {
    selector[5].click();
    totalWord = 100;
  }
}

// Words
selector[2].addEventListener("click", () => {
  localStorage.setItem("words", "10");
  totalWord = 10;
});
selector[3].addEventListener("click", () => {
  localStorage.setItem("words", "25");
  totalWord = 25;
});
selector[4].addEventListener("click", () => {
  localStorage.setItem("words", "50");
  totalWord = 50;
});
selector[5].addEventListener("click", () => {
  localStorage.setItem("words", "100");
  totalWord = 100;
});

// To generate Sentence
genBtn.addEventListener("click", () => {
  // Unhide text Area and copy button
  textArea.classList.remove("hide");
  copyBtn.classList.remove("hide");

  if (speOrNum === "num") {
    let print = wordGen(num);
    textArea.innerText = print;
  } else {
    let print = wordGen(symbols);
    textArea.innerText = print;
  }
});

// To copy text
copyBtn.addEventListener("click", () => {
  // Unhiding Copy message
  alert.classList.remove("hide");

  navigator.clipboard.writeText(textArea.value);

  // Adding hide message
  setTimeout(() => {
    alert.classList.add("hide");
  }, 2000);
});
