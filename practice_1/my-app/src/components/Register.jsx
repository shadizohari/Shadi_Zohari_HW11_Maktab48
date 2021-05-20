import '../css/Register.css';
import React, { useState } from 'react'
import validator from 'validator'
import { FaEyeSlash } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import InfoRegister from './InfoRegister'

const Register = ({ display, invalid, passwordShown, togglePasswordVisiblity, ...props }) => {
    const [displayComponent, setDisplayComponent] = useState("visible");

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
    const [inputNameState, setInputNameState] = useState({
        invalid: "",
        value: ""
    })
    const [inputLastState, setInputLastState] = useState({
        invalid: "",
        value: ""
    })
    const [inputEmailState, setInputEmailState] = useState({
        invalid: "",
        value: ""
    })
    const [inputPassState, setInputPassState] = useState({
        invalid: "",
        value: ""
    })
    const [inputProvincesState, setInputProvincesState] = useState({
        invalid: "",
        value: ""
    })
    const [inputTownState, setInputTownState] = useState({
        invalid: "",
        value: ""
    })
    const [inputEduState, setInputEduState] = useState({
        invalid: "",
        value: ""
    })
    const [inputEduPlaceState, setInputEduPlaceState] = useState({
        invalid: "",
        value: ""
    })

    const checkName = function (e) {
        let { inputName, inputLast, inputProvinces, inputTown, inputEmail, inputPass, inputEdu, inputEduPlace } = validInputs;
        inputName = (e.target.value) ? true : false;
        let { invalid, value } = inputNameState
        if (e.target.value) {
            value = e.target.value
        }
        setInputNameState({
            invalid: invalid,
            value: value
        })
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
        let { invalid, value } = inputLastState
        if (e.target.value) {
            value = e.target.value
        }
        setInputLastState({
            invalid: invalid,
            value: value
        })
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
        let { invalid, value } = inputEmailState
        if (e.target.value) {
            value = e.target.value
        }
        setInputEmailState({
            invalid: invalid,
            value: value
        })
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
        let { invalid, value } = inputTownState
        if (e.target.value) {
            value = e.target.value
        }
        setInputTownState({
            invalid: invalid,
            value: value
        })
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
        let { invalid, value } = inputEduPlaceState
        if (e.target.value) {
            value = e.target.value
        }
        setInputEduPlaceState({
            invalid: invalid,
            value: value
        })
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

    const [displayEdu, setDisplayEdu] = useState("displayNone");
    const handelEdu = function (e) {
        let { inputName, inputLast, inputProvinces, inputTown, inputEmail, inputPass, inputEdu, inputEduPlace } = validInputs;
        inputEdu = (e.target.value) ? true : false;
        let { invalid, value } = inputEduState
        if (e.target.value) {
            value = e.target.value
            console.log(value)
        }
        setInputEduState({
            invalid: invalid,
            value: value
        })
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
                value: "",
                text: "شهر"
            },
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
                value: "",
                text: "شهر"
            }, {
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
                value: "",
                text: "شهر"
            }, {
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
                value: "",
                text: "شهر"
            }, {
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
                value: "",
                text: "شهر"
            }, {
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
                value: "",
                text: "شهر"
            }, {
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
                value: "",
                text: "شهر"
            }, {
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
                value: "",
                text: "شهر"
            }, {
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
                value: "",
                text: "شهر"
            }, {
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
                value: "",
                text: "شهر"
            }, {
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
        let { invalid, value } = inputProvincesState
        if (e.target.value) {
            value = e.target.value
        }
        setInputProvincesState({
            invalid: invalid,
            value: value
        })
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
            let { value } = inputNameState
            setInputNameState({
                invalid: "invalid",
                value: value
            })
        } else {
            let { value } = inputNameState
            setInputNameState({
                invalid: "",
                value: value
            })

        }
        if (!validInputs.inputLast) {
            let { value } = inputLastState
            setInputLastState({
                invalid: "invalid",
                value: value
            })

        } else {
            let { value } = inputLastState
            setInputLastState({
                invalid: "",
                value: value
            })
        }
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
        if (!validInputs.inputProvinces) {
            let { value } = inputProvincesState
            setInputProvincesState({
                invalid: "invalid",
                value: value
            })
        } else {
            let { value } = inputProvincesState
            setInputProvincesState({
                invalid: "",
                value: value
            })
        }
        if (!validInputs.inputTown) {
            let { value } = inputTownState
            setInputTownState({
                invalid: "invalid",
                value: value
            })
        } else {
            let { value } = inputTownState
            setInputTownState({
                invalid: "",
                value: value
            })
        }
        if (validInputs.inputEdu && validInputs.inputEduPlace) {
            let { value } = inputEduPlaceState
            setInputEduPlaceState({
                invalid: "",
                value: value
            })
            let valueEdu = inputEduState.value
            setInputEduState({
                invalid: "",
                value: valueEdu
            })
        } else if (validInputs.inputEdu && !validInputs.inputEduPlace) {
            let { value } = inputEduPlaceState
            setInputEduPlaceState({
                invalid: "invalid",
                value: value
            })
        } else if (!validInputs.inputEdu && validInputs.inputEduPlace) {
            let { value } = inputEduPlaceState
            setInputEduPlaceState({
                invalid: "invalid",
                value: value
            })
        }
        if (validInputs.inputName && validInputs.inputLast && validInputs.inputEmail && validInputs.inputPass && validInputs.inputProvinces && validInputs.inputTown && ((validInputs.inputEdu && validInputs.inputEduPlace) || (!validInputs.inputEdu && !validInputs.inputEduPlace))) {
            setDisplayComponent("invisible");
        }
    }
    return (
        <div>
            <div className={`container-form ${displayComponent}`}>
                <h2 className="titr">رایگان ثبت نام کنید</h2>
                <form action="">
                    <div className="flex">
                        <input type="text" className={`input width ${invalid = inputNameState.invalid}`} placeholder=" &#10035; نام" onKeyUp={(e) => checkName(e)} />
                        <input type="text" className={`input width ${invalid = inputLastState.invalid}`} placeholder=" &#10035; نام خانوادگی" onKeyUp={(e) => checkLast(e)} />
                    </div>
                    <div className="flex">
                        <label className="provincesLabel"><span>&#10035;</span> محل تولد:</label>
                        <div className={`parent-select flex-basis-30 ${invalid = inputProvincesState.invalid}`}>
                            <select name="provinces" id="provinces" name="provinces" onChange={(e) => handelProvince(e)}>
                                {provinces.map((province, index) => {
                                    return (
                                        <option key={province.value} value={province.value} >{province.text}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className={`parent-select flex-basis-30 ${invalid = inputTownState.invalid}`}>
                            <select name="towns" id="towns" onChange={(e) => checkTown(e)}>
                                {town.map((town, index) => {
                                    return (
                                        <option key={town.value} value={town.value}>{town.text}</option>
                                    )
                                })}

                            </select>
                        </div>
                    </div>
                    <div className="flex">
                        <div className={`parent-select flex-basis-50 ${invalid = inputEduState.invalid}`}>
                            <select name="eduction" onChange={(e) => handelEdu(e)}>
                                {eduction.map((edu, index) => {
                                    return (
                                        <option key={edu.value} value={edu.value}>{edu.text}</option>
                                    )
                                })}
                            </select>
                        </div>
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
            <div>
                {displayComponent === 'invisible' && (
                    <InfoRegister nameValue={inputNameState.value} lastValue={inputLastState.value}
                        emailValue={inputEmailState.value} provincesValue={inputProvincesState.value}
                        townValue={inputTownState.value} eduValue={inputEduState.value} placeEduValue={inputEduPlaceState.value} />
                )}
            </div>
        </div>
    )
}
export default Register;