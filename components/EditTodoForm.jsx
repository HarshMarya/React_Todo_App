import React, {useState} from 'react'

const EditTodoForm = ({editTodo, task}) => {

  const [value, setValue] = useState(task.task)
  function handleChange(e) {
    setValue(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    editTodo(value, task.id)
    setValue("")
  }

  return (
    <form className='' onSubmit={handleSubmit}>
      <input type='text' placeholder="Update Task" value={value} className='todo-input' onChange={handleChange}/>
      <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}

export default EditTodoForm
