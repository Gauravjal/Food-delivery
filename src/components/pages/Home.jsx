import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Header from './header.jsx'
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <>
    <Header/>
    <div style={{paddingBottom:'250px'}} className="container">
        <div className="row">
        <div style={{textAlign:'center',paddingTop:'15vw'}} className="col md-4">
            <h1>Hungry?</h1>
        <h3>Get food at your door</h3>
        <br></br>
        <div style={{position:'absolute',paddingLeft:'14vw',display:'flex',alignItems:'center'}} className="container gap-4">
        <Link to="/cart/" className="btn stylish_button">Buy now</Link>
        <Link to="/foods" className="btn stylish_button">See foods</Link>
    
        </div>
        </div>
            <div className="col md-8">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/food-delivery-service-5473792-4561489.png" syle={{width:'1vw'}} alt=""></img>
        </div>
        </div>
    </div>
    </>
  )
}

export default Home