import React, { Component } from 'react'
import './UserSignup.css'

class UserSignup extends Component {

    state = {
        username: "",
        password: ""
    }



    render() {
        return(
            <div className="signup-form-container">
                <form className="signup-form">
                    <h2 className="signup-form-header">Sign up below</h2>
                    <label>Username:</label>
                    <input name="username" value={this.state.username}/>
                    <label>Password:</label>
                    <input name="password" value={this.state.password} />
                    <div className="signup-form-submit-container">
                        <input className="signup-form-submit" value="sign up here" type="submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default UserSignup