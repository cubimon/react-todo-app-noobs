import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import TodoList from './components/TodoList'

function App() {
  //StateHook für ToDo Liste zum rerendern
  const [todos, setTodos] = useState([])


  //RefHook zum referenzieren von input inhalten
  const todoNameRef = useRef()

  const LOCAL_STORAGE_KEY = 'todoApp.todos'

  //Speichern von Todos im Localstorage
  //wenn todos gespeichert, dann setzen
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  //wenn todos sich ändern, dann speichern
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  //Checkbox umschlaten von nicht erledigt zu erledigt
  function umschaltenTodo(id) {
    const newTodos = [...todos]
    //finde todo mit der gleichen id
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  //Event zum Hinzufügen von Todo
  function handleAddTodo(e) {
    const ZUFALLSID = Math.floor(Math.random() * 100)
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(currentState => {
      //erzeugen von todo, spread zum abgleichen
      return [...currentState, { id: ZUFALLSID, name: name, complete: false }]
    })
    //Input leeren nach dem adden
    todoNameRef.current.value = null
  }

  //Erledigte Todos löschen 
  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  //Hier soll eine Funktion erstellt werden, die input eingabe saved oder so
  function submitEdit(id){
    
   
  }

  //Löschen von Todo
  function deleteTodo(id) {
    const newTodos = [...todos].filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <>
    <h1>Deine Aufgaben</h1>
      <input ref={todoNameRef} type="text" className='todo' />
      <button onClick={handleAddTodo}>Add</button>
      <hr/>
      <TodoList 
        todos={todos} 
        umschaltenTodo={umschaltenTodo} 
        deleteTodo={deleteTodo}
        submitEdit={submitEdit}
  
      />
      <hr/>
      {/*anzeigen wie viele nicht erledigt sind */}
      <div className='anzeige'>{todos.filter(todo => !todo.complete).length} are left</div>
      <button onClick={handleClearTodos}>Clear Done</button>
    </>
  )
 
}

export default App;