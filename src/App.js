import React from 'react'
import data from './data'

function App() {
  return (
    <div className="grid-container">
    <header className="row">
      <div>
          <a className="brand" href="/">e-materials </a>
      </div>
      <div>
          <a href="cart">Koszyk</a>
          <a href="signin"> Zaloguj się</a>
      </div>
    </header>
    <main> 
       <div className="row center">
       {data.products.map((product) => (
          <div key = {product._id} className = "card">
          <a href={`/product/${product._id}`}>
             <img className="medium" 
             src= {product.image} 
             alt={product.name}/>
          </a>
          <div className="card-body">
              <a href= {`/product/${product._id}`}>
                  <h1>{product.name}</h1>
              </a>
              <div className ="rating">
                 <span>
                     <i className="fa fa-star"></i>
                 </span> 
                 <span>
                     <i className="fa fa-star"></i>
                 </span> 
                 <span>
                     <i className="fa fa-star"></i>
                 </span> 
                 <span>
                     <i className="fa fa-star"></i>
                 </span> 
                 <span>
                     <i className="fa fa-star"></i>
                 </span> 
              </div>
              <div className="price">{product.price} zł</div>
          </div>
      </div>
       ))
       }
      
        
       </div>

    </main>

    <footer className="row center">
      All right reserved
    </footer>
</div>
  );
}

export default App;
//