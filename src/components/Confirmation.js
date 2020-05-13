import React from 'react'

function Confirmation(){
    return(
    <div className="cart">
    <div className="left">
           
    </div>
    <div className="right">
          <h4>Summary</h4>
          <hr/>
          <h5>Subtotal: <span>${mytotal}.00</span></h5>
          <hr/>
          <div className="checkout">
          <MDBBtn className="cart-btn"  color="cyan" size="m" onClick={handleOrder}>
          <MDBIcon icon="lock" style={{marginRight: '8px'}} /> Checkout
          </MDBBtn>
          </div>
    </div>        

        </div>
    )
}

export default Confirmation 