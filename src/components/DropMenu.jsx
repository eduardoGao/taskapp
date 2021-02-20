import React, { useState } from 'react'
import { EditUserName } from "./EditUserName"

import "./styles/DropMenu.css"

export function DropMenu({ addName }) {
  const [active, setActive] = useState(false)

  const handleDrop = () => {
    setActive(!active)
  }

  console.log(active)

  return(
    <>
      <div className="drop" onClick={handleDrop}>
        {!active ? <img src="https://img.icons8.com/material-sharp/24/000000/settings.png"/>
        : <img src="https://img.icons8.com/ios/50/000000/circled-x.png"/>
        }
              
      </div>
      {
        active && <div className="menu"><EditUserName addName={addName}  handleDrop={handleDrop} /></div>
      }
        
    </>
  )
}