import React from 'react'
import Product from '../components/Product'
import Rating from '../components/Rating';
import {Link} from 'react-router-dom'
import data from '../data';


export default function ProductScreen(props){
   const product = data.products.find(x=> x._id === props.match.params.id)
   if(!Product){
       <div>Product not found</div>
   } 
   return(
     <div>
     <Link to="/">Wroc do strony glownej</Link>
     <div className="row top">
     
        <div className="col-2">
        <img className="large" src={product.image} alt={product.name}></img>
        </div>
        <div className="col-1">
        <ul>
        <li>
        <h1>{product.name}</h1>
        </li>
        <li>
        <Rating rating = {product.rating} numReviews={product.numReviews}>
        </Rating>
        </li>
        <li>
          Cena : {product.price} zł
        </li>
        <li> Description:
        <p> {product.description}</p>
        </li>
        </ul>
        </div>
        <div className="col-1">
        <div className="card card-body">
        <ul>
        <li>
        <div className="row">
        <div>Cena</div>
        <div className="price">{product.price} zł
        </div> 

        </div>
        </li>
        <li>
        <div className="row">
        <div>Status </div>
        <div >
        {product.countInStock>0?( <span className="success">In stock</span>):
    (<span className="danger">Unavailable</span>)
    }
        </div> 

        </div>
        </li>
        <button className="primary block">Dodaj do koszyka</button>
        </ul>
        
        </div>

        </div>
      
        </div>
     </div>
        
    );
}