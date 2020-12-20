import React,{useState} from 'react';
import FoodCard from '../Cards/FoodCard';
//import NavBar from '../Navbar/ChefNavBar';
import NavBar from "../Navbar/ChefNavbar"
import { useEffect } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
function Dashboard(props) {
let chefId;
let chefName;
const cookies = new  Cookies;
const [foods, setChefFoods] = useState([]);


	useEffect(() => {
		chefId = cookies.get('chef_Id');
		chefName = cookies.get('chef_name')
		console.log(`chef Id is ${chefId}`);
		console.log(`chef name is ${chefName}`);

		async function fetchFoodForChefs() {
			// const request = await fetch("http://localhost:3000/food/by/"+chefId);
			// const response = await request.json();
			// console.log(response);
			let result = await axios({
				method: 'get',url : "http://localhost:3000/food/by/"+chefId
		,headers: {
authorization: cookies.get('ka_token')
		}})
		console.log(result, 'check1');
			setChefFoods(result.data.items);
		}
		fetchFoodForChefs();
	},[]);

	return (
		<div>
			<NavBar />
			<br />
			<div className="row" style={{ marginLeft: '10px' }}>
				<div className="col-md-4">
					<div className="card text-white bg-primary mb-3" style={{ maxWidth: '18rem' }}>
						<div className="card-header">Orders</div>
						<div className="card-body">
							<h5 className="card-title">Total Orders : 50</h5>
						</div>
					</div>
                </div>
                <div className="col-md-4">
					<div className="card text-white bg-secondary mb-3" style={{ maxWidth: '18rem' }}>
						<div className="card-header">Sales</div>
						<div className="card-body">
							<h5 className="card-title">Total Sales : $1500</h5>
						</div>
					</div>
                </div>
                <div className="col-md-4">
					<div className="card text-white bg-success mb-3" style={{ maxWidth: '18rem' }}>
						<div className="card-header">Dishes</div>
						<div className="card-body">
							<h5 className="card-title">Total Dishes : 5</h5>
						</div>
					</div>
                </div>
				
			</div>
			<div className="row" style={{ marginLeft: '10px' }}>
			{foods.map(food => (				<div key={food.id} className="col-md-4">
			<FoodCard {...food} />
		</div>
		))}


			</div>
		</div>
	);
}

export default Dashboard;
