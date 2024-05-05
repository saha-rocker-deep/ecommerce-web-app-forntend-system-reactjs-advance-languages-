import React from 'react'
import ReactStars from "react-rating-stars-component";
import {Link}   from "react-router-dom"
 
const Specialproduct = () => {


  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div  className='col-6    mb-3' >
    <div  className='special-product-card  '>
    
    <div className='d-flex  justify-content-between'>
    
    <div>

<img width="170px" height="170px" src='  images/smart2.jpg'  alt=''/>
 
    </div>
    

    <div   className='special-product-content'>
    
    <h5   className='brand'>Havels</h5>


    <h6    className='title'>samsung Galaxy Mobile phone</h6>

    <ReactStars
    count={5}
    value={4}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
    edit={false}
  />


  <p  className='price'>
  <span className='red-p'>$100</span>   <strike>$200</strike>


  
  </p>



<div  className='discount-till   d-flex  align-items-center  me-6 gap-2'>
<div>
<p  className='mb-0'>
<b>  5   days</b> 

</p>
</div>

<div  className='d-flex gap-10  align-items-center'>

<span  className='badge rounded-circle  p-3  bg-danger' >1
</span>


<span    className='badge rounded-circle  p-3 bg-danger'>1</span>


<span    className='badge rounded-circle  p-3  bg-danger'>1</span>








</div>

<div  className='prod-count my-3  '>

<p>  products:5</p>

<div className="progress">
  <div className="progress-bar" role="progressbar" style={{"width":"25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>


</div>

<Link  className="button">Add to cart </Link>

</div>



    </div>


    <div   >
    
    </div>
    
    </div>
    
    
    </div>
      
    </div>
  )
}

export default Specialproduct
