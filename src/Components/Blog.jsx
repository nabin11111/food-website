import React from 'react'
import "./style.css"
import { blog } from './Data'
const Blog = () => {
  return (
<section className="blogs" id="blogs">
<h1 className="heading">
    OUR
    <span>
        blogs
    </span>
</h1>
<div className="box-container">

    { blog.map((item, index) => (


<div className="image11">
<img src={item.img} alt="" />
<div className="content">
<a href="#"  className="title">
chilled Bear 

</a>
<span>
    by owner / 2016 march, 2022
</span>
<p>
तपाईंलाई सुनाउनलाई हामीसँग दुई रोचक समाचारहरू छन् जुन हामी शिघ्र तपाईंहरु माझ घोषणा गर्नेछौं । तर यस अघि तपाईंसँग छ समाचार Guess गर्ने अवसर ! हामीले घोषणा गर्न लागेको दुई समाचारहरु के होला? हामीलाई तल कमेन्ट गरी भन्नुहोस् र मिलाउनु हुने १० भाग्यशाली विजेताले जित्नु हुनेछ ARNA को तर्फबाट Exciting Gift Hamper !
</p>

<a href="#" className="btn">
    readmore 
</a>

</div>

</div>


    )
    )
        
    }
</div>


</section>
  )
}

export default Blog
