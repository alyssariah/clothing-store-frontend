import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardImage } from "mdbreact";
import '../sass/Page.sass'
import {Link} from 'react-router-dom'


const EcommercePage = (props) => {

  const handleDetails = (product) => {
    props.setDetail(product)
    localStorage.setItem('detail', JSON.stringify(product))
  }
  const renderCards = props.products.map((product, index)=>{
    if(product.category === props.category){
      return(
        <MDBCol lg="3" md="5" className="mb-lg-20 mb-4" key={index} style={{margin: '20px 20px'}}>
          <Link to='/detail'><MDBCard className="align-items-center" style={{backgroundColor: 'white'}} onClick={()=> handleDetails(product)}>
            <MDBCardImage style={{height: '300px'}}
              src={product.pictureUrl}
              top
              alt="sample photo"
              overlay="white-slight"
            />
             </MDBCard></Link>
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
    }
  })
  return (
      <MDBRow>
        {renderCards}
      </MDBRow>
  );
}

export default EcommercePage;