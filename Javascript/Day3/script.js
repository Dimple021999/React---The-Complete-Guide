const form = document.querySelector(".form-todo");
const inputText = document.querySelector(".form-todo input[type='text'");
const todo_list = document.querySelector(".todo-list")//ul


form.addEventListener('submit',function(e){
    e.preventDefault();
    const newTodo=inputText.value;
    const newLi=document.createElement("li")
    const liContent=
    `<span class="text">${newTodo}</span>
    <div class="todo-buttons">
        <button class="todo-btn done">DONE</button>
        <button class="todo-btn remove">REMOVE</button>
    </div>`
    newLi.innerHTML=liContent;
    todo_list.append(newLi);
    inputText.value="";
})

todo_list.addEventListener('click',function(e){
    const spanText=e.target.parentNode.previousElementSibling;
    if(e.target.classList.contains("remove")){
       spanText.parentNode.remove()
    }
    if(e.target.classList.contains("done")){
        spanText.style.textDecoration="line-through";
        
    }
})
