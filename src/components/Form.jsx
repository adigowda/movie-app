import React, { useState } from 'react'
import {  useHistory } from "react-router-dom";

const InputForm = () => {
    const [inputVal, setInputVal] = useState(``)
    const history = useHistory()
    const habdleSubmit = (e) => {
        e.preventDefault();
        history.push(`/search/${inputVal.split(' ').join('-')}`);
    }

    const handleChange = (event) => {
        setInputVal(event.target.value)
    }

    return (
        <div>
            <form className="wrapper" onSubmit={(e) => habdleSubmit(e)} >
                <input
                    value={inputVal}
                    onChange={(e) => { handleChange(e);  }}
                    type="text"
                    className="input"
                    placeholder="Search for a movie..."
                />
                    <button className='submitButton' onClick={(e)=> habdleSubmit(e)} >
                        <i className="fas fa-search fa-2x"></i>
                    </button>
            </form>

        </div>
    )
}

export default InputForm