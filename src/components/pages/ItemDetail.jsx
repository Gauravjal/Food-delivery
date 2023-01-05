import react from 'react'
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { useParams } from "react-router-dom";
import Header from './header.jsx'
function ItemDetail({ handleClick }) {
    const [imgurl,setImgUrl]=useState("");
    
    const { name,price,id} = useParams();
    const item = {name, price,id };
    useEffect(()=>{
        fetch(`http://localhost:8000/foods/${id}`)
        .then(res=>{
            return res.json();
        }).then(data=>{
            console.log(data);
            setImgUrl(data.image)
            item.image=data.image;
        },[])
    })
    return (<>
       <Header/>
      <div style={{paddingBottom:'300px'}} className="container text-center">
        {imgurl && <img src={imgurl} alt=""></img>}
        <h3>{name}</h3>
        
        <h3>{price}</h3>
        {/* <button className="stylish_button btn" onClick={() => handleClick(item)}>Add to Cart</button> */}
        <Link onClick={() => {handleClick(item)}} to="/cart/" className="btn stylish_button">Add to cart</Link>
      </div>
      </>
    );
  }

  export default ItemDetail;