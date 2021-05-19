import React, { useState } from 'react'
import '../css/App.css';
import Button from "./Button"
import Entrance from './Entrance';
import Register from './Register';
function RegisterEntrance({ visible, ...props }) {

  const [state, setState] = useState([
    {
      text: "ورود",
      class: "button-entrance",
      id: 0,
      active: "inactive"
    }, {
      text: "ثبت نام",
      class: "button-register",
      id: 1,
      active: "active"

    }
  ])
  const [stateForm, setStateForm] = useState("register")

  const onclickHandel = (buttonId) => {
    for (let i = 0; i < state.length; i++) {
      if (buttonId !== state[i].id) {
        state[i].active = "inactive";
      } else {
        state[i].active = "active";
      }
    }
    if (buttonId == 0) {
      setStateForm("entrance")
    } else {
      setStateForm("register")
    }
    let newstate = [...state]
    setState(newstate)
  }
  return (

    <div >
      <div className="parent-button">
        {state.map((button, index) => {
          return (
            <Button active={button.active} classes={button.class} onClickHandel={() => onclickHandel(button.id)} textBtn={button.text} key={button.id} />
          )
        })}
      </div>
      <div>
        {stateForm === 'register' && (
          <Register />
        )}
        {stateForm === 'entrance' && (
          <Entrance />
        )}



      </div>
    </div>
  );
}

export default RegisterEntrance;
