import React from 'react';
import {Link,NavLink} from "react-router-dom";
import {BsSearch} from 'react-icons/bs';

const Header = () => {
  return (
   <>
   


<header className='header-top-strip  py-3'  >
<div className='container-xxl'>

<div className='row'>
<div   className='col-6'>
<p className='text-white mb-0'>
Free shipping over $100 & free Returns

 
</p>


</div>

<div  className='col-6'>
<p className='text-end text-white mb-0  '>

   Hotline:<a  className='text-white' href="#23333"> +91 8264954234  </a>
</p>

</div>



</div>
</div>



</header>


   <header className='header-upper py-3'
>

<div  className='container-xxl '>
<div className='row align-items-center'>
 <div className='col-2'>

<h2>

<Link  className='text-white'>

Dev corner
</Link>



</h2>
 
 
 </div>

<div className='col-5'   >


<div class="input-group ">
  <input type="text" class="form-control" placeholder="search product here...." aria-label="search product here..." aria-describedby="basic-addon2"/>
  <span class="input-group-text p-3" id="basic-addon2"><BsSearch className='fs-5'  /></span>
</div>

</div>



<div className='col-5'>

<div className='header-upper-links  d-flex align-items-center justify-content-between '     >
<div><Link  to='/compare-product'  className='d-flex align-items-center gap-10  text-white'>

<img   width="35px" height="35px"    src='images/Clockwise-arrow-icon.png'alt=''/>
<p className='text-white  mb-0'>
compare <br/> products
</p>


</Link></div>


<div>
<Link to='/wishlist' className='d-flex align-items-center gap-10  text-white'>

<img   width="35px" height="35px"  src='images/heart-157895_960_720.png'      alt=''/>
<p    className='text-white mb-0'>

Favourite <br/> wishlist

</p>


</Link>

</div>


<div>
<Link   to='/login' className='d-flex align-items-center gap-10  text-white'>

<img       width="35px" height="35px" src='images/user (2).png'alt=''/>
<p className='text-white mb-1'>

Log in<br/>  Account
</p>


</Link>



</div>
<div>

<Link to='/cart'   className='d-flex align-items-center gap-10  text-white'>

<img    width="35px" height="35px" src='images/shopping-cart-7591775.png'alt='shooping-cart'/>
<div className='d-flex flex-column'>
<span   className='badge  bg-white  text-dark'>0</span>


<p  className='mb-0 text-white'>$  500</p>
</div>


</Link>





</div>

</div>



</div>







</div>

</div>




</header>   







<header className=' header-bottom   py-3'>  
<div className='container-xxl'>

<div className='row'>
  <div className='col-12'>
  
  <div className='menu-bottom d-flex align-items-center gap-30'>

<div>


<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle  bg-transparent  align-item-center border-0 d-flex gap-15" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    <img width="28px" height="28px"src="images/r8.jpg" alt='menu-icon-svg-23'/>
  
  <span className='me-5 d-inline-block ss'>shop categories </span>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><Link className="dropdown-item text-white" to="/">Action</Link></li>
    <li><Link className="dropdown-item text-white"  to="/">Another action</Link></li>
    <li><Link className="dropdown-item  text-white" to="/">Something else here</Link></li>
  </ul>
</div>




</div>

<div  className='menu-links'>

      <div className='d-flex  align-items-center  gap-15'>
      
          <NavLink   className='' to="/home">
          Home
          
          </NavLink>

          <NavLink   className='' to="/product">
          our store
          
          </NavLink>

          <NavLink   className='' to="/blogs">
          Blogs
          
          </NavLink>

          <NavLink   className='' to="/contact">
          contact
          
          </NavLink>
      
      
      </div>




</div>









  </div>
  
  </div>



</div>



</div>
</header>







   </>
  )
}

export default Header
