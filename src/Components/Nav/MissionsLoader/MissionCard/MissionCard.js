import React from 'react';
import './MissionCard.css';

class MissionCard extends React.Component {
	render() {
        return (
            <div class="missionContainer">
                {
                this.props.missions.map((mission) => 
                    <div class="missionCard">
                        <h2>{mission.mission_name}</h2>
                        <p>{mission.description}</p>
                    </div>   
                )}
            </div>
        )
	}
};

export default MissionCard