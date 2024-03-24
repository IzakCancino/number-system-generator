/**
 * Executed when a button, for delete a digit input, is clicked
 * @param {PointerEvent} e Event generated by the click
 * @returns {void}
 */
function deleteBtnClicked(e) {
  if (base <= 1) {
    return;
  }

  btn = e.target;
  i = btnsDeleteDigit.indexOf(btn);

  btn.parentElement.remove();
  btnsDeleteDigit.splice(i, 1);
  base = btnsDeleteDigit.length;
  inputBase.value = base;

  updateDigitsInfo();
}

/**
 * Updates some values in labels, and the arrays `labelsDigits` and `inputsDigits`
 * @returns {void}
 */
function updateDigitsInfo() {
  // Updating the number in the labels of the digits inputs
  labelsDigits = Array.from(document.getElementsByClassName("label-digit"));
  labelsDigits.forEach((label, i) => {
    label.innerText = `Digit #${i + 1}`;
  });

  // Updating the array of digit inputs
  inputsDigits = Array.from(document.getElementsByClassName("digits"));
}

/**
 * Adds to "Delete" buttons the ability to delete their digit input
 * @returns {void}
 */
function updateDeleteBtns() {
  btnsDeleteDigit.forEach((btn) => {
    btn.removeEventListener("click", deleteBtnClicked);
    btn.addEventListener("click", deleteBtnClicked);
  });
}

/**
 * Allows only one character (emojis, letters, numbers or symbols)
 * @param {PointerEvent} e On change event
 * @param {HTMLInputElement} input Element that changed
 * @returns {void}
 */
function addDigitInputValidation(e) {
  digitInput = e.target;

  if (/^[\p{Any}]$/u.test(digitInput.value) || !digitInput.value) {
    return
  }

  digitInput.value = digitInput.value[0];
}

/**
 * Makes the conversion of a number from decimal to the numeric system created
 * @param {Number} numSystem Number to convert
 * @returns {String}
 */
function convertDecimalToSystem(numDecimal) {
  let result = [];
  let i = 0;

  if (numDecimal == 0) {
    return digits[0];
  }

  if (base == 1) {
    return digits[0].repeat(numDecimal);
  }

  while (base ** i <= numDecimal) {
    i++;
  }

  while (i > 0) {
    i--;

    let j = 0;
    while ((base ** i) * j <= numDecimal) {
      j++;
    }
    j--;

    result[i] = digits[j];
    numDecimal -= (base ** i) * j;
  }

  return result.reverse().join("");
}

/**
 * Makes the conversion of a number from the numeric system created to decimal
 * @param {String} numSystem Number to convert
 * @returns {String}
 */
function convertSystemToDecimal(numSystem) {
  if (base == 1) {
    return numSystem.match(/[\p{Any}]/ug).length;
  }

  return numSystem
    .split("")
    .reverse()
    .map((digit, i) => base ** i * digits.indexOf(digit))
    .reduce((a, b) => a + b);
}