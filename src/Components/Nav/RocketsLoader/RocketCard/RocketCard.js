import React from 'react';
import './RocketCard.css';
import '../../../../Images/spacex.jpg';

class RocketCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pic: "https://www.spacex.com/sites/spacex/files/styles/media_gallery_large/public/2009_-_01_liftoff_south_full_wide_ro8a1280_edit.jpg?itok=8loiSGt1",
            logo: "spacex.jpg"
        }
    }

	render() {
        return (
            <div>
                <h2>Rockets</h2>
                <div class="rocketContainer">
                    {
                    this.props.rockets.map((rocket) => 
                        <div class="rocketCard">
                            <h2 class="rocketHeading" key={rocket.id}>{rocket.rocket_name}</h2>
                            <div class="rocketImage" style={{backgroundImage: (rocket.flickr_images[0] === "https://www.spacex.com/sites/spacex/files/styles/media_gallery_large/public/2009_-_01_liftoff_south_full_wide_ro8a1280_edit.jpg?itok=8loiSGt1" ? "url(spacex.jpg)" : "url(" + rocket.flickr_images[0] + ")")}}></div>
                            <p class="rocketText rocketDescription">{rocket.description}</p>
                            <p class="rocketText">Cost per launch: ${rocket.cost_per_launch}</p>
                        </div>   
                    )}
                </div>
            </div>
        )
	}
};

export default RocketCard