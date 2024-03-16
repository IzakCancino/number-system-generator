/**
 * Div with all the *digits selectors* in the generator
 * @type {HTMLDivElement}
 */
let divGenDigits = document.getElementById("gen-digits");

/**
 * Numeric input with the numeric base selected
 * @type {HTMLInputElement}
 */
let inputBase = document.getElementById("base");

/**
 * Form with all the numeric systems base and digits
 * @type {HTMLFormElement}
 */
let formNumSys = document.getElementById("numericSystemCreator");

/**
 * Contains all the buttons for delete digit inputs
 * @type {HTMLButtonElement[]}
 */
let btnsDeleteDigit = Array.from(document.getElementsByClassName("btn-delete-digit"));

/**
 * The numeric base in use. It has the same value than `inputBase.value`
 * @type {Number}
 */
let base = 2;

let auxNumber = base;


btnsDeleteDigit = Array.from(document.getElementsByClassName("btn-delete-digit"));

btnsDeleteDigit.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    btn.parentElement.remove();
    btnsDeleteDigit.splice(i, 1);
    inputBase = base
  });
});

console.log(btnsDeleteDigit);

// Detect when a delete button, in a numeric digit, is pressed
// function updateDeleteDigitBtns() {
//   let btnsDeleteDigit = Array.from(document.getElementsByClassName("btn-delete-digit"));
//   console.log(btnsDeleteDigit);
//   btnsDeleteDigit.forEach((btn, i) => {
//     btn.addEventListener("click", (btn, i) => {
//       btn.parentElement.remove();
//       btnsDeleteDigit.splice(i, 1);
//       console.log(i);
//     });
//   });
// }
// updateDeleteDigitBtns();

// Detect when the selected numeric base in `inputBase` changes
inputBase.addEventListener("change", () => {
  console.log("change");
  if (base > inputBase.value) {
    // The base decreased. Remove the number selected of digits selector 

    while (base > inputBase.value) {
      base--;
      divGenDigits.removeChild(divGenDigits.lastElementChild);
    }

  } else if (base < inputBase.value) {
    // The base increased. Add the number selected of digits selector 
    while (base < inputBase.value) {
      base++;
      auxNumber++;

      let templateGenDigits = document.createElement("div");
      templateGenDigits.innerHTML = `
              <div data-digit-num="${auxNumber}">
                <label for="digit-${auxNumber}">Digit #${base}</label>
                <input type="text" name="digit-${auxNumber}" class="digits" maxlength="1" required>
                <button type="button" class="btn-delete-digit">Delete</button>
              </div>
              `;
      divGenDigits.append(templateGenDigits);
    }
  }

  btnsDeleteDigit = Array.from(document.getElementsByClassName("btn-delete-digit"));


  btnsDeleteDigit.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      btn.parentElement.remove();
      btnsDeleteDigit.splice(i, 1);
    });
  });

  console.log(btnsDeleteDigit);
});

formNumSys.addEventListener("submit", e => {
  e.preventDefault();

  console.log();

  // HACER QUE CREE EL SISTEMA
  // divGenDigits.children
  divGenDigits.child
})