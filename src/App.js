import React, { useState } from 'react';
import './App.css';
import InputForm from './components/Form';
import movieDetails from './components/MovieDetails';
import 'react-circular-progressbar/dist/styles.css';
import ImageWrapper, { TitleAndFacts } from './components/wrappers';
import RatingsWrapper from './components/ratings';

function App() {

  const [inputVal, setInputVal] = useState(``)
  const [details, setDetails] = useState([])

  const handleChange = (event) => {
    setInputVal(event.target.value)
  }

  const handleClick = async (event) => {
    event.preventDefault()
    let data = await movieDetails(inputVal)
    if (!data.Error)
      setDetails([data])
  }

  return (
    <div className="App">
      <InputForm inputVal={inputVal} handleChange={handleChange} handleClick={handleClick} />
      {
        details.map((detail, index) => {
          const { Title, Year, Rated, Released, Runtime, Poster, Genre, Country, Ratings, totalSeasons,Plot } = detail

          return (
            <div className='result' key={index} >
              <div className='ContentWrapper' >
                <ImageWrapper Poster={Poster} />
                <div className='infoWrapper'>
                  <TitleAndFacts Title={Title} Year={Year}
                    Rated={Rated}
                    Released={Released}
                    Country={Country}
                    Genre={Genre}
                    Country={Country}
                    Runtime={Runtime}
                    totalSeasons={totalSeasons}
                  />
                  {
                    Ratings.length >= 2 ? <RatingsWrapper imdbValue={Ratings[0].Value}
                      rtnValue={parseInt(Ratings[1].Value) / 100} /> :
                      Ratings.length == 1 ? <RatingsWrapper imdbValue={Ratings[0].Value} />
                        : null
                  }
                  <div className="overview">
                    {Plot}
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