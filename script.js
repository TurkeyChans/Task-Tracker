// script.js
// Section 1: TODOs
// TODO: Register submissions from the user on the form.
// TODO: Determine the value of the data submitted and add it to a JavaScript array calle
// TODO: Call the render function to update the table with the new tasks.
// Section 2: App State Variables
let tasks = [];
let id_save = 0;
// Section 3: Cached Element References
const taskForm = document.getElementById("taskForm");
const taskTable = document.getElementById("taskTable");
console.log("ID = " + taskForm);
console.log("ID = " + taskTable);
// Function to handle form submissions
function handleSubmission(event) {
    event.preventDefault();
    // TODO: Get form input values
    const taskName = document.getElementById('taskName').value
    const taskDescription = document.getElementById('taskDescription').value
    const taskDeadline = document.getElementById('taskDeadline').value
    // TODO: Validate input fields
    if(taskName == "" || taskDescription == "" || taskDeadline == "") {
        alert('Task name and deadline are required!');
    }
    else {
        // TODO: Update the tasks array
        tasks.push({name: taskName, description: taskDescription, deadline: taskDeadline})
        render();
    }
    
}
// Function to render tasks in the table
function render() {
    // TODO: Use array methods to create a new table row of data for each item in the arr
    id_save = 0;
    taskTable.innerHTML = tasks.map(task => `
        <tr id=id_${id_save++}>
            <td><h5>Name: ${task.name}</h5></td>
            <td><h5>Description: ${task.description}</h5></td>
            <td><h5>Deadline: ${task.deadline}</h5></td>
            <td><button onclick="markTaskComplete(${id_save})">Complete</button></td>
            <td><button onclick="removeTask(${id_save})">Remove</button></td>
        </tr>
    `).join('');
   
}
// Function to initialize the table
function init() {
    taskTable.innerHTML = ''; // Clear the table
    tasks = []; // Reset the tasks array
    id_save = 0;
    render(); // Call the render function
}
function markTaskComplete(num) {
    num--;
    const row = document.getElementById("id_" + num);
    const img = document.createElement('img');
    img.src = 'check.jpg';
    img.style.height = '50px';
    row.appendChild(img);
}

function removeTask(num) {
    num--;
    document.getElementById("id_" +num).remove();
}
taskForm.addEventListener('submit', handleSubmission);
// Call the init function to set up the initial state of the app
init();