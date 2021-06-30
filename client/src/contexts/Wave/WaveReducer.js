import { GET_DATA, SET_LOADING } from "./types";
const WaveReducer = (state, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, data: action.data, loading: false };
    case SET_LOADING:
      return { ...state, loading: true };
    default:
      break;
  }
};

export default WaveReducer;
