import React, {useState, useEffect} from "react";
import { MDBIcon } from "mdbreact";
import "./sass/App.sass";
import {
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
import Orders from './components/Orders'
import Profile from './components/Profile'
import {getCartItems} from './services/api-helper'


function App() {
  const [user, setUser] = useState(()=>{
    const result = localStorage.getItem('user')
    return result? JSON.parse(result): []
  })
  console.log("user", user)
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState(()=>{
    const result = localStorage.getItem('category')
    return result? JSON.parse(result): []
  }
  )
  const [searchData, setSearchData] = useState([])
  const [detail, setDetail] = useState(()=>{
    const result = localStorage.getItem('detail')
    return result? JSON.parse(result): ''
  })
  const [cart, setCart] = useState([])

  useEffect(()=>{
    const makeAPICall=async()=>{
      const res = await getProducts()
      setProducts(res.data)
      if(user.email){
        let res2 = await getCartItems(user.token)
        let results = res2.data.filter((item, index)=> item.ordered === false)
        setCart(results)
      }
    }
    makeAPICall()
  },[])

  const changeCart = async() => {
    let res = await getCartItems(user.token)
    let results = res.data.filter((item, index)=> item.ordered === false)
    setCart(results)
  }

    return (
      <>
        <header>
          <div className="icons">
            <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer"><MDBIcon fab icon="facebook-f" /></a>
            <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer"><MDBIcon fab icon="instagram" /></a>
            <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer"><MDBIcon fab icon="twitter" /></a>
          </div>
          <div className="cartsection">
          {user? 
            <MDBDropdown>
              <MDBDropdownToggle nav caret style={{color: 'white', padding: '0 15px'}}>
                <MDBIcon far icon="user" /><span style={{marginLeft: '15px'}}>My Account</span></MDBDropdownToggle>
                <MDBDropdownMenu>
                  <Link to='/profile'><MDBDropdownItem href="#!">Profile</MDBDropdownItem></Link>
                  <Link to='/orders'><MDBDropdownItem href="#!">Orders</MDBDropdownItem></Link>
                  <Link to='/'><MDBDropdownItem href="#!"onClick={()=>{setUser(); localStorage.setItem('user', JSON.stringify(''))}}>Log Out</MDBDropdownItem></Link>
              </MDBDropdownMenu>
            </MDBDropdown>: <Link to='/login' className="profile"><MDBIcon far icon="user" /><span>Login</span></Link>}
          <Link to='/cart'><MDBIcon icon="shopping-basket" /><span className="counter">{cart.length >0? cart.length: ''}</span></Link>
          </div>
        </header>
        <NavbarPage setCategory={setCategory} setSearchData={setSearchData}/>
        <div className="information">
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/page'><EcommercePage products={products} category={category} setDetail={setDetail}/></Route>
          <Route path='/search'><SearchPage setDetail={setDetail} searchData={searchData}/></Route>
          <Route path='/login'><LogIn setUser={setUser} setCart={setCart} /></Route>
          <Route path='/signup'><SignUp setUser={setUser}/></Route>
          <Route path='/orders'><Orders user={user}/></Route>
          <Route path='/profile'><Profile user={user}/></Route>
          <Route path='/detail'><ProductDetail detail={detail} user={user} changeCart={changeCart}/></Route>
          <Route path='/cart'><ShoppingCart cart={cart} setCart={setCart} user={user}/></Route>
          <Route path='/checkout'><Checkout /></Route>
          <Redirect to ='/'></Redirect>
        </Switch> 
        </div>
      </>
    );
}

export default App;
