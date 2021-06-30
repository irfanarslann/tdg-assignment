/* eslint-disable no-unused-vars */
import { useContext, useEffect } from "react";
import { WaveContext } from "../contexts/Wave/WaveContext";
import Chart from "./Chart";
const Main = () => {
  const { data, loading } = useContext(WaveContext);

  return (
    <div className="main">
      {loading && <h1> Loading...</h1>}
      <div className="title">{!loading && <h2>Data Graphics</h2>}</div>
      <div className="main-container">
        {data.sensor
          ? data.sensor.map((iter) => <Chart iter={iter} key={iter.name} />)
          : ""}
      </div>
    </div>
  );
};

export default Main;
