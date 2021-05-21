import React, { useState } from 'react'
import validator from 'validator'
import '../css/ForgetPass.css';
import Button from './Button';


const ForgetPass = ({ hideComponent, invalid, ...props }) => {
    const [stateEmailValid, setStateEmailValid] = useState({
        value: "",
        invalid: ""
    })
    const [stateEntireEmail, setstateEntireEmail] = useState(true)
    const entireEmail = function () {
        let { value, invalid } = stateEmailValid;
        if (value) {
            setstateEntireEmail(false)
        } else {
            invalid = "invalid";
        }
        setStateEmailValid(({
            value: value,
            invalid: invalid
        }))
    }


    const checkEmail = function (e) {
        let { value, invalid } = stateEmailValid;
        if (validator.isEmail(e.target.value)) {
            value = true;
        }
        setStateEmailValid(({
            value: value,
            invalid: invalid
        }))
    }

    if (stateEntireEmail) {
        return (
            <div className="forgetPass">
                <h3> کاربر گرامی ایمیل خود را وارد کنید .</h3>
                <input className={`input ${invalid = stateEmailValid.invalid}`} type="email" placeholder=" پست الکترونیک &#10035;" onChange={(e) => checkEmail(e)} />
                <Button textBtn="کلیک کنید" classes="btnForgetPass" onClickHandel={entireEmail} />
            </div>
        )
    } else {
        return (
            <div className="forgetPass">
                <h3 className="titr-res">کاربر گرامی رمز عبور جدید ارسال شد.</h3>
                <Button textBtn="ورود مجدد" classes="btnForgetPass" onClickHandel={() => hideComponent("major")} />

            </div>
        )
    }

}

export default ForgetPass;