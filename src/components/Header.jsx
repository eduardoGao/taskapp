import React from 'react'

export function Header({ user, taskPending }) {
  return(
    <header>
      <h1>Task</h1>
      <h3>Hey {user}, tienes {taskPending.filter(task => !task.done).length} tareas pendientes</h3>
    </header>
  )
}