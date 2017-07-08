import React, { Component } from 'react';

class GoogleMap extends Component {

    // Method called automatically after the component has been rendered 
    // on the screen by ReactJS
    componentDidMount() {
        // Create an embeded GoogleMaps into the <div> rendered on the render() method
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: { 
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        return <div ref="map"/>
    }

}

export default GoogleMap;