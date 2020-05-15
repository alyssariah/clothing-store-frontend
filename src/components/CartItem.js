import React from 'react'
import { MDBTooltip, MDBBtn } from "mdbreact";
import {updateCartItem, getCartItems,} from '../services/api-helper'

function CartItem(item, removeItem, user, setCart){
    const handleQty = async(e) => {
        await updateCartItem(item.id, {"qty": e.target.value}, user.token)
        let res2 = await getCartItems(user.token)
        let results = res2.data.filter((item, index)=> item.ordered === false)
        setCart(results)
    }
    
    return(
        {
            'img': <img src={item.product.pictureUrl} alt="" className="img-fluid z-depth-0 mt-3" />,
            'product': [<h5 className="mt-3" key={new Date().getDate + 1}><strong>{item.product.name}</strong></h5>, <p key={new
              Date().getDate} className="text-muted"></p>],
            'size': <h5 className="mt-3" >{item.product.category === 'Dresses' || item.product.category === 'Tops' || item.product.category === 'Sale'? item.size: '--'}</h5>,
            'price': <h5 className="mt-3" >${item.product.price * item.qty}.00</h5>,
            'qty': <h5 className="mt-3" ><input style={{width: '2.5vw', textAlign: 'center'}}class="quantity" value={item.qty}  min='1' onChange={handleQty} type="number"/></h5>,
            'button':
            <MDBTooltip placement="top">
                <MDBBtn className='mt-3' color="white" onClick={()=>{removeItem(item.id)}}>
                    X
                </MDBBtn>
                <div>Remove item</div>
            </MDBTooltip> 
          }

    )
}

export default CartItem