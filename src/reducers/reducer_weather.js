import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {

    switch (action.type) {
    case FETCH_WEATHER: 
        // Combine the existing array with a new one to returns a new state with appended requests
        
        // Vainilla Javascript -> state.concat( [action.payload.data] ); Last enter, last position
        // ES6 --> [ action.payload.data, ...state ]; Last enter, first position

        return [ action.payload.data, ...state ];; // [ city, city, city ]        
    }

    return state;
}