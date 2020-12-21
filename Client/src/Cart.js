import React, { useState, useEffect } from "react";
import Spinner from "./Components/Spinner/Spinner";
import Cookies from 'universal-cookie';
import { Link, Redirect } from "react-router-dom";
import "./Cart.css";

const cookies = new Cookies();



const Cart = () => {
  const [cart, setCart] = useState(!window.localStorage.getItem('cart') ? {itemsOrdered: [], amount: 0} : JSON.parse(window.localStorage.getItem('cart')));
  const [cartIsEmpty, setCartIsEmpty] = useState(true);

  const orderHandler = async () => {
    // let foodIds = [];
    // let chefs = [];
    // let total = 0;
    // cart.map((i) => {
    //   foodIds.push({id: i.foodID, quantity: 1});
    //   chefs.push(i.chefID);
    //   total += i.foodPrice;
    // });
    // // const cookies = new Cookies();
    // const orderedBy = cookies.get("userId")
    // console.log(orderedBy) //HardCoded Customer: Later Replace with Customer ID from token
    // const createdBy = chefs;
    // const itemsOrdered = foodIds;
    // const orderDate = "2020-10-02";
    // const amount = total;
    // console.log("Food IDS are", createdBy, itemsOrdered, amount);

    // const orderInfo = {
    //   createdBy,
    //   itemsOrdered,
    //   orderedBy,
    //   orderDate,
    //   amount,
    // };

    let cartObject = cart;
    cartObject.paymentType = "COD";
    cartObject.source = null;
    cartObject.orderedBy = cookies.get('userId');


    const request = await fetch("http://localhost:3000/orders/place", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartObject),
    });
    console.log(request);
  };

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("cart"));
    if(!data) {
      setCartIsEmpty(true);
      return;
    }
    setCartIsEmpty(false);
    setCart(data);
  }, []);

 return (
   
   
    <>
    {cartIsEmpty ? <div id="loginRedir"><Link to = '/login'>You're not logged in. Click here to log in and start ordering.</Link></div> :
      <div>
        <section
          id="menu"
          className="menu section-bg"
          style={{ minHeight: "100vh" }}
        >
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Cart</h2>
              <p>Your Ordered:</p>
            </div>
            <>
              {cart ? (
                <>
                  <div
                    className="row menu-container"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    {/* //////////////////////////////////////////////////////////////////////// */}
                   
                  
                    {cart[`itemsOrdered`].map((dish, index) => (
                      <div className="col-lg-6 menu-item" key={index}>
                        <img
                          src={require("./assets/img/menu/lobster-bisque.jpg")}
                          className="menu-img"
                          alt={dish.name}
                        />
                        <div className="menu-content">
                          <a href="#">{dish.foodName}</a>
                          <span>Pkr {dish.foodPrice}</span>
                        </div>
                        <div className="menu-ingredients">
                          Lorem, deren, trataro, filede, nerada
                        </div>
                        <div className="menu-ingredients"></div>
                      </div>
                    ))}

                    {/* //////////////////////////////////////////////////////////////////////// */}
                 
                
                    </div>{" "}
                <div>
                <button type="button" className="btn btn-primary mt-5"
                onClick={orderHandler}>
                Cash on delivery
                </button>

              <Link to = '/payment'>   
                <button type="button" className="btn btn-primary mt-5 ml-5">
                Pay through card
                </button>
                </Link>
                </div>
             
                
                  
                </>
              ) : (
                <Spinner />
              )}
            </>
          </div>
        </section>
      </div>
}
    </>
              

  );
};


export default Cart;




