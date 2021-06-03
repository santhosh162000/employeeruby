import React from 'react'
import '../Login/login.css';
import { Link } from 'react-router-dom';
function Signup() {
    return (
        <div class="login">
            <div class="container right-panel-active" id="container">
                <div class="form-container sign-up-container">

                <form action="">
                    <h1>Create Account</h1>

                    <input type="text" name="name" placeholder="Name"/>
                    <input type="email" name="email" placeholder="Email"/>
                    <input type="password" name="password" placeholder="Password"/>
                    <button>SignUp</button>
                </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <Link to = "/"><button class="ghost" id="signIn">Sign In</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;