import React from 'react'
import '../sass/Confirm.sass'
import {Link} from 'react-router-dom'

function Confirmation(props){
    let formatted_date = new Date(props.order.created_at).toString()
    return(
    <div className="cover">
    <div className="confirm">
        <h2>Thank you!</h2>
        <p>We're processing your order now, here are the details</p>
        <hr/>
        <div>
            <h5>Confirmation will be sent to: {props.user.email}</h5>
            <h5>Order number: #{props.order.id}</h5>
            <h5>Order date: {formatted_date} </h5>
            <h5>Order total: ${props.order.total}.00</h5>
            <Link to='/page'><button>Continue shopping</button></Link>
        </div>
    </div>
    </div>       
    )
}

export default Confirmation 