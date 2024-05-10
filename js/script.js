// Declarações-------------
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('.todo-list');
const editForm = document.querySelector('#edit-form');
const editInput = document.querySelector('#edit-input');
const cancelEditBtn = document.querySelector('#cancel-edit-btn');
const addButton = document.querySelector('#addButton');
const todoDiv = document.querySelector('.todo')
const btnVoltar = document.querySelector('.btnVoltar')

let oldInputValue;

// Eventos----------------
addButton.addEventListener('click', function(e){

    e.preventDefault()
    todoInputValue = todoInput.value

    if(todoInputValue ==='' ){
        alert('Preencha o campo')
    } else{
        newTodo(todoInputValue)
        var examples1 = document.querySelector('.examples1').style.display = "none";
        var examples2 = document.querySelector('.examples2').style.display = "none";
    }
    
})

document.onclick = function(e){
    const targetElement = e.target;
    const parentEl = targetElement.closest('.todo');
    let todoTitle;

    if(parentEl && parentEl.querySelector("h3")){
        todoTitle = parentEl.querySelector("h3").innerText;
    }
    
    //Finalizar
    if(targetElement.classList.contains('finish-todo')){
        parentEl.classList.toggle('done')
    }
    
    //editar
    if(targetElement.classList.contains('edit-todo')) {
        toggleForms();

        editInput.value = todoTitle
        oldInputValue = todoTitle
    }

    //remover
    if(targetElement.classList.contains('remove-todo')){
        parentEl.remove();
    }
}

cancelEditBtn.addEventListener('click', function(e){
    e.preventDefault()
    toggleForms()
})

editForm.addEventListener('submit', function(e){
    e.preventDefault();

    const editInputValue = editInput.value

    if(editInputValue){
        updateTodo(editInputValue)
    }
    toggleForms()
})

btnVoltar.addEventListener("click", function(){
    location.href = "https://central-ferramentas.vercel.app"
})


// Funções---------------------
function newTodo(text){
    const todo = document.createElement('div');
    todo.classList.add('todo')

    const todoTitle = document.createElement('h3');
    todoTitle.innerHTML = text
    todo.appendChild(todoTitle)
    

    const buttons = document.createElement('div');
    buttons.classList.add('buttons')
    todo.appendChild(buttons)

    const finishButton = document.createElement('button');
    finishButton.classList.add('finish-todo')
    finishButton.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    buttons.appendChild(finishButton)

    const editButton = document.createElement('button');
    editButton.classList.add('edit-todo')
    editButton.innerHTML = '<i class="fa-solid fa-pen"></i>'
    buttons.appendChild(editButton)

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-todo')
    removeButton.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    buttons.appendChild(removeButton)

    todoList.appendChild(todo)
    todoInput.value = ''
    todoInput.focus()
}

 function toggleForms(){
    editForm.classList.toggle('hide')
    todoForm.classList.toggle('hide')
    todoList.classList.toggle('hide')
}

const updateTodo = (text) =>{
    const todos = document.querySelectorAll('.todo')

    todos.forEach((todo) => {

        let todoTitle = todo.querySelector("h3")

        if(todoTitle.innerText === oldInputValue){
            todoTitle.innerText = text
        }
    })
}