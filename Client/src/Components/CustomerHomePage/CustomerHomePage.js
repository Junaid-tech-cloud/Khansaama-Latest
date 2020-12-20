import React, { useState, useEffect } from "react";
import Chefs from "../Chefs/Chefs";
import Spinner from "../Spinner/Spinner";
import "./CustomerHomepage.css";

function CustomerHomePage(props) {
  const [chefs, setChefs] = useState(null);
  console.log(`User data is ${props.location.state.userData}`);
  useEffect(() => {
    async function fetchChefs() {
      const request = await fetch("http://localhost:3000/role/chefs/");
      const response = await request.json();
      console.log(response);
      setChefs(response);
    }
    fetchChefs();
  }, []);
  return (
    <>
      <div className="customer__homepage">
        <header className="header">
          <div className="header__logo">
            <span>KhanSaama</span>
          </div>
          <div className="header__profile">
            <p>
              Hi, <span>{props.location.state.userData.user.name}</span>
            </p>
          </div>
        </header>

        {chefs ? <Chefs chefs={chefs} /> : <Spinner />}
      </div>
    </>
  );
}

export default CustomerHomePage;
