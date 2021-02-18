import React, { useState } from 'react'

export function EditUserName({ addName }) {
  const [user, setUser] = useState("")

  const handleName = (event) => {
    setUser(event.target.value)
  }

  const handleAddName = () => {
    addName(user)
  }

  return (
    <div>
      <input type="text" value={user} onChange={handleName} />
      <button onClick={handleAddName}>Agregar</button>
    </div>
  )
}
