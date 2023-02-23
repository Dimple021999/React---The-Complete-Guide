import React, { useState, useEffect } from 'react'
import './App.css';
import Form from './component/Form';
import TodoList from './component/TodoList'

function App() {

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all')
  const [filterTodo, setFilterTodo] = useState([])

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilterTodo(todos.filter(todo => todo.completed))
        break;

      case 'uncompleted':
        setFilterTodo(todos.filter(todo => !todo.completed))
        break;

      default: setFilterTodo(todos)
        break;
    }
  }

 

  const saveLocalTodo=()=>{
    localStorage.setItem('todos',JSON.stringify(todos)) 
  }
  const getLocalTodo=()=>{
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos',JSON.stringify([]))
    }
    else{
      const data=JSON.parse(localStorage.getItem('todos'))
      setTodos(data)

    }
  }
  useEffect(() => {
    filterHandler()
    saveLocalTodo()
  }, [todos, status])

  //Run once
  useEffect(()=>{
    getLocalTodo()
  })
  return (
    <>
      <header>
        <h1>TODO LIST</h1>
      </header>
      <Form
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setStatus={setStatus}
      />

      <TodoList todos={todos}
        setTodos={setTodos}
        filterTodo={filterTodo}
      />
    </>
  );
}

export default App;
