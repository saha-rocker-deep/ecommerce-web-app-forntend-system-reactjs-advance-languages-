import React from 'react'
import Meta from "../components/Meta";
import BreadCrumb from '../components/BreadCrumb'
const wishlist = () => {
  return (
   <>
   
   <Meta   title={"wishlist"} />

   <BreadCrumb title="wishlist"/>


<div  className='wishlist-wrapper home-wrapper-2 py-5'>
<div  className='container-xxl'>
<div className='row'>

<div className='col-3'>

<div className='wishlist-card  position-relative'>

<img src='images/cross2.png' alt='cross' className='position-absolute cross img-fluid'/>



<div  className='wishlist-card-image'>

<img src='images/headphone.jpg' className='img-fluid w-100' alt="headphone"/>



</div>

<div className='bg-white   px-3  py-3'>
<h5  className='title'>
{" "}
honor  t1 7.0.1   best headphone  7hz frquency sound

</h5>

<h6  className='price'>$  100</h6>



</div>



</div>

</div>


<div className='col-3'>

<div className='wishlist-card  position-relative'>

<img src='images/cross2.png' alt='cross' className='position-absolute cross img-fluid'/>



<div  className='wishlist-card-image'>

<img src='images/headphone.jpg' className='img-fluid w-100' alt="headphone"/>



</div>

<div className='bg-white   px-3  py-3'>
<h5  className='title'>
{" "}
honor  t1 7.0.1   best headphone  7hz frquency sound

</h5>

<h6  className='price'>$100</h6>



</div>



</div>

</div>

</div>

</div>


</div>



   
   </>
  )
}

export default wishlist
