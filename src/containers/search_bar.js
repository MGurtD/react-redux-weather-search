import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { term : '' };

        // Bind the functions to the context
        this.onInputChange = this.onInputChange.bind(this); 
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState( { term : event.target.value } );
    }

    onFormSubmit(event) {
        event.preventDefault(); // Avoid the automatic form submit
        
        // We need to go and fetch the Weather Data 
        this.props.fetchWeather(this.state.term, this.props.ipInfo.country);
        this.setState({ term : '' });
    }

    render() {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>

                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Get a five-day forecast in your favourite cities."
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="submit">
                        Submit
                    </button>
                </span>

            </form>
        );
    }

}

// Bind the ipInfo from redux store to ReactComponent state
function mapStateToProps({ ipInfo }) {
    return { ipInfo };
}

// Bind the action creator as props to the container
function mapDispatchToProps(dispatch) {
    return bindActionCreators( { fetchWeather }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);