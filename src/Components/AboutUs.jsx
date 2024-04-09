import React from 'react'
import "./style.css";
import Arna from"./arna.png"
const AboutUs = () => {
  return (
    <>
      <section className="aboutus" id="about">

<h1 className="heading">
<span>
About us

</span>

</h1>

<div className="image">
<img src={Arna} alt="" />
<div className="content">
    <h3>
What Makes Arna Bear Special ?
    </h3>
    <p className="adhikari">
    Our journey begins in 2015 when a team at Yeti Brewery came together to achieve something radical that represents the essence of Nepal. A symbol of what it means to be unapologetically Nepali. Out of numerous options, “ARNA” was selected to represent the newly minted brand.
    </p>
    <p className="adhikari">
    The Ambition to do Something Radical:
Our journey begins in 2015 when a team at Yeti Brewery came together to achieve something radical that represents the essence of Nepal. A symbol of what it means to be unapologetically Nepali.
    </p>
<p   className="adhikari">
Out of numerous options, “ARNA” was selected to represent the newly minted brand. The name, ARNA, perfectly complements the vision the Yeti Brewery team had planned – a strong and bold character that resembles the strength and determination of the proud Himalayan Nation and stands out against the pack in a competitive market.

Introduced in the market on 22nd March 2017, the ARNA range of beers has grown exponentially with ARNA Strong & ARNA Light, followed by ARNA Premium & ARNA 8. The company now has four variations with 11 different SKUs.
Nestled in Central Nepal, our state-of-the art brewery is situated at Chainpur, Chitwan district within close proximity to the world heritage site, Chitwan National Park – the home of Tigers and Rhinos. The strategic location of our brewery has abundant availability of pristine pure Himalayan water, skilled manpower and is logistically apt for import of raw-materials and distribution of finished goods countrywide.

Our state of the art laboratory and automated production process ensures that our entire brewing process is strictly monitored and controlled as per the International standards. Our Quality Assurance executives perform strict quality checks not only of all the brewing raw-materials, but also check the quality of packaging materials such that the product is maintained of highest quality.

In line with our responsibility to the environment, we have also installed the most modern, state of the art Effluent Treatment Plant system to remove the unwanted, hazardous chemicals from the wastewater to meet the statutory pollution control requirements. Various treatment methods include primary, secondary and tertiary methods on biological as well as chemical methods.
</p>

    <a href="#" className="btn">
        Learn More.
    </a>

</div>


</div>


      </section>


    </>
  )
}

export default AboutUs
