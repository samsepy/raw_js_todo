var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0];
var taskList = document.getElementById("current_task");

var addTask = function() {
    var task = document.createElement("li");
    var label = document.createElement("label");
    label.innerText = taskInput.value;
    task.appendChild(label)
    taskList.appendChild(task);
}

addButton.onclick=addTask;