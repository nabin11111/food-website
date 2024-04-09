// import React from 'react'
// import "./style.css";
// const Home = () => {
//   return (
//     <>
//     <section className="home" id="home">
// <div className="content">

//     <h3>
// Fresh <span>
//     Beer In the 
// </span>
// Morning
//     </h3>
//     <p className="adhikari">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cum obcaecati voluptatum facere dolores rerum aliquam corporis? Maiores, quas, ipsam, officia incidunt repellat nobis alias consequatur sed atque unde labore?
//     </p>
//     <a href="#" className="btn">
//         Get Now
//     </a>
// </div>
         
//     </section>
   
//     </>
//   )
// }


// export default Home

import React from 'react';
import './style.css';

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="container"> {/* Wrap content in a container */}
          <div className="content">
            <h3>
              Fresh <span>Beer In the </span>Morning
            </h3>
            <p className="adhikari">
             
            The Ambition to do Something Radical: Our journey begins in 2015 when a team at Yeti Brewery came together to achieve something radical that represents the essence of Nepal. A symbol of what it means to be unapologetically Nepali.


            </p>
            <a href="#" className="btn">
              Get Now
            </a>
          </div>
          <div className="video-container">
 
</div>

<div className="video-container"> {/* Container for the video */}
            {/* Replace with your video implementation */}
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Yz-ahvsvLVs?si=PMpe6XKIZsjTZpET" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>



 
        </div>
      </section>
    </>
  );
};

export default Home;
