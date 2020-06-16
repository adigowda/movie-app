import React from 'react'
import { Link, BrowserRouter } from "react-router-dom";

const InputForm = ({ inputVal, handleChange, handleClick }) => (
    <div>
        <form className="wrapper" onSubmit={(e) => e.preventDefault()} >
            <input
                value={inputVal}
                onChange={(e) => handleChange(e)}
                type="text"
                className="input"
                placeholder="Search for a movie..."
            />
            <button className='submitButton' type="submit">
                <BrowserRouter>
                    <Link to='/search' >
                        <i className="fas fa-search fa-2x"></i>
                    </Link>
                </BrowserRouter>
            </button>
        </form>

    </div>
)

export default InputForm