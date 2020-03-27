import React, { Component } from 'react';
import PlantCard from './PlantCard';
import './PlantList';

class PlantList extends Component {
    showPlants = () => {
        return this.props.plants.map(plant => <PlantCard plant={plant}/>)
    }

    render() {
        return(
            <div className="plant-list">
                {this.showPlants()}
            </div>
        )
    }
}

export default PlantList;
    