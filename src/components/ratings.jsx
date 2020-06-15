import React from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export const RatingsWrapper = ({ imdbValue, rtnValue }) => {
    if (imdbValue && !rtnValue) {
        return (
            <div className='ratings'>

                <div id="imdb">
                    <div>
                        <img src="https://img.icons8.com/color/48/000000/imdb.png" />
                    </div>
                    <p> {imdbValue} </p>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='ratings'>

                <div id="imdb">
                    <div>
                        <img src="https://img.icons8.com/color/48/000000/imdb.png" />
                    </div>
                    <p> {imdbValue} </p>
                </div>

                <div id='rtn-tmts'>
                    <div style={{ width: `50px` }}>
                        <CircularProgressbar styles={buildStyles({
                            textSize: `30px`, textColor: `#fff`, backgroundColor: '#3e98c7'
                        })} value={rtnValue} maxValue={1} text={`${rtnValue * 100}%`} />
                    </div>
                    <p>Rotten <br /> Tomatoes</p>
                </div>

            </div>
        )
    }



}


export default RatingsWrapper