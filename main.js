class TodoList {
    constructor() {
        this.taskInput = document.getElementById("new-task");
        this.incrementalInput = document.getElementById("task-incremental-search")
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
        this.viewTasks(this.todos);
    }
    viewTasks(current_todos) {
      var todoList = [];
      current_todos.map(todo => (
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
      this.viewTasks(this.todos);
    }
    // TODO: タスク削除機能
    deleteTask(todo_elm) {
      console.log(todo_elm.id);
      var newData = null;
      newData = this.todos.filter(function(item, _) {
        if(item.id != todo_elm.id) return true;
      });
      this.todos = newData;
      this.viewTasks(this.todos);
      this.incrementalSearch();
    }
    setId() {
      var lastId = this.todos.slice(-1)[0].id;
      return lastId + 1;
    }
    // TODO: インクリメンタルサーチ
    incrementalSearch() {
      console.log("input text");
      console.log(this.incrementalInput.value);
      var wordFlagment = this.incrementalInput.value;
      var searchedTodos = this.todos.filter(function(item, _) {
        if(item.desc.slice(0, wordFlagment.length) == wordFlagment) return true;
      });
      this.viewTasks(searchedTodos);
      console.log(searchedTodos);
    }
}

let todo;
window.addEventListener("load", () => {
  todo = new TodoList();
});
