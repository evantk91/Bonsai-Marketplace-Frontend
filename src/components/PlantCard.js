import React from 'react';
import './PlantCard.css';

export default function PlantCard(props) {

    const photoURL = props.plant.photo
    console.log(photoURL)

    return(
        <div className="plant-card">
            <div className="plant-image-container">
                <img className="plant-image" src={props.plant.photo} alt="plant"/>
            </div>
            <div className="plant-details-container">
                <h2 className="plant-detail">Title: <span>{props.plant.title}</span></h2>
                <h2 className="plant-detail">Species: <span>{props.plant.species}</span></h2>
                <h2 className="plant-detail">Price: <span>{props.plant.price}</span></h2>

            </div>
        </div>
    )
}