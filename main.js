class TodoList {
    constructor() {
        this.taskInput = document.getElementById("new-task");
        this.addButton = document.getElementsByTagName("button")[0];
        this.taskList = document.getElementById("current_task");
    }
    addTask() {
        var task = document.createElement("li");
        var label = document.createElement("label");
        label.innerText = this.taskInput.value;
        task.appendChild(label)
        this.taskList.appendChild(task);
    }

}

let todo;
window.addEventListener("load", () => {
  todo = new TodoList();
});
