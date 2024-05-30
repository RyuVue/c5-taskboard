// Retrieve tasks and nextId from localStorage
const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
const nextId = JSON.parse(localStorage.getItem("nextId"));


// html elements
const saveChangeBtn = document.getElementById('saveChangeBtn');
const modalTaskTitle = document.getElementById('modalTaskTitle');
const modalDatePicker = document.getElementById('modalDatePicker');
const modalTaskDescription = document.getElementById('modalTaskDescription');
const todoCards = document.getElementById('todo-cards')

 const renderDatePicker = function () {
    $( "#modalDatePicker" ).datepicker();
};


// Todo: create a function to generate a unique task id
function generateTaskId() {
    return Math.floor(Math.random() * 100)
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    postElement.innerHTML = `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${task.title}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${task.dueDate}</h6>
    <p class="card-text">${task.description}</p>
  </div>
</div>`;
todoCards.appendChild(postElement);
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
        const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
        console.log(taskList, 'testing')
    }

// Todo: create a function to handle adding a new task
function saveTaskToLocalStorage(task) {
    taskList.push(task);
    localStorage.setItem('tasks', JSON.stringify(taskList));
}
function handleAddTask(event){
    event.preventDefault();
    const id = generateTaskId()
    const title = modalTaskTitle.value;
    const dueDate = modalDatePicker.value;
    const description = modalTaskDescription.value;

    const task = {}
    task.id = id
    task.title = title
    task.dueDate = dueDate
    task.description = description
    saveTaskToLocalStorage(task)
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
    
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    renderDatePicker();
    saveChangeBtn.addEventListener("click", function (event) {
        handleAddTask(event)
      });
      renderTaskList()
});

