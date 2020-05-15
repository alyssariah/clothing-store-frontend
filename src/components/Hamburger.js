import React, { useState, Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBContainer,
MDBHamburgerToggler, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBNavbarToggler} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import '../sass/Hamburger.sass'
import {Link} from 'react-router-dom'

function Hamburger(props) {
    const [collapse13, setCollapse13] = useState(false)
    const [collapseID, setCollapseID] = useState()

  return (
      <div id="hamNav">
        <MDBNavbar light>
          <MDBContainer>
            <MDBNavbarBrand>
            <MDBNavLink to="/">Simply Basic</MDBNavLink>
            </MDBNavbarBrand>
            <MDBNavbarToggler color="#555553" className="gradient" tag="button" onClick={()=> setCollapse13(!collapse13)} >
            <span className="white-text">
                <MDBIcon icon="bars" />
              </span>
              </MDBNavbarToggler>
              <MDBCollapse isOpen={collapse13} navbar>
                <MDBNavbarNav style={{backgroundColor: 'white'}} left>
                  <MDBNavItem >
                    <MDBNavLink to="/page" onClick={()=> {props.setCategory("Dresses")
                                                    localStorage.setItem('category', JSON.stringify("Dresses"))
                                                    setCollapse13(!collapse13)}}>Dresses</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                  <MDBNavLink to="/page" onClick={()=> {props.setCategory("Tops")
                                                    localStorage.setItem('category', JSON.stringify("Tops"))
                                                    setCollapse13(!collapse13)}}>Tops</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                  <MDBNavLink to="/page" onClick={()=> {props.setCategory("Earrings")
                                                    localStorage.setItem('category', JSON.stringify("Earrings"))
                                                    setCollapse13(!collapse13)}}>Earrings</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                  <MDBNavLink to="/page" onClick={()=> {props.setCategory("Bracelets")
                                                    localStorage.setItem('category', JSON.stringify("Bracelets"))
                                                    setCollapse13(!collapse13)}}>Bracelets</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                  <MDBNavLink to="/page" onClick={()=> {props.setCategory("Necklaces")
                                                    localStorage.setItem('category', JSON.stringify("Necklaces"))
                                                    setCollapse13(!collapse13)}}>Necklaces</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                  <MDBNavLink to="/page" onClick={()=> {props.setCategory("Sale")
                                                    localStorage.setItem('category', JSON.stringify("Sale"))
                                                    setCollapse13(!collapse13)}}>Sale</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
        </div>
    );
}

export default Hamburger;