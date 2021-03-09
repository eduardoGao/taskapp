import React from "react";
import "./styles/Tables.css";

export function TaskRow({ tasks, toggleTask, deleteTask }) {
  return (
    <>
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
        <td>
          <div className="deleteButton" onClick={() => deleteTask(tasks)}>
            -
          </div>
        </td>
      </tr>
    </>
  );
}
