import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link,useLocation } from 'react-router-dom';

const Productcard = (props) => {

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
   
  let location=useLocation();
  console.log(location);


const {grid}=props;



  return (

    <>
  <div  className={`${location.pathname  == "/product" ?  `gr-${grid}` :  "col-3" }`}>
    <Link  to=":id" className='product-card    position-relative'>
    
<div className='wishlist-icon   position-absolute'>

<Link  >   <img   width="20px"  height="20px"     src='images/wish.png'    alt="wishList"/></Link>


</div>


    <div   className='product-image'>
    
    <img   src="images/smart-watch.jpg"  alt="product img"/>

    <img width="180px"  height="180px"   src="images/watch1.png" alt="other"/>

    
    
    </div>



    <div  className='product-details'
    
    
    
    >
    
    <h6   className='brand'>  Havels</h6>
    <h5   className='product-title'>
    
    kids  headphones  bulk  10 pack multi coloured for students
    
    </h5>

  
   <ReactStars
   count={5}
   onChange={ratingChanged}
   size={24}
   value={4}
   activeColor="#ffd700"
   edit={false}
 />


 <p className={`description ${grid === 12 ?  "d-block": "d-none"}`} >

 A movie night with family or a matchday get-together with friends
  is fun for most people. A TV can help bring joy to your life. Find a 
  range of Samsung 81.28 cm (32) TVs that offer an immersive visual and 
 aural experience. Explore a variety of HD Ready resolution TVs with 
 </p>

<p className='price'>
$100.00


</p>
    </div>
    

    <div   className='action-bar position-absolute'>
    
    <div className='d-flex flex-column  gap-15'>
    
    <Link><img  width="20px"  height="20px" src='images/comparative.png'  alt="compra"/></Link>
    <Link><img  width="20px"  height="20px" src='images/view.png '  alt="view"/></Link>
    
    <Link><img  width="20px"  height="20px" src='images/add-to-cart.png' alt="cart"/></Link>
    
    
    </div>
    
    
    </div>


    
    </Link>
      



    </div>

  



    <div  className={`${location.pathname  == "/product" ?  `gr-${grid}` :  "col-3" }`}>
    <Link className='product-card    position-relative'>
    
<div className='wishlist-icon   position-absolute'>

<Link  >   <img   width="20px"  height="20px"     src='images/wish.png'    alt="wishList"/></Link>


</div>


    <div   className='product-image'>
    
    <img   src="images/smart-watch.jpg"  alt="product img"/>

    <img width="180px"  height="180px"   src="images/watch1.png" alt="other"/>

    
    
    </div>



    <div  className='product-details'
    
    
    
    >
    
    <h6   className='brand'>  Havels</h6>
    <h5   className='product-title'>
    
    kids  headphones  bulk  10 pack multi coloured for students
    
    </h5>

  
   <ReactStars
   count={5}
   onChange={ratingChanged}
   size={24}
   value={4}
   activeColor="#ffd700"
   edit={false}
 />




<p className='price'>
$100.00


</p>


<p className={`description ${grid === 12 ?  "d-block": "d-none"}`}>

A movie night with family or a matchday get-together with friends
 is fun for most people. A TV can help bring joy to your life. Find a 
 range of Samsung 81.28 cm (32) TVs that offer an immersive visual and 
aural experience. Explore a variety of HD Ready resolution TVs with 
</p>


    </div>
    

    <div   className='action-bar position-absolute'>
    
    <div className='d-flex flex-column  gap-15'>
    
    <Link><img  width="20px"  height="20px" src='images/comparative.png'  alt="compra"/></Link>
    <Link><img  width="20px"  height="20px" src='images/view.png '  alt="view"/></Link>
    
    <Link><img  width="20px"  height="20px" src='images/add-to-cart.png' alt="cart"/></Link>
    
    
    </div>
    
    
    </div>


    
    </Link>
      



    </div>




    </>
  )
}

export default Productcard
