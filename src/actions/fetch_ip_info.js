import axios from 'axios';
const ROOT_URL = `https://ipinfo.io/json`;

export const FETCH_IP_INFO = 'FETCH_IP_INFO';

export function fetchIpInformation() {
    const request = axios.get(ROOT_URL);

    console.log('action creator fetch_ip_info: ', request);

    return {
        type : FETCH_IP_INFO,
        payload : request
    };

}