import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import IpInfo from './reducer_ip_info';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  ipInfo : IpInfo
});

export default rootReducer;
