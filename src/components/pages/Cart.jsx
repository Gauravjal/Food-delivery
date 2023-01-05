import React from 'react'
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
            <img src={item.image} alt=""></img>
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
    return (<><Header/><img style={{paddingBottom:'100px',alignContents:'center',alignItems:'center'}} className="img" src="data:image/png;base64,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" width="90%" height="90%" alt=""></img></>)
  }
};

export default Cart