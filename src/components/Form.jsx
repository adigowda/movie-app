import React, { useState } from 'react'
import { Link, Redirect } from "react-router-dom";

const InputForm = ({ inputVal, handleChange }) => {
    const [query, setQuery] = useState(``)
    
    const habdleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <div>
            <form className="wrapper" onSubmit={(e) => habdleSubmit(e)} >
                <input
                    value={inputVal}
                    onChange={(e) => { handleChange(e); setQuery(e.target.value.replace(' ','+')) }}
                    type="text"
                    className="input"
                    placeholder="Search for a movie..."
                />
                <Link to={`/search/?movie=${query}`} >
                    <button className='submitButton' type="submit">
                        <i className="fas fa-search fa-2x"></i>
                    </button>
                </Link>
            </form>

        </div>
    )
}

export default InputForm