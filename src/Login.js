import React from 'react';
import './Login.css';


function Login() {
    return (

        <div className="login-container">
            <input type="text" className="login-input" placeholder="username" />
            <input type="password" className="login-input" placeholder="password" />
            <button>login</button>
        </div>
    )
}
export default Login;