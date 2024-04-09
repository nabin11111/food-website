import React from 'react'
import { review} from "./Data"
import "./style.css"
import quotesImage from "./quotesImage.png"

const Review = () => {
  return (
  <section className="reviews"  id="reviews"
  ><h1 className="heading">
<span>
    customer's review
</span>

  </h1>
  <div className="box-container">
{
    review.map((item,index)=> (
<div className="box">

    <img src={quotesImage} alt="" className="quote"/>

<p className="nabin">
A Best Brand Bear . I personally Suggest to everyone to drink arna bear 
</p>

<img src={item.img} alt="" />
<h3>  
❤️

</h3>

<div className="stars">

<i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half" />
</div>

</div>





    ))


}

  </div>
  


  </section>


  )
}

export default Review
