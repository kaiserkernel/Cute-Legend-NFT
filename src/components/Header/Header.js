import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar as Nb, Container, Nav, Image, Button
} from 'react-bootstrap';

class Header extends Component {
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > 20) {
            document.querySelector(".navbar").className = "navbar navbar-expand scroll";
        } else {
            document.querySelector(".navbar").className = "navbar navbar-expand";
        }
    };
    render() {
        return (
            <header id="header">
                {/* Navbar */}
                <nav className="navbar navbar-expand">
                    <div className="container header">
                        {/* Navbar Brand*/}
                        <Link className="navbar-brand text-center" to="/">
                            <img className="navbar-brand-sticky" src="assets/img/logo.png" alt="sticky brand-logo" style={{ width: "100px" }} />
                        </Link>
                        {/* Navbar */}
                        <ul className="navbar-nav items left-header">
                            <li className="nav-item dropdown">
                                <Nav.Link className="nav-link" href="#about">ABOUTUS</Nav.Link>
                            </li>
                            <li className="nav-item">
                                <Nav.Link href="#roadmap" className="nav-link">ROADMAP</Nav.Link>
                            </li>
                            <li className="nav-item">
                                <Nav.Link className="nav-link" href="#team">TEAM</Nav.Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Nav.Link className="nav-link" href="#faq">FAQ</Nav.Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav items ml-auto">
                            <li className="nav-item">
                                <a href="https://github.com" className="nav-link social-link">
                                    <img src="assets/img/github.png" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#roadmap" className="nav-link social-link">
                                    <img src="assets/img/discord.png" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#roadmap" className="nav-link social-link">
                                    <img src="assets/img/twitter.png" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#roadmap" className="nav-link social-link">
                                    <img src="assets/img/instagram.png" />
                                </a>
                            </li>
                        </ul>
                        {/* Navbar Toggler */}
                        <ul className="navbar-nav toggle">
                            <li className="nav-item">
                                <Link to="#" className="nav-link" data-toggle="modal" data-target="#menu">
                                    <i className="fas fa-bars toggle-icon m-0" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;