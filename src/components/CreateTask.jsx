import React, { useState } from 'react'
import "./styles/CreateTask.css"

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
    <div className="create">
      <details>
        <summary>Agrega una nueva tarea</summary>
        <div className="input">
          <input
            type="text"
            name="newTask"
            placeholder="Agrega una nueva tarea"
            value={newTask}
            onChange={handleTask}
          />
          <button onClick={handleNewTask}>Agregar</button>
        </div>
      </details>
    </div>
  )
}