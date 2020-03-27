import React, { Component } from 'react'
import './UserLogin.css'

export default class UserLogin extends Component {

    state = {
        username: '',
        password: ''
    }

    componentDidMount() {
        localStorage.removeItem('token')
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        this.props.login(this.state)
            .then(() => this.props.history.push('/'))
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return(
            <form className='login-form' onSubmit={this.handleSubmit}>
                <h2 className="login-form-header">Log In Below</h2>
                <input name="username" value={this.state.username} onChange={this.handleChange} placeholder="username"/>
                <input name="password" value={this.state.password} onChange={this.handleChange} placeholder="password"/>
                <div className="login-form-submit-container">
                    <input className="login-form-submit" value="Log In" type="submit" />
                </div>
            </form>
        )
    }
}