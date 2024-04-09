import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {

  const [value, setValue] = useState("")

  function handleChange(e) {
    setValue(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    addTodo(value)
    setValue("")
  }

  return (
    <form className='' onSubmit={handleSubmit}>
      <input type='text' placeholder="what is today's Task?"
       value={value} className='todo-input' onChange={handleChange}/>
      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default TodoForm
