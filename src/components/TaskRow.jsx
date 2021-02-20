import React from 'react'
import "./styles/Tables.css"

export function TaskRow({ tasks, toggleTask }) {
  return(
    <tr key={tasks.name}>
      <td className="row">{tasks.name}</td>
      <td>
        <input
          className="checkbox"
          type="checkbox" 
          checked={tasks.done} 
          onChange={() => toggleTask(tasks)}
          />
      </td>
    </tr>
  )
}