import { GET_PHOTOS, GET_POLLUTION_DATA, GET_POLLUTION_CITY_NAME } from "./ActionTypes";
import { getRandomInt } from "../utils/ReusableFunctions";

const INITIAL_STATE = {
  photos: [],
  pollutionCityName: '',
  pollutionData: null,
};

const PollutionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      let randomNum1, randomNum2;
      randomNum1 = getRandomInt(action.data.length);
      randomNum2 = getRandomInt(action.data.length);
      while (randomNum1 === randomNum2) {
        randomNum2 = getRandomInt(9);
      }
      let photos = [action.data[randomNum1], action.data[randomNum2]];
      return {
        ...state,
        photos: photos,
      };
    case GET_POLLUTION_DATA:
      return {
        ...state,
        pollutionData: action.data,
      };
      case GET_POLLUTION_CITY_NAME:
        return {
          ...state,
          pollutionCityName: action.data,
        };
    default:
      return state;
  }
};

export default PollutionReducer;
