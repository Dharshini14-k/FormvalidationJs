 
const taskInput = document.getElementById("taskInput");
const taskContainer = document.querySelector(".tasks");
 
document.getElementById("push").addEventListener("click", addTask);

 
function addTask() {
   
  const taskDescription = taskInput.value.trim();

  if (taskDescription === "") {
     
    return;
  }

  
  const taskElement = document.createElement("div");
  taskElement.className = "task";
  taskElement.textContent = taskDescription;
 
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", () => {
     
    taskContainer.removeChild(taskElement);
  });
 
  taskElement.appendChild(removeButton);
 
  taskContainer.appendChild(taskElement);

 
  taskInput.value = "";
}
