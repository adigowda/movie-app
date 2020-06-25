import React from 'react';
import './App.css';
import InputForm from './components/Form';
import { BrowserRouter, Route } from "react-router-dom";
import MovieComponent from './components/movieComponent';
import 'react-circular-progressbar/dist/styles.css';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <InputForm  />
        <Route path="/search/:title" component={MovieComponent} />
      </BrowserRouter>
    </div>
  );
}

export default App;