const quoteText = "Ini adalah teks latihan mengetik yang harus Anda ketik.";

const quoteElement = document.getElementById("quote");
const inputBox = document.getElementById("input-box");
const startButton = document.getElementById("start-button");

let currentIndex = 0;

function startTyping() {
  inputBox.focus();
  inputBox.value = "";
  currentIndex = 0;
  showNextCharacter();
}

function showNextCharacter() {
  if (currentIndex < quoteText.length) {
    quoteElement.innerHTML =
      quoteText.substring(0, currentIndex) +
      '<span class="highlight">' +
      quoteText.charAt(currentIndex) +
      "</span>" +
      quoteText.substring(currentIndex + 1);
    currentIndex++;
  } else {
    quoteElement.innerHTML = quoteText;
  }
}

inputBox.addEventListener("input", function () {
  if (
    inputBox.value.charAt(inputBox.value.length - 1) ===
    quoteText.charAt(currentIndex - 1)
  ) {
    showNextCharacter();
  }
});

function checkInput() {
  const UserText = inputBox.value;
  const currentChar = quoteText[currentIndex];

  if (UserText === currentChar) {
    currentIndex++;
    inputBox.value = "";
    feedback.textContent = "";
    showQuote();
  } else {
    feedback.textContent = "Kesalahan! Coba lagi.";
  }
}

inputBox.addEventListener("input", checkInput);

startButton.addEventListener("click", startTyping);
