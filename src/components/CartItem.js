import React, {useState, useEffect} from 'react'
import { MDBRow, MDBCard, MDBCardBody, MDBTooltip, MDBTable, MDBTableBody, MDBTableHead, MDBInput, MDBBtn } from "mdbreact";
import {updateCartItem, getCartItems,} from '../services/api-helper'

function CartItem(item, removeItem, user, setCart){
    const handleQty = async(e) => {
        const res = await updateCartItem(item.id, {"qty": e.target.value}, user.token)
        let res2 = await getCartItems(user.token)
        let results = res2.data.filter((item, index)=> item.ordered === false)
        setCart(results)
    }
    
    return(
        {
            'img': <img src={item.product.pictureUrl} alt="" className="img-fluid z-depth-0" style={{height: '80px', width: '100px'}}/>,
            'product': [<h5 className="mt-3" key={new Date().getDate + 1}><strong>{item.product.name}</strong></h5>, <p key={new
              Date().getDate} className="text-muted"></p>],
            'size': <h5 className="mt-3" >{item.product.category === 'Dresses' || item.product.category === 'Tops' || item.product.category === 'Sale'? item.size: '--'}</h5>,
            'price': <h5 className="mt-3" >${item.product.price * item.qty}.00</h5>,
            'qty': <h5 className="mt-3" ><input style={{width: '2.5vw', textAlign: 'center'}}class="quantity" value={item.qty}  min='1' onChange={handleQty} type="number"/></h5>,
            'button':
            <MDBTooltip placement="top">
                <MDBBtn className='mt-3' color="cyan" size="sm" onClick={()=>{removeItem(item.id)}}>
                    X
                </MDBBtn>
                <div>Remove item</div>
            </MDBTooltip> 
          }

    )
}

export default CartItem