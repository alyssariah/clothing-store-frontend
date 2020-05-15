import React from 'react'
import {MDBRow, MDBCol, MDBCard } from "mdbreact"
import '../sass/Profile.sass'

function Profile(props){
    return(
        <div className='profilePage'>
          <div className="proInfo">
              <img
                tag="img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/768px-Missing_avatar.svg.png"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <div>
              <h2 className="font-weight-bold mt-7 mb-7">{props.user.first_name} {props.user.last_name}</h2>
              <p className="grey-text">{props.user.email}</p>
              </div>
          </div>
          <div className="text-center my-5"style={{margin: '0'}}>
            <h3>Member Benefits</h3>
        <MDBRow>
        <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="z-depth-1-half">
            <div className="view zoom">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/5.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="stripe dark">
                <a href="#!">
                  <p>
                    Free Shipping
                  </p>
                </a>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="z-depth-1-half">
            <div className="view zoom">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/9.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="stripe dark">
                <a href="#!">
                  <p>
                    Special Sales
                  </p>
                </a>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="z-depth-1-half">
            <div className="view zoom">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/7.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="dark">
                  <p>
                    Full Returns
                  </p>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
          </div>

    </div>
    )
}
export default Profile