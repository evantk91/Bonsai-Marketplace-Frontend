import React from 'react';
import './CoverPhoto.css';

export default function CoverPhoto(props) {

    return(
        <div className='cover-photo-container'>
            <img className='cover-photo' src={require('../photos/2 Bonsai - Delosperma cooperi formal upright.jpg')} alt='cover'/>
        </div>
    )
}