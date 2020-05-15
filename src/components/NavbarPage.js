import React, { useState } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import {Link, Redirect} from 'react-router-dom'
import '../sass/Navbar.sass'
import { MDBCol } from "mdbreact";
import {searchData} from '../services/api-helper'


function NavbarPage(props) {
  const [search, setSearch] = useState('')
  const [showResults, setShowResults] = useState(false)
  const handleSearch =(e)=>{
    setSearch(e.target.value)
  }
  const submitSearch = async(e) =>{
    e.preventDefault()
    const res = await searchData(search)
    props.setSearchData(res.data)
    setShowResults(true)
    setShowResults(false)
    setSearch('')
  }

  return (
    <>
    <nav id="nav">
      <MDBNavbar dark expand="md">
        <MDBNavbarBrand>
          <MDBNavLink to="/"><strong>Simply Basic</strong></MDBNavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler/>
        <MDBCollapse id="navbarCollapse3"navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/page" onClick={()=> {props.setCategory("Dresses")
                                                    localStorage.setItem('category', JSON.stringify("Dresses"))}}>Dresses</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/page" onClick={()=> {props.setCategory("Tops")
                                                    localStorage.setItem('category', JSON.stringify("Tops"))}}>Tops</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Accessories</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                <MDBDropdownItem>
                    <Link to="/page" onClick={()=> {props.setCategory("Earrings"); localStorage.setItem('category', JSON.stringify("Earrings"))}}>
                    Earrings
                    </Link>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <Link to="/page" onClick={()=> {props.setCategory("Bracelets"); localStorage.setItem('category', JSON.stringify("Bracelets"))}}>
                    Bracelets
                  </Link >
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <Link to="/page" onClick={()=> {props.setCategory("Necklaces"); localStorage.setItem('category', JSON.stringify("Necklaces"))}}>
                    Necklaces
                  </Link>
                </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/page" onClick={()=> {props.setCategory("Sale")
                                                    localStorage.setItem('category', JSON.stringify("Sale"))}}>Sale</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
          <form onSubmit={submitSearch}>
            <MDBCol md="20">
              <input className="form-control" type="text" value={search} placeholder="Search" aria-label="Search" onChange={handleSearch} />
            </MDBCol>
          </form>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </nav>
    {showResults && <Redirect to='/search'/>}
    </>
    );
  }

export default NavbarPage;