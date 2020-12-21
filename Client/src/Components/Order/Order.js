import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from 'universal-cookie'
const cookies = new Cookies();
function Order() {
  const role = "chef"; // Hardcoded Chef/Customer role, later fetched from Token
  const id = cookies.get('userId'); // Hardcoded Chef/Customer Id, later fetched from Token
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    async function orderHandler() {
      const result = await axios({
        method: "post",
        url: "http://localhost:3000/orders/get/all",
        headers: {
          "Content-Type": "application/json",
        },
        data: { id, role },
      });
      const response = result.data;
      console.log(response.orders);
      setOrders(response.orders[0].itemsOrdered);
    }
    orderHandler();
  }, []);
  return (
    <div>
      <section id="menu" className="menu section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <p>Your Cart</p>
          </div>
          <div
            className="col menu-container"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            {console.log("data is ", orders)}
            {orders &&
              orders.map((order) => (
                <div className="col-lg-6 menu-item">
                  <img
                    src={require("../../assets/img/menu/lobster-bisque.jpg")}
                    className="menu-img"
                    alt="e"
                  />
                  <div className="menu-content">
                    <a href="#">{order.itemName}</a>
                    <span>{order.itemTotalPrice} Pkr</span>
                  </div>
                  <div className="menu-ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Order;