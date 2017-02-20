import axios from 'axios';

const API_KEY = "7f2ca0418f5fb33dcdd68642da3f8609";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function GetWeatherAction(city, country){
	const url = `${ROOT_URL}&q=${city},${country}`; 

	const request = axios.get(url); 
	
	return {
		type: FETCH_WEATHER,
		payload: request    //redux-promise checks to see if the action has a promise as a payload.
	}						//if no, it allows payload through to the reducers
}							//if yes, stops the action, and waits for promise to resolve then creates a 
							//new action and sends to reducers.  