class TodoList {
    constructor() {
        this.taskInput = document.getElementById("new-task");
        this.addButton = document.getElementsByTagName("button")[0];
        this.taskList = document.getElementById("current_task");
        this.todos = [
            {
              id: 1,
              desc: "todo1",
              done: false
            },
            {
              id: 2,
              desc: "todo2",
              done: false
            },
            {
              id: 3,
              desc: "todo3",
              done: false
            }
        ]
        this.viewTasks();
    }
    viewTasks() {
      var todoList = [];
      this.todos.map(todo => (
          todoList.push(`<li>${todo.desc}</li>`)
      ));
      this.taskList.innerHTML = todoList.join('');
    }
    
    addTask() {
      this.todos.push({ 
        id: 1,
        desc: this.taskInput.value,
        done: "false"
      });
      this.viewTasks();
    }
}

let todo;
window.addEventListener("load", () => {
  todo = new TodoList();
});
