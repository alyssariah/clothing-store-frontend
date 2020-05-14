import React, {useState} from "react";
import { MDBRow, MDBCol, MDBInput, MDBCard, MDBCardBody } from 'mdbreact';
import {registerNewUser} from '../services/api-helper'
import {Redirect} from 'react-router-dom'

function SignUp(props){
  const [value, setValue] = useState({
    "first_name": "",
    "last_name": "",
    "email": "",
    "password": ""
  })
  const [verify, setVerify] = useState(false)
  const [alert, setAlert] = useState(false)

  const handleFirst = (e) =>{
    let newValue = {...value}
    newValue.first_name = e.target.value
    setValue(newValue)
  }
  const handleLast = (e) =>{
    let newValue = {...value}
    newValue.last_name = e.target.value
    setValue(newValue)
  }

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

  const handleSignUp = async(e) =>{
    e.preventDefault()
    const res = await registerNewUser(value)
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
    <div className="form" style={{position: 'absolute', top:'20vh'}}>
      <MDBRow >
        <MDBCol md="4">
          <MDBCard>
            <MDBCardBody>
              <form onSubmit={handleSignUp}>
                <p className="h4 text-center py-4">Sign up</p>
                {alert && <p style={{color: 'red', textAlign: 'center'}}>Error occured. Try again! <br/> Make sure your password is at least 8 characters long</p>}
                <div className="grey-text">
                  <MDBInput
                    label="First name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    onChange={handleFirst}
                  />
                  <MDBInput
                    label="Last name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    onChange={handleLast}
                  />
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
                  {/* <MDBInput
                    label="Confirm your email"
                    icon="exclamation-triangle"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  /> */}
                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    onChange={handlePassword}
                  />
                </div>
                <div className="text-center"  style={{margin: '0', paddingBottom: '30px'}}>
                  <button className='cart-btn' style={{margin: '0', width: '14vw', borderRadius: '60px', padding:'10px'}}type="submit">
                    Register
                  </button>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    {verify && <Redirect to="/" />}
    </div>
  );
};

export default SignUp;