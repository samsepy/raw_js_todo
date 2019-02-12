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
          todoList.push(`<li id="${todo.id}" onclick="todo.deleteTask(this)">${todo.desc}</li>`)
      ));
      this.taskList.innerHTML = todoList.join('');
    }

    addTask() {
      const elms = document.querySelectorAll('li');
      elms.forEach(elm => {
        // Elementオブジェクト
        console.log(elm);
      });
      this.todos.push({ 
        id: 1,
        desc: this.taskInput.value,
        done: "false"
      });
      this.viewTasks();
    }
    // TODO: タスク削除機能
    deleteTask(todo_elm) {
      console.log(todo_elm.id);
      this.viewTasks();
    }

    
}

let todo;
window.addEventListener("load", () => {
  todo = new TodoList();
});
