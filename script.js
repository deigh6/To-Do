document.getElementById('taskForm').addEventListener('submit', addTask);

let tasks = [];

function addTask(e) {
    e.preventDefault();

    const date = document.getElementById('date').value;
    const taskDescription = document.getElementById('task').value;

    const task = {
        id: Date.now(),
        date: date,
        description: taskDescription
    };

    tasks.push(task);
    displayTasks();
    document.getElementById('taskForm').reset();
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${task.date}</td>
            <td>${task.description}</td>
            <td class="actions">
                <button class="edit" onclick="editTask(${task.id})">Edit</button>
                <button class="delete" onclick="deleteTask(${task.id})">Delete</button>
            </td>
        `;
        taskList.appendChild(row);
    });
}

function editTask(id) {
    const task = tasks.find(task => task.id === id);

    document.getElementById('date').value = task.date;
    document.getElementById('task').value = task.description;

    deleteTask(id);
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    displayTasks();
}
