import React from 'react'
import {  MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon } from "mdbreact";

import '../sass/Profile.sass'
function Profile(props){
    return(
        <div className='profilePage'>
        

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/768px-Missing_avatar.svg.png"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">{props.user.first_name} {props.user.last_name}</h5>
              <p className="grey-text">{props.user.email}</p>
            </MDBCol>
            <h3>Member Benefits</h3>

    </div>
    )
}
export default Profile