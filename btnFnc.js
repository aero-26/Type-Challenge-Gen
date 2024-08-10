"use strict";

// Selectors
const btn = document.querySelectorAll(".btn");
const selector = document.querySelectorAll(".form-check-input");
const genBtn = btn[0];
const copyBtn = btn[1];
const specials = selector[0];
const textArea = document.querySelectorAll("textarea")[0];
const alert = document.querySelectorAll(".alert")[0];
const radioBtnDiv = document.querySelectorAll(".form-check");
const h5 = document.querySelectorAll("h5");

// Function to hide and show the no of words in English section
const hideNumOfWords = () => {
  for (let i = 3; i < selector.length; i++) {
    radioBtnDiv[i].classList.add("hide");
  }
  h5[1].classList.add("hide");
};
const showNumOfWords = () => {
  for (let i = 3; i < selector.length; i++) {
    radioBtnDiv[i].classList.remove("hide");
  }
  h5[1].classList.remove("hide");
};

// Selector register (special or number)
let speOrNumOrEng;
selector[0].addEventListener("click", () => {
  speOrNumOrEng = "symbols";
  localStorage.setItem("type", "specials");
  showNumOfWords();
});
selector[1].addEventListener("click", () => {
  speOrNumOrEng = "num";
  localStorage.setItem("type", "number");
  showNumOfWords();
});
selector[2].addEventListener("click", () => {
  speOrNumOrEng = "english";
  hideNumOfWords();
  localStorage.setItem("type", "english");
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
  speOrNumOrEng = "symbols";
  showNumOfWords();
} else {
  if (typeCheck === "specials") {
    selector[0].click();
    speOrNumOrEng = "symbols";
    showNumOfWords();
  }
  if (typeCheck === "number") {
    selector[1].click();
    speOrNumOrEng = "num";
    showNumOfWords();
  }
  if (typeCheck === "english") {
    selector[2].click();
    speOrNumOrEng = "english";
    hideNumOfWords();
  }
  if (wordCheck === "10") {
    selector[3].click();
    totalWord = 10;
  }
  if (wordCheck === "25") {
    selector[4].click();
    totalWord = 25;
  }
  if (wordCheck === "50") {
    selector[5].click();
    totalWord = 50;
  }
  if (wordCheck === "100") {
    selector[6].click();
    totalWord = 100;
  }
}

// Words
selector[3].addEventListener("click", () => {
  localStorage.setItem("words", "10");
  totalWord = 10;
});
selector[4].addEventListener("click", () => {
  localStorage.setItem("words", "25");
  totalWord = 25;
});
selector[5].addEventListener("click", () => {
  localStorage.setItem("words", "50");
  totalWord = 50;
});
selector[6].addEventListener("click", () => {
  localStorage.setItem("words", "100");
  totalWord = 100;
});

// To generate Sentence
genBtn.addEventListener("click", () => {
  // Unhide text Area and copy button
  textArea.classList.remove("hide");
  copyBtn.classList.remove("hide");

  if (speOrNumOrEng === "num") {
    let print = wordGen(num);
    textArea.innerText = print;
  } else if (speOrNumOrEng === "symbols") {
    let print = wordGen(symbols);
    textArea.innerText = print;
  } else if (speOrNumOrEng === "english") {
    let print = wordGen(english);
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
