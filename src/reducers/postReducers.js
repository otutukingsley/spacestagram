import {
  NASA_IMAGE_ERROR,
  NASA_IMAGE_REQUEST,
  NASA_IMAGE_SUCCESS,
} from '../constants/postConstants'

export const initialState = {
  images: [],
  loading: false,
  error: null,
}

export const imageListReducer = (state = initialState, action) => {
  switch (action.type) {
    case NASA_IMAGE_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case NASA_IMAGE_SUCCESS:
      return {
        ...state,
        images: action.payload,
        loading: false,
      }
    case NASA_IMAGE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    default:
      return state
  }
}
