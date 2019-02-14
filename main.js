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
      this.todos.push({ 
        id: this.setId(), // IDを割り振る関数を呼び出す
        desc: this.taskInput.value,
        done: "false"
      });
      this.viewTasks();
    }
    // TODO: タスク削除機能
    deleteTask(todo_elm) {
      console.log(todo_elm.id);
      var newData = null;
      newData = this.todos.filter(function(item, _) {
        if(item.id != todo_elm.id) return true;
      });
      this.todos = newData;
      this.viewTasks();
    }
    setId() {
      var lastId = this.todos.slice(-1)[0].id;
      return lastId + 1;
    }
}

let todo;
window.addEventListener("load", () => {
  todo = new TodoList();
});
