import React, { useState } from "react"
import ImageWrapper, { TitleAndFacts } from '../components/wrappers'
import RatingsWrapper from '../components/ratings';
import loadingGif from '../assets/loading.gif'
import axios from 'axios'
import 'react-circular-progressbar/dist/styles.css';
import movieDetails from '../components/MovieDetails';



const MovieComponent = ({ match, location }) => {
    const [loading, setloading] = useState(false)
    const [details, setDetails] = useState([])
    const [Plot, setPlot] = useState('')
    const [knowMore, setKnowMore] = useState(true)

    
    const fetchData = async () => {
        let data = await movieDetails(`avengers`)
        if (!data.Error) {
            setDetails([data])
            setPlot(data.Plot)
            setKnowMore(true)
        }
    }
    fetchData();

    const handleLoadingClick = async () => {
        setloading(true)
        let response = await axios(`http://www.omdbapi.com/?apikey=7ddff28e&t=$avengers&plot=full`)
        setTimeout(() => {
            setPlot(response.data.Plot)
            if (Plot !== response.data.Plot) {
                setKnowMore(false)
            }
            setloading(false)
        }, 800);
    }

    return (
        details.map((detail, index) => {
            const { Title, Year, Rated, Released, Runtime, Poster, Genre, Country, Ratings, totalSeasons } = detail

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
                                <h4>Overview</h4>
                                <p className='plot'>
                                    {Plot}
                                </p>
                                {
                                    knowMore ? <div className='know-more'>
                                        <button onClick={() => handleLoadingClick()}>Know more</button>
                                        {
                                            loading ? <img src={loadingGif} /> : null
                                        }
                                    </div> : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default MovieComponent