import axios from 'axios'
import {
  NASA_IMAGE_ERROR,
  NASA_IMAGE_REQUEST,
  NASA_IMAGE_SUCCESS,
} from '../constants/postConstants.js'

export const getNasaImages = () => async (dispatch) => {
  try {
    dispatch({
      type: NASA_IMAGE_REQUEST,
    })

    const { data } = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&count=5`,
    )

    dispatch({
      type: NASA_IMAGE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: NASA_IMAGE_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
