// Handle event listener on conversion button
const converterBtn = document.querySelector(".converter__btn");
converterBtn.addEventListener("click", function(evt) {
  evt.preventDefault();

  const value = document.querySelector(".converter__input").value;
  const romanNumeral = encoder(value);
  if (!parseInt(value)) {
    document.querySelector(".card__form__error").textContent =
      "Sorry number must contain only digits";
    document.querySelector(".roman-numeral").textContent = "";
  } else {
    document.querySelector(".roman-numeral").textContent = romanNumeral;
  }
});

// Handle event listener for keyboard input and validates input
const converterInput = document.querySelector(".converter__input");
converterInput.addEventListener("keyup", function() {
  const value = this.value;
  if (parseInt(value) > 3999) {
    document.querySelector(".card__form__error").textContent =
      "Sorry, number must be less than 4000";
    document
      .querySelector(".converter__btn")
      .setAttribute("disabled", "disabled");
  } else {
    document.querySelector(".card__form__error").textContent = "";
    document
      .querySelector(".converter__btn")
      .removeAttribute("disabled", "disabled");
  }
});

// Utility function that converts Number to Roman Numeral
function encoder(number) {
  let romanNumeral = "";
  let sequence = "";

  // Object mapping Number literal to their Roman Numeral equivalent
  const romanLiterals = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I"
  };
  const digits = Object.keys(romanLiterals).reverse();

  if () {

  }

  if (romanLiterals[number]) {
    return romanLiterals[number];
  }

  for (let i = 0; i < digits.length; i++) {
    // Check for the lowest Roman numeral closest to a number
    if (number % digits[i] < number) {
      sequence = Math.floor(number / digits[i]);
      romanNumeral += romanLiterals[digits[i]].repeat(sequence);
      number -= sequence * digits[i];
    }
  }

  return romanNumeral;
}
