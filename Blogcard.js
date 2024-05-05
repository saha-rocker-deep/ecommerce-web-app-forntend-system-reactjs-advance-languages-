import React from 'react'
import {Link}   from   'react-router-dom'
const Blogcard= () => {
  return (



    
      <div  className='blog-card'>
      <div className='card-image'>
      
      <img   src='images/blogphoto.jpg'  alt="blog" className='img-fluid w-100 '/>
      
      </div>

<div  className='blog-content'> 
<p   className='date'>   1  Dec ,2022      </p>
<h5 className='title'>A beautiful  sunday  morning remains ance</h5>
<p   className='desc'>
Loream ipsum   dolor    sit   amet  consector adi
</p>

<Link to="blog/:id"   className="button">

Readmore

</Link>




</div>


      
      </div>
    
  )
}

export default Blogcard;
