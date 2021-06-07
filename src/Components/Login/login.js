import React, { useState } from "react";
import './login.css';
import { Link, useHistory} from "react-router-dom";
import axios from 'axios';

function Login() {
    const [signinDetails, setsigninDetails] = useState({
        email: "",
        password: "",
      });

      let history = useHistory();

      const onChangeHandler = (e) => {
        let user = signinDetails;
        user[e.target.name] = e.target.value;
        setsigninDetails(user);
      };
    
      const onSubmitHandler = async (e) => {
        e.preventDefault();
        axios.post(`https://employeerubybackend.herokuapp.com/SignIn`, { signinDetails })
      .then(res => {
        console.log(res);
        console.log(res.data);
        console.log(res.status);
        if(res.data.validation==="true")
        {
          console.log(res.data.validation);
          localStorage.setItem('userDetails', JSON.stringify(res.data));
          history.push('/profile')
          alert("Successfully logged in...");
        }
      })
        return;        
      }

    return (
        <div className="login">
            <div className="acontainer" id="acontainer">
                <div className="form-acontainer sign-in-acontainer">
                    <form onSubmit={onSubmitHandler}>
                        <h1>Sign In</h1>
                        <br></br><br></br>
                        <input type="email" name="email" placeholder="Email" onChange={onChangeHandler}/>
                        <input type="password" name="password" placeholder="Password" onChange={onChangeHandler}/>
                        <a href="/#">Forgot Your Password ?</a>

                        <input type="submit" value="sign in" />
                    </form>
                </div>
                <div className="overlay-acontainer">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            <h1>Hello!</h1>
                            <p>Enter your details in employee portal to manage your data</p>
                            <Link to = "/signup"><button className="ghost" id="signUp">Sign Up</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;