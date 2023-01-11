import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { useState,useEffect } from 'react';
import Header from './header.jsx'
function Cart({ cart, setCart, handleChange }){
  function handleOrder(e)
  {
      setCart([]);
      alert('Order placed')
  }
  // let id=6;
  // const [imgurl,setImgUrl]=useState("");
  // const [id,setId]=useState(1);
  const handleRemove = (name) => {
    setCart(cart => cart.filter(item => item.name !== name));
  };

  const price = cart.reduce((total, item) => total + item.amount * item.price, 0);

//     useEffect(()=>{
//     fetch(`http://localhost:8000/foods/${id}`)
//     .then(res=>{
//         return res.json();
//     }).then(data=>{
//         console.log(data);
//         setImgUrl(data.image)
//     })
// },[id])
  if(cart.length!==0)
  return (
   <><Header/>
  <p>{cart.length}</p>
   <h1 className="text-center">Cart</h1>
    <article style={{paddingBottom:'4px'}}>
      {cart.map((item) => (
        
        <div className="container card" key={item.id}>
          
          <div className="container row" style={{justifyContent:"center",textAlign:"center",alignItems:"center"}}>
          {/* {()=>id=item.id} */}
          <div className="col-md-6">
            <img src={require(`${item.image}`)} alt=""></img>
            </div>
            {/* <p>{id}</p> */}
            <div className="col-md-6">
            <h4>{item.name}</h4>
            <h4>${item.price}</h4>
            <button className="stylish_button btn" onClick={() => handleChange(item.name, 1)}>+</button>
            <label style={{paddingLeft:'2px',paddingRight:'2px'}}> {item.amount} </label>
            <button className="stylish_button btn" onClick={() => handleChange(item.name, -1)}>-</button>
            <div>
            <br></br>
            <button  className="stylish_button btn" onClick={() => handleRemove(item.name)}>Remove</button>
            </div>
          </div>
          </div>
          
        </div>
        
      ))}
      
  <div className="container text-center total">
        <span><h4>Total Price : </h4></span>
        <span><h4>${price}</h4></span>
        
        <div>
        <button onClick={handleOrder} className="bg-danger btn">Place Order</button>
      </div></div>
,
    </article>
        <br></br>
    </>
  );
  else{
    return (<>
    <Header/>
    <br/>
    <div className="container mx-auto text-center w-full h-full"><img style={{alignContents:'center',alignItems:'center'}} className="image-center" src={require("./img/cart.png")}
 width="50%" height="50%" alt=""></img>
 <Link to="/foods" className="btn stylish_button">See foods</Link>
 </div>
 </>)
  }
};

export default Cart