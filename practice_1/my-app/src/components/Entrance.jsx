import React, { useState } from 'react'
import '../css/Register.css';
import '../css/Entrance.css';
import validator from 'validator'
import { FaEyeSlash } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';


const Entrance = ({ invalid,...props }) => {

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
        inputPass = (String(e.target.value).length > 8) ? true : false;
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
    return (
        <div className={`container-form`}>
            <h2 className="titr"> خوش آمدید </h2>
            <form action="">

                <input className={`input ${invalid = inputEmailState.invalid}`} type="email" placeholder=" پست الکترونیک &#10035;" onChange={(e) => checkEmail(e)} />
                {/* <div className={`flex-pass ${invalid = inputPassState.invalid}`}>
                    {passwordShown ? <FaEye className="icon-eye" onClick={togglePasswordVisiblity} /> : <FaEyeSlash className="icon-eye" onClick={togglePasswordVisiblity} />}
                    <input type={passwordShown ? "text" : "password"} id="pwd" name="pwd" placeholder=" کلمه عبور &#10035;" onKeyUp={(e) => checkPass(e)} />
                </div> */}
                {/* <button className="submit" onClick={(e) => submitData(e)}>ثبت نام</button> */}
            </form>
        </div>
    )
}

export default Entrance;