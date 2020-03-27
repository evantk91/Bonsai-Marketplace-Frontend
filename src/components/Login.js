import React from 'react';
import PageHeader from './PageHeader';
import UserSignup from './UserSignup';
import UserLogin from './UserLogin';
import CoverPhoto from './CoverPhoto';
import PageFooter from './PageFooter';
import './Login.css'

export default function Login(props) {
    return(
        <div className="home-page">
            <PageHeader/>
            <div className="form-container">
                <UserSignup/>
                <UserLogin {...props} login={props.login}/>
            </div>
            <CoverPhoto/>
            <PageFooter/>
        </div>
    )
}