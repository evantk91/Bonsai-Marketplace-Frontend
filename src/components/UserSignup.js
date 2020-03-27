import React, { Component } from 'react'
import './UserSignup.css'

class UserSignup extends Component {

    state = {
        username: "",
        email: "",
        password: "",
    }

    handleChange = (event) => {
        let {name, value} = event.target
        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.setState({message: `WELCOME ${this.state.username}`})

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
    }

    render() {
        return(
            <form className="signup-form" onSubmit={this.handleSubmit}>
                <h2 className="signup-form-header">Sign up below</h2>
                <input name="username" value={this.state.username} onChange={this.handleChange} placeholder="username"/>
                <input name="email" value={this.state.email} onChange={this.handleChange} placeholder="email"/>
                <input name="password" value={this.state.password} onChange={this.handleChange} placeholder="password"/>
                <div className="signup-form-submit-container">
                    <input className="signup-form-submit" value="sign up here" type="submit" />
                </div>
            </form>
        )
    }
}

export default UserSignup