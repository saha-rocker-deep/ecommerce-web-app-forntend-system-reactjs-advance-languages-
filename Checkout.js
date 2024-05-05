import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from "../components/Meta";
import {Link} from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";


function Checkout() {
  return (
   <>
     
  <Meta   title={"checkp"} />

  <BreadCrumb title="Cart"/>


<div className='checkout-wrapper  py-5 home-wrapper-2'> 

<div className='conrtainer-xxl'>
<div className='row   '>


<div className='col-7  '>
<div className='checkout-left-data'>

<h3 className='website-name'>Dev Corner</h3>


<nav style={{"--bs-breadcrumb-divider": '>'}}aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item "><Link  className='text-dark  total-price' to="/cart">Cart</Link></li>
    &nbsp;/
    <li class="breadcrumb-item active" aria-current="page">information</li>
    &nbsp;/
    <li class="breadcrumb-item active" aria-current="page"><Link to="">Shipping</Link></li>

    &nbsp;/


    &nbsp;/
    <li class="breadcrumb-item active" aria-current="page">payment</li>


  </ol>
</nav>


<h4 className='title total'>  contact information</h4>

<p className='user-details'>

Aniket kumar saha {"aniketkumarsaha5@gmail.com"}


</p>
<h4  className="mb-3">Shipping  Address</h4>

<form action=''  className='d-flex gap-30  flex-wrap justify-content-between '>





<div   className='w-100'>

<select  className='formn-control form-select'>

<option  value=""   selected disabled>

Select country
</option>

</select></div>

<div  className='flex-grow-1'>
<input type='text'  placeholder='First name'  className='form-control'/>

</div>




<div className='flex-grow-1'>
<input type='text' placeholder='Last name' className='form-control'/>

</div>


<div  className='w-100'>
<input type='text'  placeholder='Address' className='form-control'/>

</div>


<div  className='w-100'>
<input type='text' placeholder='Apartment ,suite,etc' className='form-control'/>

</div>


<div    className='flex-grow-1'>
<input type='text' placeholder='city' className='form-control'/>

</div>



<div  className='flex-grow-1' ><input type='text'  className='form-control'/></div>

<div>
<select  className='formn-control form-select'>

<option value=""  selected disabled>


select state 
</option>

</select>

</div>

<div  className='flex-grow-1'>

<input type='text' placeholder='zipcode' className='form-control  '/>

</div>


<div className='w-100'>

<div className='d-flex justify-content-between align-items-center'>

<Link  to="/cart"   className='text-dark'> <FaArrowLeftLong />   Return  to  cart</Link>


<Link  to="/cart"  className='button' >continue to shiping</Link>
</div>
</div>


</form>




</div>
</div>



<div className='col-5  '>

<div className='border-bottom py-4'>


<div className='d-flex mb-2 align-items-center gap-10'>
<div  className='w-75 d-flex  gap-10'>

<div  className='w-25  position-relative'>

<span  style={{top:"-20px",right:"2px"}}
  className='badge  bg-secondary text-white rounded-circle p-3 position-absolute '
>
1

</span>

<img  src="images/headphone.jpg"  className='img-fluid'/></div>
<div>
<h5 className='title total-price'>
#ghghg
</h5>
<p  className='total-price'>  s/3agfgfdd </p>
</div>


</div>


<div  className='flex-grow-1'>
<h5  className='total'>$100</h5>

</div>


</div>

</div>
<div className='border-bottom py-4'>
<div  className='d-flex justify-content-between align-items-center'>
<p  className='total'>subtotal</p>

<p  className='total-price'>$ 10000</p>

</div>



<div  className='d-flex justify-content-between align-items-center'>
<p className='mb-0 total'>Shipping</p>

<p className='mb-0  total-price'>$ 10000</p>

</div>



</div>




<div className='d-flex justify-content-between align-items-center  border-bottom   py-4'>
<h4  className='total'>Total</h4>

<h5 className='total-price'>#$ 10000s</h5>
</div>

</div>



</div>




</div>

</div>




   </>
  )
}

export default Checkout