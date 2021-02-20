import React from 'react'
import "./styles/Header.css"

export function Header({ user, taskPending }) {
  const time = new Date()
  const date = time.toDateString("DD MM")

  return(
    <header className="header">
      <div className="header__wrapper">
        <p>{date}</p>
        <h1>Task</h1>
        <h3>Hey {user}, tienes {taskPending.filter(task => !task.done).length} tareas pendientes</h3>
      </div>
    </header>
  )
}