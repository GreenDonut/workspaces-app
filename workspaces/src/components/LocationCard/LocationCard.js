import React, { Component } from 'react';
import './LocationCard.css'

class LocationCard extends Component {
    render() {
        return (
            <div>
                <div className="br4 mw5 ma3 mw5">
                    <h4 className="tc">Location Name</h4>
                    <h4 className="tc">Address</h4>
                </div>   
            </div>
        );
    }
}

export default LocationCard;