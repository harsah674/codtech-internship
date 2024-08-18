// script file of task1 of to do list
// Get elements
const taskList = document.getElementById('task-list');
const addTaskForm = document.getElementById('add-task-form');
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const clearTasksBtn = document.getElementById('clear-tasks-btn');

// Add event listeners
addTaskForm.addEventListener('submit', addTask);
clearTasksBtn.addEventListener('click', clearTasks);

// Add task function
function addTask(e) {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const task = document.createElement('li');
        task.textContent = taskText;
        taskList.appendChild(task);
        taskInput.value = '';
    }
}

// Clear tasks function
function clearTasks() {
    taskList.innerHTML = '';
}

// Edit task function
function editTask(task) {
    const taskText = task.textContent;
    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.value = taskText;
    task.innerHTML = '';
    task.appendChild(editInput);
    editInput.focus();
    editInput.addEventListener('blur', () => {
        task.textContent = editInput.value;
    });
}

// Delete task function
function deleteTask(task) {
    task.remove();
}

// Add event listeners to tasks
taskList.addEventListener('click', (e) =>{
    if (e.target.tagName === 'LI');
} )
