import React from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar as Nb, Container, Nav, Image, Button
} from 'react-bootstrap';

const Scrollup = () => {
    return (
        <div id="scroll-to-top" className="scroll-to-top">
            <Nav.Link href="#header" className="scroll-anchor">
                <i className="fas fa-arrow-up" />
            </Nav.Link>
        </div>
    );
};

export default Scrollup;