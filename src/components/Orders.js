import React,{useState, useEffect} from 'react'
import {getOrders} from '../services/api-helper'
import {MDBCard, MDBCardBody, MDBRow} from  "mdbreact"
import '../sass/Order.sass'


function Orders(props){
    const [orders, setOrders] = useState([])
    console.log('token', props.user.token)
    useEffect(()=>{
        const makeAPICall=async()=>{
            const res = await getOrders(props.user.token)
            setOrders(res.data)
        }
        makeAPICall()
      },[])
      const renderOrders = orders.map((order, index)=>{
          console.log('order', order)
          let formatted_date = new Date(order.created_at).toString()
          const renderItems = order.items.map((item, index)=>{
              return(
                  <div className="orderItem">
                      <div>
                      <div className="product"><img src={item.product.pictureUrl} style={{height: '80px', width: '100px'}}/>
                      <h3>{item.product.name} <div className="qty">Qty: {item.qty}</div> <p>{item.product.description}</p></h3></div></div>
                      ${item.product.price}.00
                  </div>
              )
          })
          return(
              <MDBCard key={index} style={{width: '60vw'}}>
                  <MDBCardBody>
          <div className="orderHeader"><div>Total<br/> ${order.total}.00</div> <div>Order Placed <br/>{formatted_date}</div><div> Order Number <br/> {order.id}</div></div>
                  <div>{renderItems}</div>
                  </MDBCardBody>
              </MDBCard>
          )
      })
    return(
        <div className="orders">
        <MDBRow style={{display:'flex', flexDirection: 'column'}}>
            {renderOrders}
        </MDBRow>
        </div>
    )
}
export default Orders