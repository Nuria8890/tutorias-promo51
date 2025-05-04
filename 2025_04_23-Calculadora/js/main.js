"use strict";
/*
Recoger los elementos del html:
- los dos input
- select
- botón
- h3 resultado

Cuando la usuaria haga click en calcular
  - recojo los valores de los inputs
  - recoger el valor del select
    - si el operador es +
        - sumo
    - si el operador el -
        - resto
    - si el operador el *
        - multiplico
    - si el operador el /
        - divido  
  - pinto el resultado de la operación
*/

const num1Input = document.querySelector(".js-number1");
const num2Input = document.querySelector(".js-number2");
const operator = document.querySelector(".js-operator");
const button = document.querySelector(".js-button");
const resultCalculator = document.querySelector(".js-result");

const handleClick = (event) => {
  event.preventDefault();
  const num1 = parseInt(num1Input.value);
  const num2 = parseInt(num2Input.value);
  const operatorValue = operator.value;
  let result;
  if (operatorValue === "sumar") {
    result = num1 + num2;
  } else if (operatorValue === "restar") {
    result = num1 - num2;
  } else if (operatorValue === "multiplicar") {
    result = num1 * num2;
  } else if (operatorValue === "dividir") {
    result = num1 / num2;
  }

  resultCalculator.innerHTML = `El resultado es ${result}`;
};
button.addEventListener("click", handleClick);
