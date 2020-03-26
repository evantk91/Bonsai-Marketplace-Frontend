import React from 'react';
import './CoverPhoto.css';

export default function CoverPhoto(props) {

    return(
        <div className='cover-photo-container'>
            <img className='cover-photo' src='https://web-app-kitchen-sink.s3.us-west-2.amazonaws.com/files/1585086163426_2%20Bonsai%20-%20Delosperma%20cooperi%20formal%20upright.jpg' alt='cover photo'/>
        </div>
    )
}