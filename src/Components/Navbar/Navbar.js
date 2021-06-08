import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className="NavbarItems">
                <a href="/" style={{textDecoration:"none"}}><h1 className="navbar-logo" style={{fontSize:"25px"}}>Employee Portal<i className="fas fa-users"></i></h1></a>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <Link to="/" className="nav-links" style={{ textDecoration: "none", color: "#fff" }}>
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to="/login" className="nav-links" style={{ textDecoration: "none", color: "#fff" }}>
                            Sign In
                        </Link>
                    </li>

                    <li>
                        <Link to="/signup" className="nav-links" style={{ textDecoration: "none", color: "#fff" }}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;