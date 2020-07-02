import React from 'react';
import './RoadsterCard.css';

class RoadsterCard extends React.Component {
	render() {
        console.log(this.props.roadster)
        return (
            <div>
                <h1>Tesla Roadster</h1>
                <div class="roadsterContainer">
                    <div class="roadsterCard">
                        <div class="roadsterText">
                            <h2>{this.props.roadster.name}</h2>
                            <p>{this.props.roadster.details}</p>
                        </div>
                        <div class="roadsterImage" style={{backgroundImage: (this.props.roadster.flickr_images[0] == null ? "url(spacex.jpg)" : "url(" + this.props.roadster.flickr_images[0] + ")")}}></div>
                    </div>   
                </div>
            </div>
        )
	}
};

export default RoadsterCard