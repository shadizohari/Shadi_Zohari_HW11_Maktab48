// import { useState } from 'react';
import Button from './Button'
import '../css/Welcome.css'
function Welcome({ userEmail, ...props }) {

  return (
    <div className="welcome">
      <h1>کاربر گرامی</h1>
      <h1 className="colorUser">{userEmail}</h1>
      <h1>خوش آمدید</h1>
    </div>
  );
}

export default Welcome;
