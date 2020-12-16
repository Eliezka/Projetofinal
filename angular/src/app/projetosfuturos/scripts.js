//function clickedButtom() {
  //  console.log('O botao foi clicado');
//}

//function addNewTask() {
 //   let input = document.querySelector('#newTask');
//    let taskList = document.querySelector('#taskList');

 //   let newTask = input.value;
 //   input.value = '';

  //  let listItem = document.createElement('li');
 //   listItem.textContent = newTask;

 //   taskList.appendChild(listItem);
//}

//document.querySelector('#btnAddTask').addEventListener('click', addNewTask)

// forms
// listas
// marcação de itens na lista (to-do feito)
// requisições

// https://jsonplaceholder.typicode.com/
// To-do
// V listar as tarefas (listagem)
// - criação de tarefas (form)
// - tarefas completas


let tarefasEl = document.querySelector("#todos");

/*
  Preenche a lista de tarefas no documento
   com um elemento para cada tarefa da lista
*/


function addListItem(tarefa) {
  let item = document.createElement("li");

  item.dataset["task"] = tarefa.id;

  let check = document.createElement("input");
  check.type = "checkbox";
  check.checked = tarefa.completed;

  let task = document.createElement("span");
  task.textContent = tarefa.title;

  item.appendChild(check);
  item.appendChild(task);

  tarefasEl.appendChild(item);
}

let formEl = document.querySelector("#form-add-task");
// console.log(formEl)

formEl.addEventListener("submit", function (event) {
  event.preventDefault();
  // console.log(event);
  //let form = event.target;
  let formData = new FormData(event.target);

  console.log(formData.get("task"));

  let task = {
    userId: 1,
    title: formData.get("task"),
    completed: false
  };

  
  // console.log(formData.get("color"));
});