const addBtn = document.querySelector(".add-btn");
const taskInput = document.querySelector(".task-input");
const tasksContainer = document.querySelector(".tasks-container");
const tasks = [];

// Enable/Disable button based on input
taskInput.addEventListener("input", () => {
    taskInput.value.length === 0 ? addBtn.disabled = true : addBtn.disabled = false;
});

addBtn.addEventListener("click", () => {
    pushTask();
});

function pushTask() {
    if (taskInput.value.trim() === "") return; // Prevent empty tasks
    tasks.push(taskInput.value.trim());
    taskInput.value = "";
    addBtn.disabled = true; // Disable button after adding a task
    generateTask();
}

function generateTask() {
    let taskhtml = '';
    tasks.forEach((task) => {
        taskhtml += `
            <div class="task">
                <p>${task}</p>
                <div class="task-btns">
                    <button class="update-btn">update</button>
                    <button class="delete-btn">delete</button>
                </div>
            </div>`;
    });
    tasksContainer.innerHTML = taskhtml; // Update the container correctly
}
