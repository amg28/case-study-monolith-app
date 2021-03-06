import Unsplash, { toJson } from "unsplash-js";
import { getPhotos, getPollution, getPollutionCityName } from "./PollutionAction";

const REACT_APP_UNSPLASH_ACCESS_KEY =
  "aRHpJcbcj_Ua4azaNTnqw6JlFHoAlBpkoTOlyHMAF8I";
const REACT_APP_WEATHER_APP_ID = "f6f756fb41c98cf1ec47e74d1f0fac56";

const unsplash = new Unsplash({
  accessKey: REACT_APP_UNSPLASH_ACCESS_KEY,
});

export const searchPhotoApi = (cityName = "mumbai") => {
  return function (dispatch) {
    unsplash.search
      .photos(cityName, 1, 10, { orientation: "landscape" })
      .then(toJson)
      .then((json) => {
        // Do something with the json object
        dispatch(getPhotos(json.results));
      })
      .catch((error) => {
        // Your flawless error handling code
        console.error("Error:", error);
      });
  };
};

export const getPollutionApi = (cityName = "Mumbai") => {
  return function (dispatch) {
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${REACT_APP_WEATHER_APP_ID}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const { lat, lon } = data[0];
        dispatch(getPollutionCityName(cityName));

        return fetch(
          `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${REACT_APP_WEATHER_APP_ID}`
        );
      })
      .then((response) => {
        return response.json();
      })
      .then((pollution) => {
        // eslint-disable-next-line no-console
        console.log({ pollution });
        dispatch(getPollution(pollution.list[0]));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
};
