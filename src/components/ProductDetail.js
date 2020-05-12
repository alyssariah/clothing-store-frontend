import React, {useState} from 'react'
import { MDBRow, MDBCard, MDBCardBody, MDBTooltip, MDBTable, MDBTableBody, MDBTableHead, MDBInput, MDBBtn } from "mdbreact";
import '../sass/Detail.sass'
import {makeCartItem} from '../services/api-helper'
import { Redirect } from 'react-router-dom';


function ProductDetail(props){
    const [count, setCount] = useState(1)
    const [input, setInput] = useState({
        "product": props.detail.id,
        "qty": 1,
        "size": 'S',
        "ordered": false
    })

    const changeSize = (size) => {
        const newInput = {...input}
        newInput.size = size
        setInput(newInput)
    }

    const addCount = (number) => {
        const newInput = {...input}
        newInput.qty = number
        setInput(newInput)
    }
    const minusCount = (number) => {
        const newInput = {...input}
        newInput.qty = number
        setInput(newInput)
    }


    const addToCart = async(e) => {
        e.preventDefault()
        if(!input.size){
        }
        else {
        const res = await makeCartItem(input, props.user.token)
        props.changeCart()
        }
    }
    return(
        <>
        <div className="left-column">
            <img src={props.detail.pictureUrl}/>
        </div>

        <div className="right-column">
            <div className="product-description">
                <span>{props.detail.category}</span>
                <h1>{props.detail.name}</h1>
                <div class="product-price">
                <span>${props.detail.price}.00</span>
                </div>
            </div>
        
            <div class="product-configuration">
        
            <div class="cable-config">
                <span>Size:</span>
                <div class="cable-choose">
                    <button onClick={()=>{changeSize("XS")}}>XS</button>
                    <button onClick={()=>{changeSize("S")}}>S</button>
                    <button onClick={()=>{changeSize("M")}}>M</button>
                    <button onClick={()=>{changeSize("L")}}>L</button>
                    <button onClick={()=>{changeSize("XL")}}>XL</button>
                </div>
            </div>
            </div>

            <div class="checkout">
                <div><label>Qty</label>
                <div className="buttons" onClick={()=>{setCount(count-1); minusCount(count-1)}}>-</div>
                <div className="count">{count}</div>
                <div className="buttons" onClick={()=>{setCount(count+1);addCount(count+1)}}>+</div></div>
                <a href="#" className="cart-btn" onClick={addToCart}>Add to cart</a>
            </div>
            <div className="product-description" style={{margin: '50px 0'}}>
                <p>{props.detail.description}</p>
            </div>
        </div>
        </>
    )
}
export default ProductDetail