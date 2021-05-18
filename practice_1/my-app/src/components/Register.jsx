import './Register.css';
import React, { useState } from 'react'
import validator from 'validator'
import { FaEyeSlash } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';

const Register = ({ display, invalid, ...props }) => {
    const [validInputs, setState] = useState({
        inputName: false,
        inputLast: false,
        inputProvinces: false,
        inputTown: false,
        inputEmail: false,
        inputPass: false,
        inputEdu: false,
        inputEduPlace: false
    })

    const checkName = function (e) {
        let { inputName, inputLast, inputProvinces, inputTown, inputEmail, inputPass, inputEdu, inputEduPlace } = validInputs;
        inputName = (e.target.value) ? true : false;
        setState((state, props) => ({
            inputName: inputName,
            inputLast: inputLast,
            inputProvinces: inputProvinces,
            inputTown: inputTown,
            inputEmail: inputEmail,
            inputPass: inputPass,
            inputEdu: inputEdu,
            inputEduPlace: inputEduPlace,

        }));
    }

    const checkLast = function (e) {
        let { inputName, inputLast, inputProvinces, inputTown, inputEmail, inputPass, inputEdu, inputEduPlace } = validInputs;
        inputLast = (e.target.value) ? true : false;
        setState((state, props) => ({
            inputName: inputName,
            inputLast: inputLast,
            inputProvinces: inputProvinces,
            inputTown: inputTown,
            inputEmail: inputEmail,
            inputPass: inputPass,
            inputEdu: inputEdu,
            inputEduPlace: inputEduPlace,
        }));
    }

    const checkEmail = function (e) {
        let { inputName, inputLast, inputProvinces, inputTown, inputEmail, inputPass, inputEdu, inputEduPlace } = validInputs;
        inputEmail = validator.isEmail(e.target.value);
        setState((state, props) => ({
            inputName: inputName,
            inputLast: inputLast,
            inputProvinces: inputProvinces,
            inputTown: inputTown,
            inputEmail: inputEmail,
            inputPass: inputPass,
            inputEdu: inputEdu,
            inputEduPlace: inputEduPlace,
        }));
    }
    const checkPass = function (e) {
        let { inputName, inputLast, inputProvinces, inputTown, inputEmail, inputPass, inputEdu, inputEduPlace } = validInputs;
        inputPass = (e.target.value) ? true : false;
        setState((state, props) => ({
            inputName: inputName,
            inputLast: inputLast,
            inputProvinces: inputProvinces,
            inputTown: inputTown,
            inputEmail: inputEmail,
            inputPass: inputPass,
            inputEdu: inputEdu,
            inputEduPlace: inputEduPlace,
        }));
    }
    const checkTown = function (e) {
        let { inputName, inputLast, inputProvinces, inputTown, inputEmail, inputPass, inputEdu, inputEduPlace } = validInputs;
        inputTown = (e.target.value) ? true : false;
        setState((state, props) => ({
            inputName: inputName,
            inputLast: inputLast,
            inputProvinces: inputProvinces,
            inputTown: inputTown,
            inputEmail: inputEmail,
            inputPass: inputPass,
            inputEdu: inputEdu,
            inputEduPlace: inputEduPlace,
        }));
    }
    const checkPlaceEdu = function (e) {
        let { inputName, inputLast, inputProvinces, inputTown, inputEmail, inputPass, inputEdu, inputEduPlace } = validInputs;
        inputEduPlace = (e.target.value) ? true : false;
        setState((state, props) => ({
            inputName: inputName,
            inputLast: inputLast,
            inputProvinces: inputProvinces,
            inputTown: inputTown,
            inputEmail: inputEmail,
            inputPass: inputPass,
            inputEdu: inputEdu,
            inputEduPlace: inputEduPlace,
        }));
    }
    const [inputNameState, setInputNameState] = useState({
        invalid: "",
    })
    const [inputLastState, setInputLastState] = useState({
        invalid: "",
    })
    const [inputEmailState, setInputEmailState] = useState({
        invalid: "",
    })
    const [inputPassState, setInputPassState] = useState({
        invalid: "",
    })
    const [inputProvincesState, setInputProvincesState] = useState({
        invalid: "",
    })
    const [inputTownState, setInputTownState] = useState({
        invalid: "",
    })
    const [inputEduState, setInputEduState] = useState({
        invalid: "",
    })
    const [inputEduPlaceState, setInputEduPlaceState] = useState({
        invalid: "",
    })

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => (setPasswordShown(passwordShown ? false : true))

    const [displayEdu, setDisplayEdu] = useState("displayNone");
    const handelEdu = function (e) {
        let { inputName, inputLast, inputProvinces, inputTown, inputEmail, inputPass, inputEdu, inputEduPlace } = validInputs;
        inputEdu = (e.target.value) ? true : false;
        setState((state, props) => ({
            inputName: inputName,
            inputLast: inputLast,
            inputProvinces: inputProvinces,
            inputTown: inputTown,
            inputEmail: inputEmail,
            inputPass: inputPass,
            inputEdu: inputEdu,
            inputEduPlace: inputEduPlace,
        }));
        (e.target.value) ? setDisplayEdu("display") : setDisplayEdu("displayNone");

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
        let { inputName, inputLast, inputProvinces, inputTown, inputEmail, inputPass, inputEdu, inputEduPlace } = validInputs;
        inputProvinces = (e.target.value) ? true : false;
        setState((state, props) => ({
            inputName: inputName,
            inputLast: inputLast,
            inputProvinces: inputProvinces,
            inputTown: inputTown,
            inputEmail: inputEmail,
            inputPass: inputPass,
            inputEdu: inputEdu,
            inputEduPlace: inputEduPlace,
        }));
        let town = towns.filter((town, index) => {
            if (town.id === e.target.value) {
                return town
            }
        })
        setTown(town[0].towns)
    }
    const submitData = (e) => {
        e.preventDefault();
        if (!validInputs.inputName) {
            setInputNameState({
                invalid: "invalid",
            })
        } else {
            setInputNameState({
                invalid: "",
            })

        }
        if (!validInputs.inputLast) {
            setInputLastState({
                invalid: "invalid",
            })

        } else {
            setInputLastState({
                invalid: "",
            })
        }
        if (!validInputs.inputEmail) {
            setInputEmailState({
                invalid: "invalid",
            })
        } else {
            setInputEmailState({
                invalid: "",
            })
        }
        if (!validInputs.inputPass) {
            setInputPassState({
                invalid: "invalid",
            })
        } else {
            setInputPassState({
                invalid: "",
            })
        }
        if (!validInputs.inputProvinces) {
            setInputProvincesState({
                invalid: "invalid",
            })
        } else {
            setInputProvincesState({
                invalid: "",
            })
        }
        if (!validInputs.inputTown) {
            setInputTownState({
                invalid: "invalid",
            })
        } else {
            setInputTownState({
                invalid: "",
            })
        }
        if (validInputs.inputEdu && validInputs.inputEduPlace) {
            setInputEduPlaceState({
                invalid: "",
            })
            setInputEduState({
                invalid: "",
            })
        } else if (validInputs.inputEdu && !validInputs.inputEduPlace) {
            setInputEduPlaceState({
                invalid: "invalid",
            })
        } else if (!validInputs.inputEdu && validInputs.inputEduPlace) {
            setInputEduPlaceState({
                invalid: "invalid",
            })
        }
    }
    return (
        <div className={`container-form`}>
            <h2 className="titr">رایگان ثبت نام کنید</h2>
            <form action="">
                <div className="flex">
                    <input type="text" className={`input width ${invalid = inputNameState.invalid}`} placeholder=" &#10035; نام" onKeyUp={(e) => checkName(e)} />
                    <input type="text" className={`input width ${invalid = inputLastState.invalid}`} placeholder=" &#10035; نام خانوادگی" onKeyUp={(e) => checkLast(e)} />
                </div>
                <div className="flex">
                    <label className="provincesLabel"><span>&#10035;</span> محل تولد:</label>
                    <select className={`${invalid = inputProvincesState.invalid}`} name="provinces" id="provinces" name="provinces" onChange={(e) => handelProvince(e)}>
                        {provinces.map((province, index) => {
                            return (
                                <option key={province.value} value={province.value} >{province.text}</option>
                            )
                        })}
                    </select>
                    <select className={`${invalid = inputTownState.invalid}`} name="towns" id="towns" onChange={(e) => checkTown(e)}>
                        {town.map((town, index) => {
                            return (
                                <option key={town.value} value={town.value}>{town.text}</option>
                            )
                        })}

                    </select>
                </div>
                <div className="flex">
                    <select className={`${invalid = inputEduState.invalid}`} name="eduction" onChange={(e) => handelEdu(e)}>
                        {eduction.map((edu, index) => {
                            return (
                                <option key={edu.value} value={edu.value}>{edu.text}</option>
                            )
                        })}
                    </select>
                    <input className={`input width  ${display = displayEdu} ${invalid = inputEduPlaceState.invalid}`} type="text" placeholder="&#10035; محل تحصیل " onChange={(e) => checkPlaceEdu(e)} />
                </div>
                <input className={`input ${invalid = inputEmailState.invalid}`} type="email" placeholder=" پست الکترونیک &#10035;" onChange={(e) => checkEmail(e)} />
                <div className={`flex-pass ${invalid = inputPassState.invalid}`}>
                    {passwordShown ? <FaEye className="icon-eye" onClick={togglePasswordVisiblity} /> : <FaEyeSlash className="icon-eye" onClick={togglePasswordVisiblity} />}
                    <input type={passwordShown ? "text" : "password"} id="pwd" name="pwd" placeholder=" کلمه عبور &#10035;" onKeyUp={(e) => checkPass(e)} />
                </div>
                <button className="submit" onClick={(e) => submitData(e)}>ثبت نام</button>
            </form>
        </div>
    )
}
export default Register;