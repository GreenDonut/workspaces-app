import React, { Component } from 'react';
import LocationCard from '../LocationCard/LocationCard';
import '../LocationCard/LocationCard.css';

class LocationList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div class="mw9 center ph3-ns">
                <div class="cf ph2-ns">

                   <LocationCard 
                         /*key={i}
                         location={locations[i].location}
                         address={locations[i].address}
        tags={locations[i].tags}*/
                   />
                </div>
                </div>
            </div>
        );
    }
}

export default LocationList;