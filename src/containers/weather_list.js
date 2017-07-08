import React, { Component } from 'react';
import  Chart from '../components/chart';
import  GoogleMap from '../components/google-map';
import { connect } from 'react-redux';

class WeatherList extends Component {
    renderWeather(cityData) {
        const cityName = cityData.city.name;
        // retrive temperatures, pressure and humidity from the list.main.<entity>
        const temperatures = cityData.list.map (weather => (weather.main.temp - 273.15));
        const pressures = cityData.list.map (weather => weather.main.pressure);
        const humidities = cityData.list.map (weather => weather.main.humidity);
        /* Vainilla Javascript
        const lon = cityData.city.coord.lon;
        const lat = cityData.city.coord.lat;
        */

        // ES6 - Retrive two elements from an object and set into two new variables
        const { lon, lat } = cityData.city.coord;

        return (
            <tr key={ cityName }>
                <td><GoogleMap lon={ lon } lat={ lat } /></td>
                <td><Chart data={ temperatures } color="orange" units="Cº"/></td>
                <td><Chart data={ pressures } color="green" units="hPa"/></td>
                <td><Chart data={ humidities } color="black" units="%"/></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (Cº)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.weather.map(this.renderWeather) }
                </tbody>
            </table>
        );
    }
}

/* Vainilla Javascript
function mapStateToProps(state) {
    return { weather : state.weather };
}*/

/** ES6 Javascript */
function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);