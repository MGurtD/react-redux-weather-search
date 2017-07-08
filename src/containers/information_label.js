import React, { Component } from 'react';
import { connect } from 'react-redux';

class InformationLabel extends Component {

    render(){
        if (!navigator.onLine) {
            return  <span className="label label-danger">Check your network connection...</span>;
        }

        return (
            <span className="label label-primary">

                { this.props.ipInfo.country } > { this.props.ipInfo.region } > { this.props.ipInfo.city }
            </span>
        );
    }

}

// Bind the ipInfo from redux store to ReactComponent state
function mapStateToProps({ ipInfo }) {
    return { ipInfo };
}

export default connect(mapStateToProps)(InformationLabel);