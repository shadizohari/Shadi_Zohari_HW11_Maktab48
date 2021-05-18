import './Register.css';
import React, { useState } from 'react'
import { FaEyeSlash } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';



const Register = ({ display, invalid, ...props }) => {
    const [validInputs, setState] = useState({
        inputName: false,
        inputLast: false,
        inputProvinces: false,
        inputTown: false,
        inputEmail: false,
        inputPass: false
    })

    const checkName = function (e) {
        let { inputName, inputLast, inputProvinces, inputTown, inputEmail, inputPass } = validInputs;
        inputName = (e.target.value) ? true : false;
        setState((state, props) => ({
            inputName: inputName,
            inputLast: inputLast,
            inputProvinces: inputProvinces,
            inputTown: inputTown,
            inputEmail: inputEmail,
            inputPass: inputPass
        }));
    }
    const checkLast = function (e) {
        let { inputName, inputLast, inputProvinces, inputTown, inputEmail, inputPass } = validInputs;
        inputLast = (e.target.value) ? true : false;
        setState((state, props) => ({
            inputName: inputName,
            inputLast: inputLast,
            inputProvinces: inputProvinces,
            inputTown: inputTown,
            inputEmail: inputEmail,
            inputPass: inputPass
        }));
    }

    const [inputNameState, setInputNameState] = useState([{
        id: "name",
        classes: "input width",
        invalid: "",
        type: "text",
        placeholder: "نام",
        fucOnchange: checkName,
    }])
    const [inputLastState, setInputLastState] = useState([{
        id: "Last",
        classes: "input width",
        invalid: "",
        type: "text",
        placeholder: "نام خانوادگی",
        fucOnchange: checkLast,
    }])

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => (setPasswordShown(passwordShown ? false : true))

    const [displayEdu, setDisplayEdu] = useState("displayNone");
    const handelEdu = (event) => (event.target.value) ? setDisplayEdu("display") : setDisplayEdu("displayNone");

    const submitData = (e) => {
        e.preventDefault();
        console.log(validInputs)
        if (!validInputs.inputName) {
            setInputNameState([{
                id: "name",
                classes: "input width",
                invalid: "invalid",
                type: "text",
                placeholder: "نام",
                fucOnchange: checkName,
            }])
        } else {
            setInputNameState([{
                id: "name",
                classes: "input width",
                invalid: "",
                type: "text",
                placeholder: "نام",
                fucOnchange: checkName,
            }])

        }
        if (!validInputs.inputLast) {
            setInputLastState([{
                id: "Last",
                classes: "input width",
                invalid: "invalid",
                type: "text",
                placeholder: "نام خانوادگی",
                fucOnchange: checkLast,
            }])

        } else {
            setInputLastState([{
                id: "Last",
                classes: "input width",
                invalid: "",
                type: "text",
                placeholder: "نام خانوادگی",
                fucOnchange: checkLast,
            }])
        }
    }
    const eduction = [{
        value: "",
        text: "تحصیلات"
    }, {
        value: "دیپلم",
        text: "دیپلم"
    }, {
        value: "کارشناسی",
        text: "کارشناسی"
    }, {
        value: "کارشناسی ارشد",
        text: "کارشناسی ارشد"
    }, {
        value: "دکتری",
        text: "دکتری"
    }]

    const provinces = [{
        value: "",
        text: "استان"
    }, {
        value: "تهران",
        text: "تهران"
    }, {
        value: "اصفهان",
        text: "اصفهان"
    }, {
        value: "خراسان رضوی",
        text: "خراسان رضوی"
    }, {
        value: "همدان",
        text: "همدان"
    }, {
        value: "کرمان",
        text: "کرمان"
    }, {
        value: "یزد",
        text: "یزد"
    }, {
        value: "گیلان",
        text: "گیلان"
    }, {
        value: "مازندران",
        text: "مازندران"
    }, {
        value: "گلستان",
        text: "گلستان"
    }, {
        value: "لرستان",
        text: "لرستان"
    }]
    const [town, setTown] = useState([{
        value: "",
        text: "شهر",
        disabled: true
    }])
    const towns = [{
        id: "تهران",
        towns: [
            {
                value: "تهران",
                text: "تهران"
            }, {
                value: "اسلام‌شهر",
                text: "اسلام‌شهر"
            }
        ]
    }, {
        id: "اصفهان",
        towns: [
            {
                value: "اصفهان",
                text: "اصفهان"
            }, {
                value: "اردستان",
                text: "اردستان"
            }
        ]
    }
        , {
        id: "خراسان رضوی",
        towns: [
            {
                value: "مشهد",
                text: "مشهد"
            }, {
                value: "تربت جام",
                text: "تربت جام"
            }
        ]
    }, {
        id: "کرمان",
        towns: [
            {
                value: "شهربابک",
                text: "شهربابک"
            }, {
                value: "سیرجان",
                text: "سیرجان"
            }
        ]
    }, {
        id: "یزد",
        towns: [
            {
                value: "اردکان",
                text: "اردکان"
            }, {
                value: "بافق",
                text: "بافق"
            }
        ]
    }, {
        id: "گلستان",
        towns: [
            {
                value: "گنبدکاووس ",
                text: "گنبدکاووس "
            }, {
                value: "گرگان",
                text: "گرگان"
            }
        ]
    }, {
        id: "همدان",
        towns: [
            {
                value: "ملایر",
                text: "ملایر"
            }, {
                value: "همدان",
                text: "همدان"
            }
        ]
    }, {
        id: "گیلان",
        towns: [
            {
                value: "رشت",
                text: "رشت"
            }, {
                value: "لاهیجان",
                text: "لاهیجان"
            }
        ]
    }, {
        id: "مازندران",
        towns: [
            {
                value: "آمل",
                text: "آمل"
            }, {
                value: "بابل",
                text: "بابل"
            }
        ]
    }, {
        id: "لرستان",
        towns: [
            {
                value: "خرم‌آباد",
                text: "خرم‌آباد"
            }, {
                value: "پل‌دختر",
                text: "پل‌دختر"
            }
        ]
    }]

    const handelProvince = (e) => {
        let town = towns.filter((town, index) => {
            if (town.id === e.target.value) {
                return town
            }
        })
        setTown(town[0].towns)
    }
    return (
        <div className={`container-form`}>
            <h2 className="titr">رایگان ثبت نام کنید</h2>
            <form action="">
                <div className="flex">
                    {inputNameState.map((input, index) => {
                        return (
                            <input key={input.id} type={input.type} className={`${input.classes} ${invalid = input.invalid}`} placeholder={input.placeholder} onKeyUp={(e) => input.fucOnchange(e)} />
                        )
                    })}

                    {inputLastState.map((input, index) => {
                        return (
                            <input key={input.id} type={input.type} className={`${input.classes} ${invalid = input.invalid}`} placeholder={input.placeholder} onKeyUp={(e) => input.fucOnchange(e)} />
                        )
                    })}
                </div>
                <div className="flex">
                    <label className="provincesLabel"><span>&#10035;</span> محل تولد:</label>
                    <select name="provinces" id="provinces" name="provinces" onChange={(e) => handelProvince(e)}>
                        {provinces.map((province, index) => {
                            return (
                                <option key={province.value} value={province.value} >{province.text}</option>
                            )
                        })}
                    </select>
                    <select name="towns" id="towns">
                        {town.map((town, index) => {
                            return (
                                <option key={town.value} value={town.value}>{town.text}</option>
                            )
                        })}

                    </select>
                </div>
                <div className="flex">
                    <select name="eduction" onChange={(e) => handelEdu(e)}>
                        {eduction.map((edu, index) => {
                            return (
                                <option key={edu.value} value={edu.value}>{edu.text}</option>
                            )
                        })}
                    </select>
                    <input className={`input width  ${display = displayEdu}`} type="text" placeholder="&#10035; محل تحصیل " />
                </div>
                <input className="input" type="email" placeholder=" پست الکترونیک &#10035;" />
                <div className="flex-pass">
                    {passwordShown ? <FaEye className="icon-eye" onClick={togglePasswordVisiblity} /> : <FaEyeSlash className="icon-eye" onClick={togglePasswordVisiblity} />}
                    <input type={passwordShown ? "text" : "password"} id="pwd" name="pwd" placeholder=" کلمه عبور &#10035;" />
                </div>
                <button className="submit" onClick={(e) => submitData(e)}>ثبت نام</button>
            </form>
        </div>
    )
}
export default Register;