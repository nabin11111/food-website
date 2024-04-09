
import React from 'react'
import { menu } from "./Data"
import "./style.css"

const Product = () => {
  return (
    <section className="Products" id="products">

      <h1 className="heading">
        <span>Our Products</span>
      </h1>

      <div className="box-container">
        {menu.map((item, index) => (
          <div  className="box">
            <div className="icons">
              <a href="#" className="fas fa-shopping-cart"></a>
              <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-eye"></a>
            </div>
            <div className="image">
              <img src={item.img} alt="" /> 
            </div>
            <div className="content">
              <h3> Fresh Bear</h3> 
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half" />
<div className="price">
    Rs.200 
</div>
              </div>
    

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Product
