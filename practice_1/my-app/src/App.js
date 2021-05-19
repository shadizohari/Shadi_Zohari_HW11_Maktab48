import React, { useState } from 'react'
import RegisterEntrance from './components/RegisterEntrance';
import './css/App.css';
import './font-fa/font.css'

function App({ visible, ...props }) {

  return (
    <div className="container">
      <RegisterEntrance />
    </div>
  );
}

export default App;
