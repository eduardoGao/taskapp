import React from 'react'

export function EditUserName({ value }) {
  const handleName = (event) => {
    setName(event.target.value)
  }

  return (
    <div>
      <input 
        type='text' 
        value={value}
      />
    </div>
  )
}
