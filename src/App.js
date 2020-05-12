import React, {useState, useEffect} from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow, MDBIcon } from "mdbreact";
import "./sass/App.sass";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
  } from "mdbreact";
import NavbarPage from './components/NavbarPage.js'
import EcommercePage from './components/EcommercePage'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import ShoppingCart from './components/ShoppingCart'
import Checkout from './components/Checkout'
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import {getProducts} from './services/api-helper'
import Home from './components/Home'
import SearchPage from './components/SearchPage'
import ProductDetail from './components/ProductDetail'

function App() {
  const [user, setUser] = useState(()=>{
    const result = localStorage.getItem('user')
    return result? JSON.parse(result): []
  })
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState(()=>{
    const result = localStorage.getItem('category')
    return result? JSON.parse(result): []
  }
  )
  const [searchData, setSearchData] = useState([])
  const [detail, setDetail] = useState(()=>{
    const result = localStorage.getItem('detail')
    return result? JSON.parse(result): []
  })


  useEffect(()=>{
    const makeAPICall=async()=>{
      const res = await getProducts()
      setProducts(res.data)
    }
    makeAPICall()
  },[])


    return (
      <>
        <header>
          <div className="icons">
            <a href="http://www.facebook.com" target="_blank"><MDBIcon fab icon="facebook-f" /></a>
            <a href="http://www.instagram.com" target="_blank"><MDBIcon fab icon="instagram" /></a>
            <a href="http://www.twitter.com" target="_blank"><MDBIcon fab icon="twitter" /></a>
          </div>
          <div className="cartsection">
          {user ? 
          <>
            <MDBDropdown>
              <MDBDropdownToggle nav caret style={{color: 'white'}}>
                <MDBIcon far icon="user" /><span style={{marginLeft: '15px'}}>My Account</span></MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Profile</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Orders</MDBDropdownItem>
                  <Link to='/'><MDBDropdownItem href="#!"onClick={()=>{setUser(); localStorage.setItem('user', JSON.stringify(''))}}>Log Out</MDBDropdownItem></Link>
              </MDBDropdownMenu>
            </MDBDropdown>
            <Link to='/cart'><MDBIcon icon="shopping-basket" /></Link></> :<><Link to='/login' className="profile"><MDBIcon far icon="user" /><span>Login</span></Link><Link to='/cart'><MDBIcon icon="shopping-basket" /><span className="counter">22</span></Link></>}
          </div>
        </header>
        <NavbarPage setCategory={setCategory} setSearchData={setSearchData}/>
        <div className="information">
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/page'><EcommercePage products={products} category={category} setDetail={setDetail}/></Route>
          <Route path='/search'><SearchPage setDetail={setDetail} searchData={searchData}/></Route>
          <Route path='/login'><LogIn setUser={setUser} /></Route>
          <Route path='/signup'><SignUp setUser={setUser}/></Route>
          <Route path='/detail'><ProductDetail detail={detail} user={user}/></Route>
          <Route path='/cart'><ShoppingCart /></Route>
          <Route path='/checkout'><Checkout /></Route>
          <Redirect to ='/'></Redirect>
        </Switch> 
        </div>
      </>
    );
}

export default App;
