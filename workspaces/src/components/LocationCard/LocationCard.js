import React, { Component } from 'react';
import './LocationCard.css'

class LocationCard extends Component {
    render() {
        return (
            <div>
                <div class="fl w-100 w-25-ns pa2">
                    <div class="outline bg-white pv4 grow">
                        <div className="center br4 mw5 ma3 mw5">
                            <img className=""
                                 src={require('../LocationList/LazyPanda.png')}
                                 height="150" width="250"/>
                            <h4 className="tc">Location Name</h4>
                            <h4 className="tc">Address</h4>
                        </div>   
                        
                         
                    </div>
                </div>
              
            </div>
        );
    }
}

export default LocationCard;