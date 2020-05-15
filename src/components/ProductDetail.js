import React, {useState} from 'react'
import { MDBBtn, MDBIcon } from "mdbreact";
import '../sass/Detail.sass'
import {makeCartItem} from '../services/api-helper'
import { Link } from 'react-router-dom';


function ProductDetail(props){
    const [count, setCount] = useState(1)
    const [input, setInput] = useState({
        "product": props.detail.id,
        "qty": 1,
        "size": 'S',
        "ordered": false
    })
    const [viewCart, setViewCart] = useState(false)
    const [alert, setAlert] = useState(false)

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


    const addToCart = async() => {
        if(!props.user){
            setAlert(true)
        }
        else {
        await makeCartItem(input, props.user.token)
        props.updateCart()
        setViewCart(true)
        setTimeout(() => setViewCart(false), 4000)
        }
    }
    return(
        <div className="detailContainer">
        {viewCart &&
            <div className="background">
            <div className="preview">
                <MDBIcon icon="times" style={{textAlign:'right', fontSize: '20px'}} onClick={()=>setViewCart(false)}/>
                <h5><MDBIcon far icon="check-circle" style={{color: '#7DC855'}}/> Added to cart</h5>
                <div className="currentItem">
                <img src={props.detail.pictureUrl} alt="product"/>
                <div>
                    <h5>{props.detail.name}</h5>
                    <p>{props.detail.category}</p>
                    <p>qty: {input.qty}</p>
                    <p>size: {input.size}</p>
                    <p>${props.detail.price}.00</p>
                </div>
                </div>
                <Link to='/cart'><MDBBtn color="grey">View Cart</MDBBtn></Link>
            </div>
            </div>}
            {alert && <h4 style={{position: 'absolute', top: '14vh', color: 'red'}}>You must sign in before adding items to your cart</h4>}
        <div className="left-column">
            <img src={props.detail.pictureUrl} alt="product"/>
        </div>

        <div className="right-column">
            <div>
            <div className="product-description">
                <span>{props.detail.category}</span>
                <h2>{props.detail.name}</h2>
                <div class="product-price">
                <span>${props.detail.price}.00</span>
                </div>
            </div>

            {props.detail.category === 'Dresses' || props.detail.category === 'Tops' || props.detail.category === 'Sale'? 
            <div class="product-configuration">
            <div class="cable-config">
                <span>Size:</span>
                <div class="cable-choose">
                    <button id={input.size ==='XS'?'sizeActive': ''}onClick={()=>{changeSize("XS")}}>XS</button>
                    <button id={input.size ==='S'?'sizeActive': ''} onClick={()=>{changeSize("S")}}>S</button>
                    <button id={input.size === "M"?'sizeActive': ''} onClick={()=>{changeSize("M")}}>M</button>
                    <button id={input.size ==='L'?'sizeActive': ''} onClick={()=>{changeSize("L")}}>L</button>
                    <button id={input.size ==='XL'?'sizeActive': ''}onClick={()=>{changeSize("XL")}}>XL</button>
                </div>
            </div>
            </div>: ''}

            <div class="checkout">
                <div><label>Qty</label>
                <div className="buttons" onClick={()=>{if(count>1){setCount(count-1); minusCount(count-1)}}}>-</div>
                <div className="count">{count}</div>
                <div className="buttons" onClick={()=>{setCount(count+1);addCount(count+1)}}>+</div></div>
                <button className="cart-btn" onClick={addToCart}>Add to cart</button>
            </div>
            <div className="product-description" style={{margin: '50px 0'}}>
                <p>{props.detail.description}</p>
            </div>
            </div>
        </div>
        </div>
    )
}
export default ProductDetail