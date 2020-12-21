import React from 'react';
import {useState, useEffect} from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import Cookies from 'universal-cookie';
import { Link, Redirect } from "react-router-dom";

import './Card.css';
const cookies = new Cookies();

export default injectStripe(function Card(props) {
  
  const [cart, setCart] = useState(!window.localStorage.getItem('cart') ? {itemsOrdered: [], amount: 0} : JSON.parse(window.localStorage.getItem('cart')));
  const [cartIsEmpty, setCartIsEmpty] = useState(true);

  useEffect(() => {
    const dataFromCookie = cookies.get('userId')
    const data = JSON.parse(window.localStorage.getItem("cart"));

    if(!data) {
      setCartIsEmpty(true);
      return;
    }
    setCartIsEmpty(false);
    setCart(data);
  }, []);


  const orderData = JSON.parse(window.localStorage.getItem("cart"));
  console.log(`cart from LC: ${JSON.stringify(orderData)}`)
  let source = null;
  const processPayment = () => {
    props.stripe.createToken().then( tokenData => {
      if(!tokenData.token) {
        console.log(`Token creatoin failed`);        
      }
      else {
        source = tokenData.token.id;
        orderData.source = source;
        orderData.paymentType = "CARD";
        orderData.orderedBy = cookies.get('userId');
          
          fetch("http://localhost:3000/orders/place", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(orderData),
          })
          .then(response => response.json())
          .then(jsonResponse => console.log(`Order response: ${JSON.stringify(jsonResponse)}`))
          .catch(err => console.log(`Error placing order: ${err}`))
        }
      })
      .catch(err => console.log(`Error placing order: ${err}`))
    }

    return (
        <div id="paymentContainer" style={{display: "grid", gridTemplateColumns: "100%"}}>
        <div>
          <h2>Order Payment :</h2>
          <p style={{textTransform: "none"}}>Please enter your card details below and click Pay Now.</p>
          <div id="pricingContainer" style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
            <span>Order Total: </span>
            <span>{orderData.amount}</span>
          </div>
        </div>
        <div id={`stripeCard`}>
          <CardElement />
          <button onClick={processPayment}>Pay Now</button>
        </div>
        </div>
    )
})
