import React, { Component } from 'react';

class SearchPage extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Enter your location e.g. 'Sydney'"></input>
                <button className="">Search</button>
                <div><button className="mt2">Filter</button></div>
            </div>
        );
    }
}

export default SearchPage;