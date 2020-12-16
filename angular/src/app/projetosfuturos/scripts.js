function clickedButtom() {
    console.log('O botao foi clicado');
}

function addNewTask() {
  let input = document.querySelector('#profut');
  let projetosfuturos = document.querySelector('#projetosfuturos');

  let profut = input.value;
   input.value = '';

  let listItem = document.createElement('li');
  listItem.textContent = profut;

   projetosfuturos.appendChild(listItem);
}

document.querySelector('#btnAddTask').addEventListener('click', addNewTask)
