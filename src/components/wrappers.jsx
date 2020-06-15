import React from "react"

const ImageWrapper = ({ Poster }) => (
    <div className='imageDiv'>
        <img src={Poster} />
    </div>
)

export const TitleAndFacts = ({ Title, Year, Rated, Released, Country, Genre, Runtime, totalSeasons }) => (
    <div>
        <h2> {Title} <span> ({Year}) </span> </h2>
        <div className='factsWrapper'>
            <span className='rating fact'>{Rated}</span>
            <span className='fact'>{Released} ({Country}) </span>
            <span className='fact addDot'>{Genre}</span>
            {
                totalSeasons ? <span className='fact addDot'>{totalSeasons} Seasons</span> : <span className='fact addDot'>{Runtime}</span>
            }

        </div>
    </div>
)

export default ImageWrapper