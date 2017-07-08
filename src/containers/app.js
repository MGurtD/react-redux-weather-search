import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchIpInformation } from '../actions/fetch_ip_info';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import InformationLabel from '../containers/information_label';

class App extends Component {
  componentWillMount() {
    this.props.fetchIpInformation();
  }

  render() {
    return (
      <div>
        <InformationLabel />
        <SearchBar/>
        <WeatherList />
      </div>
    );
  }
}

// Bind the action creator as props to the container
function mapDispatchToProps(dispatch) {
    return bindActionCreators( { fetchIpInformation }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);