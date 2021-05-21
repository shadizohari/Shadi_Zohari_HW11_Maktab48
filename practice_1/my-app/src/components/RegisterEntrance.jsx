import React, { useState } from 'react'
import '../css/App.css';
import Button from "./Button"
import Entrance from './Entrance';
import ForgetPass from './ForgetPass';
import Register from './Register';
import Welcome from './Welcome';

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

  const [stateVisible, setStateVisible] = useState("major")
  const hideComponent = function (x) {
    setStateVisible(x);
  }

  const [setEmailValue, stateEmailValue] = useState("")
  const emailValue = function (x) {
    stateEmailValue(x)
  }

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
  // eyeicon in password
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => (setPasswordShown(passwordShown ? false : true))

  if (stateVisible === "major") {
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
            <Register passwordShown={passwordShown} togglePasswordVisiblity={togglePasswordVisiblity} />
          )}
          {stateForm === 'entrance' && (
            <Entrance passwordShown={passwordShown} hideComponent={hideComponent} emailValue={emailValue} togglePasswordVisiblity={togglePasswordVisiblity} />
          )}
        </div>
      </div>
    );
  } else if (stateVisible === "welcome") {
    return (
      <Welcome userEmail={setEmailValue} />
    )
  } else if (stateVisible === "forgetPass") {
    return (
      <ForgetPass hideComponent={hideComponent}/>
    )
  }
}

export default RegisterEntrance;
