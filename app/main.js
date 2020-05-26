const todos = [
    {
        text: 'Read new book',
        isDone: false,
        id: 0
    },
    {
        text: 'Add new bookmark to list',
        isDone: false,
        id: 1
    },
    {
        text: 'Buy a pet',
        isDone: false,
        id: 2
    },
    {
        text: 'Read ptterns',
        isDone: true,
        id: 3
    }
]

function render(data) {
    const list = document.querySelector('.todos-list');
    list.innerHTML = data.map(todo => {
        const className = todo.isDone ? 'class = "done"' : '';
        return `<li ${className} data-id=${todo.id}>${todo.text}</li>`
    }).join('');
}

function onTodoClick(ev) {
    console.log('click to do', ev.target);
    console.dir(ev.target);

    const id = ev.target.dataset.id;

    todos.forEach(todo => todo.id == id ? todo.isDone = !todo.isDone : null);
    render(todos);
}

function resetTodos() {
    todos.forEach(todo => todo.isDone = false);
    render(todos);
}

function allTodosDone() {
    todos.forEach(todo => todo.isDone = true);
    render(todos);
}

function addTodo() {
    let text = document.querySelector('.form-control');
    console.log('text', text.value);
    console.dir(text);
    let todo = {
        text: text.value,
        isDone: false,
        id: todos.length
    }
    text.value = '';
    todos.push(todo);
    console.log(todos);
    render(todos);
}


document.querySelector('.todos-list').addEventListener('click', onTodoClick);

render(todos);

