import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import './App.css';
import NavBar from './NavBar'


const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const randomId = Math.floor(1000 + Math.random() * 9000);

  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef()

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodo => {
      return [...prevTodo, { id: randomId, name: name, complete: false }]
    })
    todoNameRef.current.value = null
  }

  useEffect(() => {
    const storedTodo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodo) setTodos(storedTodo)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleClear() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
      <NavBar />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClear}>Clear Completed</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do </div>
    </>

  );
}

export default App;
