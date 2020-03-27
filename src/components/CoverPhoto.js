import React from 'react';
import './CoverPhoto.css';

export default function CoverPhoto(props) {

    return(
        <div className='cover-photo-container'>
            <img className='cover-photo' src='https://bonsai-marketplace.s3.us-east-2.amazonaws.com/1+Bonsai+-+Bougainvillea.jpg' alt='cover'/>
        </div>
    )
}