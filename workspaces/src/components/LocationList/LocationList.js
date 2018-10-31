import React, { Component } from 'react';
import LocationCard from '../LocationCard/LocationCard';
import '../LocationCard/LocationCard.css';

class LocationList extends Component {
    render() {
        return (
            <div>
                <div class="mw9 center ph3-ns">
                <div class="cf ph2-ns">
                   <LocationCard />
                   <LocationCard />
                   <LocationCard />
                   <LocationCard />
                   <LocationCard />
                   <LocationCard />
                   <LocationCard />
                   <LocationCard />
                   <LocationCard />
                   <LocationCard />
                   <LocationCard />
                </div>
                </div>
            </div>
        );
    }
}

export default LocationList;