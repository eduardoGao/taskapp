import React, { useState } from 'react'

export function CreateTask({ addNewTask }) {
  const [newTask, setNewTask] = useState("")

  const handleTask = (event) => {
    setNewTask(event.target.value)
  }

  const handleNewTask = () => {
    //console.log(newTask)
    addNewTask(newTask)
    setNewTask("")
  }

  return(
    <div>
      <input
        type="text"
        placeholder="Agrega una nueva tarea"
        value={newTask}
        onChange={handleTask}
      />
      <button onClick={handleNewTask}>Agregar</button>
    </div>
  )
}