const listDOM = document.querySelector('#list');
const inputDOM = document.querySelector('#task');

document.addEventListener("DOMContentLoaded", getTodos);
listDOM.addEventListener("click", deleteElement);
listDOM.addEventListener("click", completed);


function newElement() {

    if (inputDOM.value == "") {
        $('#liveToastError').toast('show');
        return false;
    } else {
        const li = document.createElement('li');
        li.innerHTML = inputDOM.value;
        listDOM.appendChild(li);

        saveToLocal(inputDOM.value);
        $('#liveToastAdd').toast('show');

        inputDOM.value = "";

        const closeButton = document.createElement('button');
        closeButton.innerHTML = '<i class="bi bi-x-lg"></i>';
        closeButton.classList.add('close');
        li.appendChild(closeButton);
    }
}

function deleteElement(e) {
    const item = e.target;
    if (item.parentElement.classList[0] === "close") {
        const todo = item.parentElement.parentElement;
        todo.remove();
        removeFromLocal(todo);

    }
}

function saveToLocal(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function removeFromLocal(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const indexTodo = todos.indexOf(todo.innerText);
    todos.splice(indexTodo, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.forEach(todo => {
        const li = document.createElement('li');
        li.innerHTML = todo;
        listDOM.appendChild(li);
        inputDOM.value = "";
        const closeButton = document.createElement('button');
        closeButton.innerHTML = '<i class="bi bi-x-lg"></i>';
        closeButton.classList.add('close');
        li.appendChild(closeButton);

    })
}

function completed(e) {
    const item = e.target;
    item.classList.toggle('checked');
}