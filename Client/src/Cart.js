import React, { useState, useEffect } from "react";
import Spinner from "./Components/Spinner/Spinner";
import Cookies from 'universal-cookie';
import { Link } from "react-router-dom";

const cookies = new Cookies();



const Cart = () => {
  const [cart, setCart] = useState(null);
  const [orderedBy, setOrderedBy] = useState('')
  const orderHandler = async () => {
    let foodIds = [];
    let chefs = [];
    let total = 0;
    cart.map((i) => {
      foodIds.push(i.foodID);
      chefs.push(i.chefID);
      total += i.foodPrice;
    });
    // const cookies = new Cookies();
    const orderedBy = cookies.get("chef_Id")
    console.log(orderedBy) //HardCoded Customer: Later Replace with Customer ID from token
    const createdBy = chefs;
    const itemsOrdered = foodIds;
    const orderDate = "2020-10-02";
    const bill = total;
    const receipt = "123";
    console.log("Food IDS are", createdBy, itemsOrdered, bill);

    const orderInfo = {
      createdBy,
      itemsOrdered,
      orderedBy,
      orderDate,
      bill,
      receipt,
    };

    const request = await fetch("http://localhost:3000/orders/place", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderInfo),
    });
    console.log(request);
  };

  useEffect(() => {
    // const dataFromCookie = cookies.get('chef_id')
    // setOrderedBy(dataFromCookie)
    // console.log(orderedBy)
    const data = JSON.parse(window.localStorage.getItem("cart"));
    setCart(data);
  }, []);

 return (
   
   
    <>
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
                   
                  
                    {cart.map((dish, index) => (
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
                <button type="button" class="btn btn-primary mt-5"
                onClick={orderHandler}>
                Cash on delivery
                </button>

              <Link to = '/payment'>   
                <button type="button" class="btn btn-primary mt-5 ml-5"
                onClick={orderHandler}>
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
    </>
              

  );
};


export default Cart;




