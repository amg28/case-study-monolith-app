import React from "react";

const Main = (props) => {
  return (
    <div className="main-wrapper">
      {props.photo ? (
        <img src={props.photo.urls.regular} alt={props.photo.alt_description} />
      ) : (
        <img src="" alt={"Default mumbai location"} />
      )}
      <div className="info-wrapper">
        {props.pullutionData ? (
          <h2>Air Quality Index in {props.cityName}: {props.pullutionData.main.aqi}</h2>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
};

export default Main;
