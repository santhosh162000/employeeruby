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
                        <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                            <a className="nav-links" href="/" style={{ textDecoration: "none", color: "#fff" }}>Home</a>
                        </Link>
                    </li>

                    <li>
                        <Link to="/login" style={{ textDecoration: "none", color: "#fff" }}>
                            <a className="nav-links" href="/login" style={{ textDecoration: "none", color: "#fff" }}>Sign In</a>
                        </Link>
                    </li>

                    <li>
                        <Link to="/signup" style={{ textDecoration: "none", color: "#fff" }}>
                            <a className="nav-links" href="/signup" style={{ textDecoration: "none", color: "#fff" }}>Sign Up</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;