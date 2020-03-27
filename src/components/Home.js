import React, { Component } from 'react'
import { 
    
    Link } from 'react-router-dom'
import PageHeader from './PageHeader'
import PageFooter from './PageFooter'
import './Home.css'

class Home extends Component {
    state = {

    }

    render() {
        return(
            <div className="home-page">
                <PageHeader/>
                <div className="welcome-message-container">
                    <h1 className="welcome-message">Welcome</h1>
                </div>
                <Link to='/login'>Log Out</Link>
                
                <PageFooter/>
            </div>
        )
    }
}

export default Home;