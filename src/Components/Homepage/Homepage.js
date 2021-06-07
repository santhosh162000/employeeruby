import React from 'react'
import './Homepage.css';
import Homeimage from '../../Assets/undraw_Team_page_re_cffb.png';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Homepage() {
    const onload = async (e) => {
        axios.get(`https://employeerubybackend.herokuapp.com/`)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
        return;        
      }
    return (
        <div className="homepage">
            <h1>Welcome to Employee Engagement Portal</h1>
            <br></br>
            <div className="homebutton">
              <Link to="/login" onClick={onload}>
                  <button className="homebtn1">SIGN IN</button>
                </Link>
                
                <Link to="/signup" onClick={onload}>
                  <button>SIGN UP</button>
                </Link>
              </div>
              <br></br>
            <img src = {Homeimage} alt='Employee'></img>
        </div>
    )
}

export default Homepage;