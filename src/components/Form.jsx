import React from 'react'

const InputForm = ({ inputVal, handleChange, handleClick }) => (
    <div>
        <form className="wrapper" onSubmit={(e) => handleClick(e)} >
            <input
                value={inputVal}
                onChange={(e) => handleChange(e)}
                type="text"
                className="input"
                placeholder="Search for a movie..."
            />
            <button className='submitButton' type="submit">
                <i className="fas fa-search fa-2x"></i>
            </button>
        </form>
    </div>
)

export default InputForm