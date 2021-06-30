/* eslint-disable no-unused-vars */
import { useContext, useEffect } from "react";
import { WaveContext } from "../contexts/Wave/WaveContext";
import Chart from "./Chart";
const Main = () => {
  const { data, loading } = useContext(WaveContext);
  
  return (
    <div>
      {loading && <h1> Loading...</h1>}
      <h2>Charts</h2>
      {data.sensor ? (
        data.sensor.map((iter) => <Chart iter={iter} key={iter.name} />)
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default Main;
