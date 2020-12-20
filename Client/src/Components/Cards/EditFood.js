import React, { useEffect, useState } from "react";
import cookies from "universal-cookie";

function EditFood(props) {

 const [changedDescription,setChangedDescription] = useState('');
 const [changedPrice,setChangedPrice] = useState('');
 const [changedChefName, setChefName] = useState('');

 const descriptionChange = (e) =>{setChangedDescription(e.target.value)};
 const priceChange = (e) =>{setChangedPrice(e.target.value)};
 const chefName = (e) =>{setChefName(e.target.value)};
  const [update, setUpdatedFood] = useState(props);

  console.log(changedDescription)
  console.log(changedPrice)


  // TO-DO Use Form to Populate the Given Fields
  // const hardCodeData = {
  //   name: "WAJJA",
  //   description: "Tasty",
  //   price: "50000",
  //   chef: props.chef,
  //   chefName: props.chefName,
  //   featured: false,
  //   image: "URL",
  //   rating: 10,
  //   foodId: props._id,
  // };

  const editInfo = {
    // foodName: props.name,
    // chef:props.chef,
    // chefName: props.chefName,
    // price: props.price,
    // image: props.image,
    // rating: props.rating,
    // foodId: props._id,
    // changedDescription,
    // changedPrice,
    // changedChefName
    foodId: props._id,
    updatedInfo: {
      foodName: props.name,
      changedDescription,
      changedPrice

    }
  }

  async function editHandler() {
    const request = await fetch("http://localhost:3000/food/edit", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ updates: editInfo }),
    }).then((res => {
      console.log(res)
    }));
  }
  // console.log(hardCodeData.foodId)

  return (

    <div>
  {/* Modal */}
  <div className="modal fade bg-light" id="darkModalForm" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog form-dark" role="document">
      {/*Content*/}
      <div className="modal-content card card-image" >
        <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
          {/*Header*/}
          <div className="modal-header text-center pb-4">
            <h3 className="modal-title w-100 text-dark font-weight-bold" id="myModalLabel"><strong>Edit</strong> <a className="green-text font-weight-bold"><strong> {update.name}</strong></a></h3>
            <button type="button" className="close white-text" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          {/*Body*/}
          <div className="modal-body">
            {/*Body*/}
            <div className="md-form mb-5">
              <input type="text" className="form-control validate white-text"
              placeholder= {update.description} 
              onChange= {descriptionChange}/>
              <label data-error="wrong" data-success="right" htmlFor="Form-email5">Your description</label>
            </div>
            <div className="md-form mb-5">
              <input type="text" className="form-control validate white-text"
              placeholder={update.price} 
              onChange = {priceChange}/>
              <label data-error="wrong" data-success="right" htmlFor="Form-email5">Price</label>
            </div>
            <div className="md-form pb-3">
              <input type="text" id="Form-pass5" className="form-control validate white-text"
              placeholder={update.chefName} 
              onChange={chefName} />
              <label data-error="wrong" data-success="right" htmlFor="Form-pass5">Your name</label>
            
            </div>
           
            {/*Grid row*/}
            <div className="row d-flex align-items-center mb-4">
              {/*Grid column*/}
              <div className="text-center mb-3 col-md-12">
                <button type="button" className="btn btn-success btn-block btn-rounded z-depth-1"
                onClick = {() => editHandler()}>
                Update Now</button>
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
            {/*Grid row*/}
            <div className="row">
              {/*Grid column*/}
              
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
          </div>
        </div>
      </div>
      {/*/.Content*/}
    </div>
  </div>
  {/* Modal */}
  <div className="text-center">
    <a href className="btn btn-default btn-rounded" data-toggle="modal" data-target="#darkModalForm">Launch modal
      register Form</a>
  </div>
</div>

  )
}
export default EditFood;
  

  {/*
   <div
      style={{
        backgroundColor: "white",
        height: "40%",
        width: " 40%",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "1000",
      }}
  >
      <div className="wrapper">
      <h1>Edit {update.name}</h1>

      <div className="form-wrapper">
        <form>
          <div className="firstName">
            <label htmlFor="firstName">Description</label>
            <input
              value={update.description}
              type="text"
            />
            
          </div>
          <div className="lastName">
            <label htmlFor="lastName">Price</label>
            <input
              type="text"
              value={update.price}
            />
            
          </div>
          <div className="email">
            <label htmlFor="email">Chef Name</label>
            <input
              type="email"
              value={update.chefName} 
            />

          </div>

          <div className="createAccount">
          </div>
        </form>
      </div>
    </div>
      <p>{update.description}</p>
      <p>{update.price}</p>
      <p>{update.chef}</p>
      <p>{update.chefName}</p>
      <p>{update._id}</p>

      <button onClick={() => editHandler()}>EDIT NOW</button>
    </div>
  );
    */}

