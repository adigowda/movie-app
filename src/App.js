import React, { useState } from 'react';
import './App.css';
import InputForm from './components/Form';
import { BrowserRouter, Route, Link } from "react-router-dom";
import MovieComponent from './components/movieComponent';
import 'react-circular-progressbar/dist/styles.css';

function App() {

  const [inputVal, setInputVal] = useState(``)


  const handleChange = (event) => {
    setInputVal(event.target.value)
  }

  return (
    <div className="App">

      <BrowserRouter>
        <InputForm inputVal={inputVal} handleChange={handleChange} />
        <Route path="/search" component={MovieComponent} />
      </BrowserRouter>
    </div>
  );
}

export default App;