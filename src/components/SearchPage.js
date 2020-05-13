import React, {useState, useEffect} from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBBadge } from "mdbreact";
import {Link} from 'react-router-dom'


const SearchPage = (props) => {
  const handleDetails = (product) => {
    props.setDetail(product)
    localStorage.setItem('detail', JSON.stringify(product))
  }
  const renderCards = props.searchData.map((product, index)=>{
      return(
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4" key={index} style={{margin: '60px 20px'}}>
          <Link to='/detail'><MDBCard className="align-items-center" style={{backgroundColor: 'white'}} onClick={()=> handleDetails(product)}>
            <MDBCardImage style={{height: '300px'}}
              src={product.pictureUrl}
              top
              alt="sample photo"
              overlay="white-slight"
            />
             </MDBCard>
             </Link>
             <div className="description">
              <h5 className="silver-text">
                    {product.name}:
              </h5>
              <h4 className="silver-text">
                ${product.price}.00
              </h4>
              </div>
        </MDBCol>
      )
  })
  if(renderCards.length === 0){
    return(
      <h3 style={{marginTop: '20px'}}>No Search Results Found</h3>
    )
  }
  return (
    <div>
      <h3 style={{textAlign: 'center', marginTop: '20px'}}>{props.searchData.length } search results found...</h3>
      <MDBRow>
        {renderCards}
      </MDBRow>
      </div>
  );
}

export default SearchPage;