import React, { useState } from "react";
import './registration.css';
import { Link, useHistory} from "react-router-dom";
import axios from 'axios';

function Registration() {
    const [signupDetails, setsignupDetails] = useState({
        name: "",
        email: "",
        password: "",
        empcode: "",
        address: "",
        joiningdate: "",
    
      });
      
      let history = useHistory();
    
      const onChangeHandler = (e) => {
        let user = signupDetails;
        user[e.target.name] = e.target.value;
        setsignupDetails(user);
      };
    
      const onSubmitHandler = async (e) => {
        e.preventDefault();
        axios.post(`https://employeerubybackend.herokuapp.com/SignUp`, { signupDetails })
          .then(res => {
            console.log(res);
            console.log(res.data);
            console.log(res.status);
            if(res.data.result==="Account Created")
            {
              alert("Successfully registered. Please login to continue...");
              history.push('/login')
            }
            else
            {
              alert("Account exist with this email.");
            }
          })
        return;        
      }

    return (
        <div className="registration">
            <div className="wrapper">
                <div className="title">
                Registration Form
                </div>
                <form onSubmit={onSubmitHandler}>
                <div className="form">
                <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={onChangeHandler}
              /><br></br>

              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={onChangeHandler}
              /><br></br>

              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={onChangeHandler}
              /><br></br>

              <input
                type="text"
                placeholder="Employee ID"
                name="empcode"
                onChange={onChangeHandler}
              /><br></br>

              <input
                type="text"
                placeholder="Address"
                name="address"
                onChange={onChangeHandler}
              /><br></br>

              <input
                type="date"
                placeholder="Joining date"
                name="joiningdate"
                onChange={onChangeHandler}
              /><br></br>

              <input type="submit" value="SUBMIT" />
              <Link to="/login">
                Have an account ?
              </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registration;