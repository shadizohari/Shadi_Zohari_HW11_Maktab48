import '../css/InfoRegister.css';



function InfoRegister({ nameValue,lastValue,provincesValue,townValue,eduValue,placeEduValue,emailValue, ...props }) {
  return (
    <div className="container-info">
      <div className="container-label">
        <h3>نام</h3>
        <h3>نام خانوادگی</h3>
        <h3>استان محل تولد</h3>
        <h3>شهر محل تولد</h3>
        <h3>تحصیلات</h3>
        <h3>محل تحصیلات</h3>
        <h3>ایمیل</h3>

      </div>
      <div className="container-value">
        <h3>{nameValue}</h3>
        <h3>{lastValue}</h3>
        <h3>{provincesValue}</h3>
        <h3>{townValue}</h3>
        <h3>{eduValue}</h3>
        <h3>{placeEduValue}</h3>
        <h3>{emailValue}</h3>

      </div>
    </div>
  );
}

export default InfoRegister;