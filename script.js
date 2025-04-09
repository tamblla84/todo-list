console.log("To-Do List khởi động!");

function addTodo() {
    const input = document.getElementById("todo-input").value;
    const list = document.getElementById("todo-list");
    const item = document.createElement("li");
    item.textContent = input;
    list.appendChild(item);
    document.getElementById("todo-input").value = "";
}