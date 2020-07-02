import React from 'react';
import './ShipCard.css';
import '../../../../Images/spacex.jpg';

class ShipCard extends React.Component {
	render() {
        return (
            <div>
                <h2>Ships</h2>
                <div class="shipsContainer">
                    {
                    this.props.Ships.map((Ship) => 
                        <div class="shipCard">
                            <h2 class="shipHeading">{Ship.ship_name}</h2>
                            <div class="shipImage" style={{backgroundImage: (Ship.image == null ? "url(spacex.jpg)" : "url(" + Ship.image + ")")}}></div>
                            <div class="shipInfo">
                                <p>Home Port: {Ship.home_port}</p>
                                <p>Type: {Ship.ship_type}</p>  
                                <p>Ship Roles:</p>
                                <ul>
                                    <li>{Ship.roles[0]}</li>
                                    {(Ship.roles[1] ? <li>{Ship.roles[1]}</li> : '')}
                                </ul>
                            </div>
                        </div>   
                    )}
                </div>
            </div>
        )
	}
};

export default ShipCard