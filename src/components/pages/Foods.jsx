import React,{useEffect, useState} from 'react'
import Header from './header.jsx'
import { Link } from 'react-router-dom';

function Foods({ handleClick }) {
    
    const [foods,setFoods]=useState(null);
    useEffect(()=>{
        fetch('http://localhost:8000/foods')
        .then(res=>{
            return res.json();
        }).then(data=>{
            console.log(data);
            setFoods(data)
        })
    },[])
  return (
    <>
    <Header/>
    <div style={{paddingBottom:'100px'}} className="row">
    {foods && foods.map((food,index)=>(
    <div key={food.id} style={{textAlign:'center',alginContent:'center',marginTop:'4px'}}
    className="col-md-3 card" 
    >
        <Link to={`/itemDetail/${food.name}/${food.price}/${food.id}`}>
            {/* <h4>require("{food.image}")</h4> */}
        {/* <img src={require(food.image)} alt=""></img> */}
        <img src={require(`${food.image}`)} alt=""></img>
        </Link>
        {/* <img src={require('./c7.png')} alt=""></img> */}
        <h4>{food.name}</h4>
        <h4>${food.price}</h4>
        {/* <button className="stylish_button btn" onClick={() => {handleClick(food)}}>Add to cart</button> */}
        <Link onClick={() => {handleClick(food)}} to="/cart/" className="btn stylish_button">Add to cart</Link>
        
    </div>))}
    </div>
    </>
  )
}

export default Foods