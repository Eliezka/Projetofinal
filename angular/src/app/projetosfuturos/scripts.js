function clickedButtom() {
    console.log('O botao foi clicado');
}

function addNewTask() {
    let input = document.querySelector('#newTask');
    let taskList = document.querySelector('#taskList');

    let newTask = input.value;
    input.value = '';

    let listItem = document.createElement('li');
    listItem.textContent = newTask;

    taskList.appendChild(listItem);
}

document.querySelector('#btnAddTask').addEventListener('click', addNewTask)