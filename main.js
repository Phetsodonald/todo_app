const addBtn = document.querySelector(".add-btn");
const resetBtn = document.querySelector(".reset-btn");
const taskInput = document.querySelector(".task-input");
const tasksContainer = document.querySelector(".tasks-container");
const update = document.querySelector(".update-task");

function saveToLocalstorage(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];



function resetList(){
    localStorage.clear();
    tasksContainer.innerHTML = "";
    tasks = [];
    saveToLocalstorage();
}

function generateTask(){
    let taskhtml = "";
    const date = new Date().toDateString()
    console.log(date)
    for(let i = 0; i < tasks.length; i++){
        taskhtml += `
            <div class="task">
                <p>${tasks[i]}</p>
                <div>${date}</div>
                <div class="mod-btn">
                    <button class="delete-btn" data-index="${i}">delete</button>
                </div>
            </div>
        `
    }
    tasksContainer.innerHTML = taskhtml;
}


function pushTask(){
    if(taskInput.value.length === 0)return;
    const task = taskInput.value.trim();
    tasks.push(task);
    saveToLocalstorage();
    taskInput.value = "";
    generateTask();
}



function deleteTask(taskIndex,event){
    tasks.splice(taskIndex,1);
    event.target.closest(".task").remove();
    saveToLocalstorage();
    generateTask();
}




document.addEventListener("click",(event)=>{
    if(event.target.classList.contains("add-btn")){
        pushTask();
    }else if(event.target.classList.contains("reset-btn")){
        resetList();
    }else if(event.target.classList.contains("delete-btn")){
        const taskIndex = event.target.dataset.index;
        deleteTask(taskIndex,event);
    }else if(event.target.classList.contains("update-btn")){
        
    }
})

generateTask();