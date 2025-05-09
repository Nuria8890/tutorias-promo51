"use strict";

// console.log("soy js");

/*PASOS EN HUMANO

1. Recoger los valores del HTML
  - La carita
  - Select
  - Botón
  - Contenedor

2. Cuando la usuaria haga click en update (botón)
  - Recoger el valor del select
    - Pintar la carita en el html
  
  - Generar el número aleatorio
    - Si es par
      - pinto en amarillo
    - Si es impar
      - pinto en naranja
*/

const face = document.querySelector(".js-face");
const select = document.querySelector(".js-select");
const updateButton = document.querySelector(".js-update");
const container = document.querySelector(".js-container");

// declaro la función
const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const handleClick = (event) => {
  event.preventDefault();
  // console.log("he hecho click");

  // Pintar la carita
  const selectValue = select.value;
  // console.log(selectValue);
  if (selectValue === "happy") {
    face.innerHTML = ":)";
  } else if (selectValue === "sad") {
    face.innerHTML = ":(";
  }

  // Pintar el color de fondo

  const randomNumber = getRandomInt(100); // ejecuto (llamo) a la función
  console.log("randomNumber: ", randomNumber);

  if (randomNumber % 2 === 0) {
    container.classList.remove("naranjaFuego");
    // document.body.style.backgroundColor = "#ffcc00";
  } else {
    container.classList.add("naranjaFuego");
    // document.body.style.backgroundColor = "#ff9900";
  }

  // const randomNumber5 = getRandomInt(5);
  // console.log("randomNumber5: ", randomNumber5);
};

updateButton.addEventListener("click", handleClick);
