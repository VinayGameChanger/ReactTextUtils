import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';
function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#1f2446';
      showAlert('Dark Mode Enabled', 'success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode Enabled', 'success')

    }
  }
  return (
    <>
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} ></Navbar>
        <Alert alert={alert}></Alert>
      <Routes>
        <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the Text to Analyze" mode={mode} />} />
        <Route exact path='/about' element={<About  mode={mode} />} />
      </Routes>
    </>
  );
}

export default App;
