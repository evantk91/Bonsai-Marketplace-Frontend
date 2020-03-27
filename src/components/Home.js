import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from './PageHeader'
import PageFooter from './PageFooter'
import PlantList from './PlantList'
import './Home.css'

class Home extends Component {
    state = {
        plants: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/plants', {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${localStorage.token}`
            }
        })
        .then(response => response.json())
        .then(plants => this.setState({plants}))
    }

    render() {
        return(
            <div className="home-page">
                <PageHeader/>
                <div className="welcome-message-container">
                    <h1 className="welcome-message">Welcome {localStorage.username}</h1>
                </div>
                <div className="logout-button-container">
                    <Link to='/login'><button className="logout-button">LOG OUT</button></Link>
                </div>
                <PlantList plants={this.state.plants} />
                <PageFooter/>
            </div>
        )
    }
}

export default Home;