import React from 'react';

import { 
    Navbar,
    Nav,
    NavbarBrand,
    NavbarToggler
} from 'reactstrap';


export default (props) => {
    const navbarTogglerClick = (e) => {
        e.preventDefault();
        document.getElementById('main-wrapper').classList.toggle('toggled');
    };

    return (
        <header>
            <Navbar color="light" light >
                <NavbarBrand href="/">
                    <img src="https://via.placeholder.com/150x50" />
                </NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavbarToggler onClick={navbarTogglerClick} />
                </Nav>
            </Navbar>
        </header>
    )
}