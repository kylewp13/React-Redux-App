import axios from 'axios'

export const DATA_LOAD_START = 'DATA_LOAD_START';
export const DATA_LOAD_SUCCESS = 'DATA_LOAD_SUCCESS';
export const DATA_LOAD_FAILURE = 'DATA_LOAD_FAILURE';

export const getData = () => dispatch => {
    // console.log('hello')
    dispatch({ type: DATA_LOAD_START })
    axios
        .get('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=1&search=code')
        .then(res => {
            // console.log(res)
            dispatch({ 
                type:  DATA_LOAD_SUCCESS,
                payload: res.data })
        })
        .catch(err => {
            // console.log(err)
            dispatch({ 
                type:  DATA_LOAD_FAILURE,
                payload: err })
})
}