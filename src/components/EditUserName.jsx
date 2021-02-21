import React, { useState } from 'react'
import "./styles/CreateTask.css"

export function EditUserName({ addName, handleDrop }) {
  const [name, setName] = useState("")



  const handleName = (event) => {
    setName(event.target.value)
  }

  const handleAddName = () => {
    addName(name)
    handleDrop()
  }

  return (
    <>
      <label>Edita tu nombre</label>
      <div className="input">
        <input type="text" value={name} onChange={handleName} />
        <button onClick={handleAddName}>Agregar</button>
      </div>
    </>
  )
}
