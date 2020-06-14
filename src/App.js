import React, { useState } from 'react';
import './App.css';
import InputForm from './components/Form';
import movieDetails from './components/MovieDetails';

function App() {

  const [inputVal, setInputVal] = useState(``)
  const [details, setDetails] = useState([])

  const handleChange = (event) => {
    setInputVal(event.target.value)
  }

  const handleClick = async (event) => {
    event.preventDefault()
    let data = await movieDetails(inputVal)
    setDetails([data])
  }


  return (
    <div className="App">
      <InputForm inputVal={inputVal} handleChange={handleChange} handleClick={handleClick} />
      {
        details.map(detail => {
          const { Title, Year, Rated, Released, Runtime, Poster,Genre } = detail
          return (
            <div className='result'>
              <div className='ContentWrapper'>
                <div className='imageDiv'>
                  <img src={Poster} />
                </div>
                <div className='infoWrapper'>
                  <h2> {Title} <span> ({Year}) </span> </h2>
                  <div className='factsWrapper'>
                    <span className='rating fact'>{Rated}</span>
                    <span className='fact'>{Released}</span>
                    <span className='fact addDot'>{Genre}</span>
                    <span className='fact addDot'>{Runtime}</span>
                    </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;