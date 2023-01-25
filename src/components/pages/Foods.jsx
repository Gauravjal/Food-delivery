import React,{useEffect, useState} from 'react'
import Header from './header.jsx'
import { Link } from 'react-router-dom';

function Foods({ handleClick }) {
    const [foodType,setFoodType]=useState("fastFoods");
    const [foods,setFoods]=useState(null);
    useEffect(()=>{
        fetch(`http://localhost:8000/${foodType}`)
        .then(res=>{
            return res.json();
        }).then(data=>{
            console.log(data);
            setFoods(data)
        })
    },[foodType])
  return (
    <>
    <Header/>
    <div className="flex px-3 btn bg-green-600">
    <button onClick={()=>setFoodType("fastFoods")} className="bg-blue-700 text-white rounded-md hover:bg-red-400">Fast Food</button>
    <button onClick={()=>setFoodType("curry")} className="bg-blue-700 text-white rounded-md hover:bg-red-400">Curries</button>
    <button onClick={()=>setFoodType("drinks")} className="bg-blue-700 text-white rounded-md hover:bg-red-400">Cold drinks</button>
    </div>
    <div style={{paddingBottom:'100px'}} className="row">
    {foods && foods.map((food,index)=>(
    <div key={food.id} style={{textAlign:'center',alginContent:'center',marginTop:'4px'}}
    className="col-md-3 card text-center" 
    >
        <Link to={`/itemDetail/${food.name}/${food.price}/${food.id}`}>
            {/* <h4>require("{food.image}")</h4> */}
        {/* <img src={require(food.image)} alt=""></img> */}
        <img className="mx-auto" width="150px" height="150px" src={require(`${food.image}`)} alt=""></img>
        </Link>
        {/* <img src={require('./c7.png')} alt=""></img> */}
        <h4>{food.name}</h4>
        <h4>${food.price}</h4>
        {/* <button className="stylish_button btn" onClick={() => {handleClick(food)}}>Add to cart</button> */}

        <Link onClick={() => {handleClick(food)}} to="/cart/" className="btn bottom-0 stylish_button hover:bg-red-400">Add to cart</Link>
    
    </div>))}
    </div>
    </>
  )
}

export default Foods