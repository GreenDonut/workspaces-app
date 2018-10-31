import React, { Component } from 'react';
import LocationCard from '../LocationCard/LocationCard';
import '../LocationCard/LocationCard.css';

class LocationList extends Component {
    render() {
        return (
            <div>
                <div class="mw9 center ph3-ns">
                <div class="cf ph2-ns">
                    <div class="fl w-100 w-25-ns pa2">
                        <div class="outline bg-white pv4 grow">
                      
                          {  /*<img src={require('./LazyPanda.png')} height="200" width="250"/>*/}
                          <LocationCard />
                         
                        </div>
                    </div>
                    <div class="fl w-100 w-25-ns pa2">
                    <div class="outline bg-white pv4 grow">
                             <LocationCard />
                        </div>
                    </div>
                    <div class="fl w-100 w-25-ns pa2">
                    <div class="outline bg-white pv4 grow">
                             <LocationCard />
                        </div>
                    </div>
                    <div class="fl w-100 w-25-ns pa2">
                    <div class="outline bg-white pv4 grow">
                             <LocationCard />
                        </div>
                    </div>
                    <div class="fl w-100 w-25-ns pa2">
                        <div class="outline bg-white pv4 grow">
                             <LocationCard />
                        </div>
                    </div>
                    <div class="fl w-100 w-25-ns pa2">
                        <div class="outline bg-white pv4 grow">
                             <LocationCard />
                        </div>
                    </div>
                    <div class="fl w-100 w-25-ns pa2">
                        <div class="outline bg-white pv4 grow">
                             <LocationCard />
                        </div>
                    </div>
                    <div class="fl w-100 w-25-ns pa2">
                        <div class="outline bg-white pv4 grow">
                             <LocationCard />
                        </div>
                    </div>
                    <div class="fl w-100 w-25-ns pa2">
                        <div class="outline bg-white pv4 grow">
                             <LocationCard />
                        </div>
                    </div>
                    <div class="fl w-100 w-25-ns pa2">
                        <div class="outline bg-white pv4 grow">
                             <LocationCard />
                        </div>
                    </div>
                    <div class="fl w-100 w-25-ns pa2">
                        <div class="outline bg-white pv4 grow">
                             <LocationCard />
                        </div>
                    </div>
                    <div class="fl w-100 w-25-ns pa2">
                        <div class="outline bg-white pv4 grow">
                             <LocationCard />
                        </div>
                    </div>
                    <div class="fl w-100 w-25-ns pa2">
                        <div class="outline bg-white pv4 grow">
                             <LocationCard />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default LocationList;