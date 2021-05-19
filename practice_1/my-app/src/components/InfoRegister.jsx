import { useState } from 'react';
import '../css/InfoRegister.css';



function InfoRegister({ nameValue, lastValue, provincesValue, townValue, eduValue, placeEduValue, emailValue, ...props }) {
  const [labelValueState, setLabelValueState] = useState([{
    id: 1,
    label: "نام",
    value: nameValue,
  }, {
    id: 2,
    label: "نام خانوادگی",
    value: lastValue
  }, {
    id: 3,
    label: "استان محل تولد",
    value: provincesValue
  }, {
    id: 4,
    label: "شهر محل تولد",
    value: townValue
  }, {
    id: 5,
    label: "تحصیلات",
    value: eduValue
  }, {
    id: 6,
    label: "محل تحصیلات",
    value: placeEduValue
  }, {
    id: 7,
    label: "ایمیل",
    value: emailValue
  }])

  return (
    <div className="container-info">
      {labelValueState.map((label, index) => {
        return (
          <div key={label.id} className="container-value">
            <h3>{label.label}</h3>
            <h3>{label.value}</h3>
          </div>
        )
      })}



    </div>
  );
}

export default InfoRegister;

// {labelValue.map((labelValue, index) => {
//   return (
//     <div className="container-value">
//       <h3>{labelValue.label}</h3>
//       <h3>{labelValue.value}</h3>
//     </div>
//   )
// })
// }