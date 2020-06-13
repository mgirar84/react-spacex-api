import React from 'react';
import ShipCard from './ShipCard/ShipCard';

class ShipLoader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        Ships:[]
        }

        //populates Ships with data from api to create an array of objects
        this.ShipsLoader()
    }

    ShipsLoader = () => {
        fetch('https://api.spacexdata.com/v3/Ships')
        .then(data => data.json())
            .then((data) => {
                this.setState({
                    Ships: data,
                })
            })
    }

    render() {
        return (
        <div>
            <ShipCard Ships={this.state.Ships}/>
        </div>
        )
    }
}

export default ShipLoader