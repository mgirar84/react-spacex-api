import React from 'react';
import MissionCard from './MissionCard/MissionCard';


class MissionsLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        missions:[]
    }

    //populates missions with data from api to create an array of objects
    this.MissionsLoader()
  }

  MissionsLoader = () => {
    fetch('https://api.spacexdata.com/v3/missions')
      .then(data => data.json())
        .then((data) => {
          this.setState({
            missions: data,
          })
        })
  }

  
  
    render() {
    return (
    
        <MissionCard missions={this.state.missions}/>
    )
    }
}

export default MissionsLoader