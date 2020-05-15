import React, { useState, Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBContainer,
MDBHamburgerToggler, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import '../sass/Hamburger.sass'
import {Link} from 'react-router-dom'

function Hamburger(props) {
    const [collapse1, setCollapse1] = useState(false)
    const [collapseID, setCollapseID] = useState()

  return (
      <div id="hamNav">
        <MDBNavbar light>
          <MDBContainer>
            <MDBNavbarBrand>
            <MDBNavLink to="/">Simply Basic</MDBNavLink>
            </MDBNavbarBrand>
            <MDBHamburgerToggler color="#555553" id="hamburger1" isOpen={false} onClick={()=> setCollapse1(!collapse1)} />
              <MDBCollapse isOpen={collapse1} navbar>
                <MDBNavbarNav style={{backgroundColor: 'white'}} left>
                  <MDBNavItem >
                    <MDBNavLink to="/page" onClick={()=> {props.setCategory("Dresses")
                                                    localStorage.setItem('category', JSON.stringify("Dresses"))}}>Dresses</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                  <MDBNavLink to="/page" onClick={()=> {props.setCategory("Tops")
                                                    localStorage.setItem('category', JSON.stringify("Tops"))}}>Tops</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                  <MDBNavLink to="/page" onClick={()=> {props.setCategory("Earrings")
                                                    localStorage.setItem('category', JSON.stringify("Earrings"))}}>Earrings</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                  <MDBNavLink to="/page" onClick={()=> {props.setCategory("Bracelets")
                                                    localStorage.setItem('category', JSON.stringify("Bracelets"))}}>Bracelets</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                  <MDBNavLink to="/page" onClick={()=> {props.setCategory("Necklaces")
                                                    localStorage.setItem('category', JSON.stringify("Necklaces"))}}>Necklaces</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                  <MDBNavLink to="/page" onClick={()=> {props.setCategory("Sale")
                                                    localStorage.setItem('category', JSON.stringify("Sale"))}}>Sale</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
        </div>
    );
}

export default Hamburger;