import React, { useState } from 'react'
import '../css/Register.css';
import '../css/Entrance.css';
import validator from 'validator'
import { FaEyeSlash } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';


const Entrance = ({ invalid, passwordShown, togglePasswordVisiblity,hideComponent,emailValue,...props }) => {

    const [validInputs, setState] = useState({
        inputEmail: false,
        inputPass: false,
    })
    const [inputEmailState, setInputEmailState] = useState({
        invalid: "",
        value: ""
    })
    const [inputPassState, setInputPassState] = useState({
        invalid: "",
        value: ""
    })
    const checkEmail = function (e) {
        let { inputEmail, inputPass } = validInputs;
        inputEmail = validator.isEmail(e.target.value);
        let { invalid, value } = inputEmailState
        if (e.target.value) {
            value = e.target.value
            emailValue(value)
        }
        setInputEmailState({
            invalid: invalid,
            value: value
        })
        setState((state, props) => ({
            inputEmail: inputEmail,
            inputPass: inputPass,
        }));
    }
    const checkPass = function (e) {
        let { inputEmail, inputPass } = validInputs;
        inputPass = (String(e.target.value).length > 7) ? true : false;
        let { invalid, value } = inputPassState
        if (e.target.value) {
            value = e.target.value
        }
        setInputPassState({
            invalid: invalid,
            value: value
        })
        setState((state, props) => ({
            inputEmail: inputEmail,
            inputPass: inputPass,
        }));
    }
    const submitEntrance = function (e) {
        e.preventDefault();
        if (!validInputs.inputEmail) {
            let { value } = inputEmailState
            setInputEmailState({
                invalid: "invalid",
                value: value
            })
        } else {
            let { value } = inputEmailState
            setInputEmailState({
                invalid: "",
                value: value
            })
        }
        if (!validInputs.inputPass) {
            let { value } = inputPassState
            setInputPassState({
                invalid: "invalid",
                value: value
            })
        } else {
            let { value } = inputPassState
            setInputPassState({
                invalid: "",
                value: value
            })
        }
        if(validInputs.inputEmail && validInputs.inputPass){
            // setStateComponentForm="displayNone"
            hideComponent("welcome")
        }
    }
    const forgetPass=function(){
        hideComponent("forgetPass")
        
    }
    return (
        <div className={`container-form`}>
            <h2 className="titr"> ?????? ?????????? </h2>
            <form action="">

                <input className={`input ${invalid = inputEmailState.invalid}`} type="email" placeholder=" ?????? ?????????????????? &#10035;" onChange={(e) => checkEmail(e)} />
                <div className={`flex-pass ${invalid = inputPassState.invalid}`}>
                    {passwordShown ? <FaEye className="icon-eye" onClick={togglePasswordVisiblity} /> : <FaEyeSlash className="icon-eye" onClick={togglePasswordVisiblity} />}
                    <input type={passwordShown ? "text" : "password"} id="pwd" name="pwd" placeholder=" ???????? ???????? &#10035;" onKeyUp={(e) => checkPass(e)} />
                </div>
                <p onClick={forgetPass}>???????????? ???????????????????</p>
                <button className="submit" onClick={(e) => submitEntrance(e)} >????????</button>
            </form>
        </div>
    )
}

export default Entrance;

