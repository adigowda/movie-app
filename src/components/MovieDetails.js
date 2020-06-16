import axios from 'axios'

const movieDetails = async (inputVal) => {
    let response = await axios(`http://www.omdbapi.com/?apikey=7ddff28e&t=${inputVal}`)
    return response.data
}

export default movieDetails