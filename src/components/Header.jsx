import React, { useEffect, useState } from 'react'
import { DropMenu } from "./DropMenu"

import "./styles/Header.css"

export function Header({ taskPending }) {
  const [userName, setUserName] = useState("")

  // setUserName('User example')

  //handle localStorage
  useEffect(() => {
    let localName = localStorage.getItem('userName')
    if(localName == null) {
      setUserName("Desconocido")
    } else {
      setUserName(JSON.parse(localName))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('userName', JSON.stringify(userName))
  }, [userName])



  const addName = (name) => {
    setUserName(name)
  }

  const time = new Date()
  const date = time.toDateString("DD MM")

  return(
    <header className="header">
      <div className="header__wrapper">
        <p>{date}</p>
        <h1>Task App</h1>
        <h3>Hola {userName} tienes {taskPending.filter(task => !task.done).length} tareas pendientes</h3>
      </div>
      <DropMenu addName={addName} />
    </header>
  )
}