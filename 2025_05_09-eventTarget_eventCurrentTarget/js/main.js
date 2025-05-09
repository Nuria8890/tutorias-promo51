"use strict";
// 1. recogo lo elementos de html
const ul = document.querySelector(".js-list");

// 3. declaro la función manejadora
const handleClick = (event) => {
  // 4. hago los pasitos que quiero ejecutar
  console.log("hago click");
  // event.currentTarget es el elemento al que está asociado el evento
  console.log("event.currentTarget es: ", event.currentTarget);
  // event.target es el propio elemento en sí en el que estoy activando el evento (donde hago click)
  console.log("event.target es: ", event.target);
};

// 2. declaro el evento
ul.addEventListener("click", handleClick);
