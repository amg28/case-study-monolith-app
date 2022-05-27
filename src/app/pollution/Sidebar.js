import React from "react";
import Search from "./_utils/Search";

const Sidebar = (props) => {
  return (
    <>
      <Search search={props.search} onChange={props.onChange} />
      <div className="info-card">
        <h3>Pollution Details</h3>
        {props.pollutionData ? (
          props.pollutionData.main ? (
            <>
              <div className="item">
                <h4>Air Quality Index</h4>
                <h5>{props.pollutionData.main.aqi}</h5>
              </div>
              <div className="item">
                <h4>Сoncentration of CO μg/m3</h4>
                <h5>{props.pollutionData.components.co}</h5>
              </div>
              <div className="item">
                <h4>Сoncentration of NO μg/m3</h4>
                <h5>{props.pollutionData.components.no}</h5>
              </div>
              <div className="item">
                <h4>Сoncentration of NO2 μg/m3</h4>
                <h5>{props.pollutionData.components.no2}</h5>
              </div>
              <div className="item">
                <h4>Сoncentration of O3 μg/m3</h4>
                <h5>{props.pollutionData.components.o3}</h5>
              </div>
              <div className="item">
                <h4>Сoncentration of SO2 μg/m3</h4>
                <h5>{props.pollutionData.components.so2}</h5>
              </div>
              <div className="item">
                <h4>Сoncentration of PM2.5 μg/m3</h4>
                <h5>{props.pollutionData.components.pm2_5}</h5>
              </div>
              <div className="item">
                <h4>Сoncentration of PM10 μg/m3</h4>
                <h5>{props.pollutionData.components.pm10}</h5>
              </div>
              <div className="item">
                <h4>Сoncentration of NH3 μg/m3</h4>
                <h5>{props.pollutionData.components.nh3}</h5>
              </div>
            </>
          ) : (
            <h2>{props.pollutionData.message}</h2>
          )
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </>
  );
};

export default Sidebar;
