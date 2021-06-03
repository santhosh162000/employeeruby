import React from 'react'
import './login.css';
import { Link } from 'react-router-dom';
function Login() {
    return (
        <div class="login">
            <div class="container" id="container">
                <div class="form-container sign-in-container">
                    <form action="/#">
                        <h1>Sign In</h1>
                        
                        <input type="email" name="email" placeholder="Email"/>
                        <input type="password" name="password" placeholder="Password"/>
                        <a href="/#">Forgot Your Password</a>

                        <button>Sign In</button>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your details and start journey with us</p>
                            <Link to = "/signup"><button class="ghost" id="signUp">Sign Up</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;