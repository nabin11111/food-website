
import React from 'react'
import "./style.css"
import { menu } from "./Data"

const Menu = () => {
  return (
    <section className="menu" id="menu">
      <h1 className="heading">
        <span>  OUR Menu </span>
      </h1>
      <div className="box-container">
        {menu.map((item, index) => (
          <div key={index} className="box">
            <img src={item.img} alt="" />

            <h3>
                Tastey and Healthy
            </h3>
<div className="price">
    Rs.200  <span>
        Rs.250
    </span>
</div>
<a href="" className="btn">
    Add to cart
</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Menu
