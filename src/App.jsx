import React, { useState, useEffect } from 'react'
import { TaskRow } from "./components/TaskRow"
import { Header } from "./components/Header"
import { CreateTask } from "./components/CreateTask"
import { TasksToggle } from "./components/TasksToggle"
import { EditUserName } from "./components/EditUserName"
import "./App.css"

function App() {
  const [userName, setUserName] = useState("")
  const [taskItems, setTaskItems] = useState([])
  const [show, setShow] = useState(true)


  useEffect(() => {
    let local = localStorage.getItem('tasks')
    if(local == null) {
      setTaskItems([
        {name: "task 1 ex", done: true},
        {name: "task 2 ex", done: true},
        {name: "task 3 ex", done: false},
        {name: "task 4 ex", done: false},
        {name: "task 5 ex", done: true},
      ])
      setUserName('User example')
    } else {
      setTaskItems(JSON.parse(local))
      //setUserName('User')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [taskItems])

  const addTask = (newTask) => {
    if(!taskItems.find(task => task.name === newTask)) {
      setTaskItems([
        {name: newTask, done: false},
        ...taskItems
      ]) 
    }
    
  }

  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map(item => (
        item.name === task.name ? {
          ...item,
          done: !item.done
        } : item
      ))
    )
  }

  function taskTableRows(doneValue) {
    return taskItems.filter(task => task.done === doneValue)
      .map((task) => (
        <TaskRow
          tasks={task}
          key={task.name} 
          toggleTask={toggleTask}
        />
        )
      ) 
  }


  const handleShow = () => {
    setShow(!show)
  }

  
  const addName = (name) => {
    setUserName(name)
  }
  

  return(
    <>
      <Header user={userName} taskPending={taskItems} />
      {/* <div>
        <input type="text" value={userName} onChange={handleName} />
      </div> */}
      <EditUserName addName={addName} />
      <CreateTask addNewTask={addTask} />
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {taskTableRows(false)}
        </tbody>
      </table>
      <div>
      <TasksToggle handleShow={handleShow} checked={show} isShow={`${!show ? 'Muéstrame' : 'Ocúltame'} tareas completadas`} />
      {
        show && 
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>
              {taskTableRows(true)}
            </tbody>
          </table>
      }
      </div>
    </>
  )
}

export default App