import React, {useState, useEffect} from "react";
import { MDBRow, MDBCard, MDBCardBody, MDBTooltip, MDBTable, MDBTableBody, MDBTableHead, MDBInput, MDBBtn, MDBIcon } from "mdbreact";
import '../sass/Cart.sass'
import {getCartItems, deleteCartItem, makeOrder, updateCartItem} from '../services/api-helper'
import CartItem from './CartItem'
import Confirmation from './Confirmation'

function ShoppingCart(props) {
  console.log(props.cart)
  const[order, setOrder] = useState()
  const[confirm, showConfirm] = useState(false)
  const [columns, setColumns] = useState([
    {
      label: <strong>Product</strong>,
      field: 'img',
    },
    {
      label: '',
      field: 'product'
    },
    {
      label: <strong>Size</strong>,
      field: 'color'
    },
    {
      label: <strong>Price</strong>,
      field: 'price'
    },
    {
      label: <strong>Qty</strong>,
      field: 'qty'
    },
    {
      label: <strong>Remove</strong>,
      field: 'button'
    }
  ])


  const removeItem = async(id) => {
    const res = await deleteCartItem(id, props.user.token)
    let res2 = await getCartItems(props.user.token)
    let results = res2.data.filter((item, index)=> item.ordered === false)
    props.setCart(results)
  }
  const sortedCart = props.cart.sort(function(a,b){
    return a.id - b.id 
  })

  let mytotal = 0
  for(let i=0; i< sortedCart.length; i++){
    mytotal += (sortedCart[i].product.price * sortedCart[i].qty)
  }
  const rows = sortedCart.map((item, index) => {
    return(
      CartItem(item, removeItem, props.user, props.setCart)
    )
  });
  const handleOrder = async() => {
    if(!props.user || sortedCart.length === 0){
      return ' '
    }
    let items = []
    for(let i=0; i< sortedCart.length; i++){
      items.push(sortedCart[i].id)
      const res = await updateCartItem(sortedCart[i].id, {"ordered": true}, props.user.token)
    }
    const res1 = await makeOrder({"items": items, "total": mytotal}, props.user.token)
    setOrder(res1.data)
    let res2 = await getCartItems(props.user.token)
    let results = res2.data.filter((item, index)=> item.ordered === false)
    props.setCart(results)
    showConfirm(true)
  }
  return (
  <div className="cart">
    {confirm && <Confirmation order={order} user={props.user}/>}
    <div className="left">
          {rows.length>0 ? <MDBTable className="product-table">
            <MDBTableHead className="font-weight-bold" color="mdb-color lighten-5" columns={columns} />
            <MDBTableBody rows={rows} />
          </MDBTable>: <h3 style={{marginTop: '30px', color:'grey', textAlign: 'center'}}>Your shopping cart is empty</h3>}
    </div>
    <div className="right">
          <h4>Summary</h4>
          <hr/>
          <h5>Subtotal: <span>${mytotal}.00</span></h5>
          <hr/>
          <div className="checkout">
          <MDBBtn style={{borderRadius: '60px'}}color='grey' onClick={handleOrder}>
          <MDBIcon icon="lock" style={{marginRight: '8px'}} /> Checkout
          </MDBBtn>
          </div>
    </div>        
  </div>

  );
}

export default ShoppingCart;