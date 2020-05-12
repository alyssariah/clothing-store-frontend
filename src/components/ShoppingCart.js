import React, {useState, useEffect} from "react";
import { MDBRow, MDBCard, MDBCardBody, MDBTooltip, MDBTable, MDBTableBody, MDBTableHead, MDBInput, MDBBtn } from "mdbreact";
import '../sass/Cart.sass'
import {getCartItems, deleteCartItem} from '../services/api-helper'
import CartItem from './CartItem'

function ShoppingCart(props) {
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

  // useEffect(()=>{
  //   const apiCall = async() => {
  //     let res = await getCartItems(props.user.token)
  //     console.log(res.data)
  //     setData(res.data)
  //   }
  //   apiCall()

  // },[])

  const removeItem = async(id) => {
    const res = await deleteCartItem(id, props.user.token)
    let res2 = await getCartItems(props.user.token)
    props.setCart(res2.data)
  }
  const sortedCart = props.cart.sort(function(a,b){
    return a.id - b.id 
  })
    const rows = sortedCart.map((item, index) => {
      console.log('item', item)
      return(
        CartItem(item, removeItem, props.user, props.setCart)
      )
    });
    return (
    <div className="cart">
      <div className="left">
      {/* <MDBRow className="my-3" center style={{height: '70vh'}}>
        <MDBCard className="w-55">
          <MDBCardBody > */}
            <MDBTable className="product-table">
              <MDBTableHead className="font-weight-bold" color="mdb-color lighten-5" columns={columns} />
              <MDBTableBody rows={rows} />
            </MDBTable>
          {/* </MDBCardBody>
        </MDBCard>
      </MDBRow> */}
      </div>
      <div class="card">
          <div class="card-body">
            <h4 class="mb-4 mt-1 h5 text-center font-weight-bold">Summary</h4>
            <hr/>
            <dl class="row">
              <dd class="col-sm-8">
                MDBootstrap UI KIT (jQuery version) - License 6-10 people + unlimited projects
              </dd>
              <dd class="col-sm-4">
                $ 2000
              </dd>
            </dl>
            <hr/>
            <dl class="row">
              <dd class="col-sm-8">
                Premium support - 2 years
              </dd>
              <dd class="col-sm-4">
                $ 2000
              </dd>
            </dl>
            <hr/>
            <dl class="row">
              <dd class="col-sm-8">
                MDB Membership - 2 years
              </dd>
              <dd class="col-sm-4">
                $ 2000
              </dd>
            </dl>
            <hr/>
            <dl class="row">
              <dt class="col-sm-8">
                Total
              </dt>
              <dt class="col-sm-4">
                $ 2000
              </dt>
            </dl>
          </div>
        </div>
    </div>
  
    );
}

export default ShoppingCart;