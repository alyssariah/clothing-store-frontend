import React, {useState} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import {Link, Redirect} from 'react-router-dom'
import {loginUser} from '../services/api-helper'

const LogIn = (props) => {
  const [value, setValue] = useState({
    "email": "",
    "password": ""
  })
  const [verify, setVerify] = useState(false)
  const [alert, setAlert] = useState(false)
  const handleEmail = (e) =>{
    let newValue = {...value}
    newValue.email = e.target.value
    setValue(newValue)
  }
  const handlePassword = (e) => {
    let newValue = {...value}
    newValue.password = e.target.value
    setValue(newValue)
  }

  const handleLogIn = async(e) =>{
    e.preventDefault()
    const res = await loginUser(value)
    console.log(res)
    if(!res.data){
      setAlert(true)
    }
    else {
      localStorage.setItem('user', JSON.stringify(res.data))
      setVerify(true)
      props.setUser(res.data)
    }

  }
  return (
    <>
      <MDBRow style={{position: 'absolute', top:'20vh'}}>
        <MDBCol md="4">
          <MDBCard>
            <MDBCardBody >
              <form onSubmit={handleLogIn} >
                <p className="h4 text-center py-4">Login</p>
                {alert && <p style={{color: 'red', textAlign: 'center'}}>username and password do not match</p>}
                <div className="grey-text">
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    onChange={handleEmail}
                  />
                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    onChange={handlePassword}
                    type="password"
                    validate
                  />
                </div>
                <div className="text-center"  style={{margin: '0', paddingBottom: '30px'}}>
                  <button className='cart-btn' style={{margin: '0', width: '14vw', borderRadius: '60px', padding:'10px'}}type="submit">
                    LogIn
                  </button>
                </div>
                <p style={{textAlign: 'center'}}>Not a member? <Link to='/signup' style={{textDecoration: 'underline'}}>Join now</Link></p>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      {verify && <Redirect to="/" />}
    </>
  );
};

export default LogIn;