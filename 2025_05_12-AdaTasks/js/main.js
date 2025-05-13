"use strict";

/* CHULETA
Coger datos de localStorage
const tasksLocalStorage = JSON.parse(localStorage.getItem("nombre de mis datos"));

Guardar datos en localStorage
localStorage.setItem("nombre de mis datos", JSON.stringify("datos que quiero guardar"));


fetch(SERVER_URL)
  .then((response) => response.json())
  .then((data) => {
    console.log("data", data);
  });

*/

const list = document.querySelector(".js-task-list");
const searchBtn = document.querySelector(".js-btn-filter");
const searchInput = document.querySelector(".js-text-task-filter");
const paragraphTasks = document.querySelector(".js-task-paragraph");
const btnAdd = document.querySelector(".js-btn-add");
const newTaskInput = document.querySelector(".js-text-task-add");

const tasksLocalStorage = JSON.parse(localStorage.getItem("tasks"));

const GITHUB_USER = "Nuria8890c";
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;

let tasks = [];
const contingTasks = (tasksToCount) => {
  const allTasks = tasksToCount.length;
  // console.log("allTasks", allTasks);
  const completedTasks = tasksToCount.filter((task) => task.completed).length;
  // console.log("completedTasks", completedTasks);
  const tasksAhead = allTasks - completedTasks;
  // console.log("tasksAhead", tasksAhead);
  // console.log("tasksAhead", tasksAhead);
  paragraphTasks.innerHTML = `Tienes ${allTasks} tareas. ${completedTasks} completadas y ${tasksAhead} por realizar`;
};

const renderList = (tasksToRender) => {
  list.innerHTML = "";
  for (const task of tasksToRender) {
    console.log("task", task);
    // pintar la tarea en la lista
    if (task.completed === true) {
      list.innerHTML += `<li class="tachado"> <input type="checkbox" checked id="${task.id}"/>${task.name}</li>`;
    } else {
      list.innerHTML += `<li><input type="checkbox" id="${task.id}"/>${task.name}</li>`;
    }
  }
  contingTasks(tasksToRender);
};

if (tasksLocalStorage !== null) {
  console.log("tasksLocalStorage", tasksLocalStorage);
  tasks = tasksLocalStorage;
  renderList(tasks);
} else {
  fetch(SERVER_URL)
    .then((response) => response.json())
    .then((data) => {
      console.log("data", data);
      //Guarda la respuesta obtenida en la variable para el listado de tareas: `tasks`
      tasks = data.results;
      //guarda el listado obtenido en el Local Storage
      localStorage.setItem("tasks", JSON.stringify(tasks));
      // Pintar el listado en el HTML.
      renderList(tasks);
    })
    .catch((error) => {
      console.error(error);
    });
}

// renderList(tasks);

const handleClickList = (event) => {
  // console.log("hago click");
  // console.log("event.target.id", event.target.id);

  const taskId = parseInt(event.target.id); // Obtengo el id del checkbox clickado por la usuaria
  if (!taskId) return; // Si no ha pulsado en el checkbox, no queremos hacer nada y salimos de la función

  // Busca la tarea que tenga el id `taskId` en el array `tasks`
  const clickedTasks = tasks.find((task) => taskId === task.id);
  // console.log("clickedTasks", clickedTasks);

  // Una vez que has obtenido la tarea, actualiza la propiedad `completed`
  clickedTasks.completed = !clickedTasks.completed;
  // console.log("clickedTasks.completed", clickedTasks.completed);

  // Pinta de nuevo las tareas en el html
  renderList(tasks);
};

const handleClickSearch = (event) => {
  event.preventDefault();
  // console.log("buscar");
  // Obtén el valor del input de filtrar.
  const searchValue = searchInput.value;

  console.log("searchValue", searchValue);

  // Filtra las tareas que coinciden con el valor introducido por el usuario.
  const taskSearched = tasks.filter((task) => {
    return task.name
      .toLowerCase()
      .trim()
      .includes(searchValue.toLowerCase().trim());
  });
  // console.log("taskSearched", taskSearched);

  // Vuelve a pintar las tareas, esta vez utilizando el listado filtrado.
  renderList(taskSearched);
};

const handleClickAdd = (event) => {
  event.preventDefault();
  // console.log("click");

  // 1. Recoge el nombre de la tarea
  const newTaskValue = newTaskInput.value;
  // console.log("newTaskValue", newTaskValue);

  // 2. Crea un objeto para la nueva tarea
  /* Conseguir un nuevo id
- conseguir el último elemento del listado de tareas
- conseguir el id de ese elemento
- sumar 1 a ese id
*/

  const lastElementTasks = tasks.slice(-1)[0];
  // console.log("lastElementTasks", lastElementTasks);

  const lastElementId = lastElementTasks.id;
  // console.log("lastElementId", lastElementId);

  const newTaskId = lastElementId + 1;
  // console.log("newTaskId", newTaskId);

  const newTask = {
    id: newTaskId,
    name: newTaskValue, // sustituye este string vacío por el nombre de la tarea nueva
    completed: false,
  };
  // console.log("newTask", newTask);

  // 3. Añade la nueva tarea al array de tareas
  tasks.push(newTask);
  // guardo el nuevo listado en localStorage
  localStorage.setItem("tasks", JSON.stringify(tasks));
  // 4. Vuelve a pintar las tareas
  renderList(tasks);
};

list.addEventListener("click", handleClickList);
searchBtn.addEventListener("click", handleClickSearch);
btnAdd.addEventListener("click", handleClickAdd);
