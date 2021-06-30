import { useReducer, createContext, useEffect } from "react";
import WaveReducer from "./WaveReducer";
import { GET_DATA, SET_LOADING } from "./types";
import axios from "axios";
export const WaveContext = createContext();

const WaveContextProvider = (props) => {
  const initialState = {
    data: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(WaveReducer, initialState);

  //Get Data From API
  const getDataFromAPI = async () => {
    setLoading();
    try {
      const data = await axios.get("/api/data");
      dispatch({ type: GET_DATA, data: data.data });
    } catch (error) {
      console.error(error);
    }
  };
  //Set Loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  useEffect(() => {
    getDataFromAPI();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <WaveContext.Provider
      value={{
        data: state.data,
        loading: state.loading,
      }}
    >
      {props.children}
    </WaveContext.Provider>
  );
};

export default WaveContextProvider;
