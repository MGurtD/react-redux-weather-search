import { FETCH_IP_INFO } from '../actions/fetch_ip_info';

export default function(state = [], action) {

    switch (action.type) {
    case FETCH_IP_INFO: 
        console.log('reducer fetch_ip_info: ' + action.payload.data);

        return action.payload.data;    
    }

    return state;
}