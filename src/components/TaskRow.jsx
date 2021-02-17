import React from 'react'

export function TaskRow({ tasks, toggleTask }) {
  return(
    <tr key={tasks.name}>
      <td>{tasks.name}</td>
      <td>
        <input
          type="checkbox" 
          checked={tasks.done} 
          onChange={() => toggleTask(tasks)}
          />
      </td>
    </tr>
  )
}