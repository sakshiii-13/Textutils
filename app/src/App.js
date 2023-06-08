import { useState } from 'react';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
function App() {
  const [mode, setmode] = useState('light');
  const togglemode=()=>{
    if(mode==='light') 
    {
      setmode('dark');
     document.body.style.backgroundColor='#042743';
     document.title="TextUtils-Dark";
  }
    else
    {
      setmode('light');
    document.body.style.backgroundColor='white';}
  }
  return (
    <>

    <Navbar mode={mode} togglemode={togglemode}/>
    
    <div className="container my-3">
    <TextForm heading="Enter the text to analyse" mode={mode} />
    </div>

</>
  );
}

export default App;
