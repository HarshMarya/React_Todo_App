import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo.jsx'
import EditTodoForm from './EditTodoForm.jsx'
import { v4 as uuidv4 } from 'uuid'
uuidv4();

const TodoWrapper = () => {

  const [todos, setTodos] = useState([])
  function addTodo(todo) {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
  }

  function toggleComplete(id) {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function editTodo(id) {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
  }

  function editTask(task, id) {
    setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
  }

  return (
    <div className='TodoWrapper'>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo}/>
        ) : (
          <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      ))}

    </div>
  )
}

export default TodoWrapper
