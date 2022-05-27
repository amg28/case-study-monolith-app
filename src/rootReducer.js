import { combineReducers } from 'redux';
import { HomeReducer } from './app/home';
import { PollutionReducer } from './app/pollution';

export default combineReducers({
	homeState: HomeReducer,
	pollutionState: PollutionReducer,
});