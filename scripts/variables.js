/**
 * Form with all the numeric systems base and digits
 * @type {HTMLFormElement}
 */
let formNumSys = document.getElementById("numericSystemCreator");

/**
 * The numeric base in use. It has the same value than `inputBase.value`
 * @type {Number}
 */
let base = 2;

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
 * Contains all the labels for digit inputs
 * @type {HTMLLabelElement[]}
 */
let labelsDigits = Array.from(document.getElementsByClassName("label-digit"));

/**
 * Contains all the digit inputs
 * @type {HTMLInputElement[]}
 */
let inputsDigits = Array.from(document.getElementsByClassName("digits"));

/**
 * Contains all the buttons for delete digit inputs
 * @type {HTMLButtonElement[]}
 */
let btnsDeleteDigit = Array.from(document.getElementsByClassName("btn-delete-digit"));

/**
 * Number used to count every time the base is added by 1, it doesn't decrease
 * @type {Number}
 */
let auxNumber = base;

/**
 * Array with all the digits of the current numeric system
 * @type {String[]}
 */
let digits = [];

/**
 * Array with the titles that show the current numeric base
 * @type {HTMLSpanElement[]}
 */
let titleBase = Array.from(document.getElementsByClassName("title-base"));

/**
 * Array with the title, label, input, button and result of the calculator from decimal to generated system
 * @type {HTMLElement[]}
 */
let calDecimalToSystem = document.getElementById("cal-dec-to-sys").children;

/**
 * Array with the title, label, input, button and result of the calculator from generated system to decimal
 * @type {HTMLElement[]}
 */
let calSystemToDecimal = document.getElementById("cal-sys-to-dec").children;