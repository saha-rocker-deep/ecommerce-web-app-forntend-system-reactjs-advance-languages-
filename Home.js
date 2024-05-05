import React from 'react'
import {Link}  from "react-router-dom";
import { RiCaravanLine } from "react-icons/ri";
import { GiBoxUnpacking } from "react-icons/gi";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { LiaPercentageSolid } from "react-icons/lia";
import { PiCreditCardFill } from "react-icons/pi";
import Marquee from "react-fast-marquee";
import Blogcard from '../components/Blogcard';
import Productcard from '../components/Productcard';
import Specialproduct from '../components/Specialproduct';

const Home = () => {
  return (
   
<>
<section className='home-wrapper-1  py-5'> 
<div  className='container-xxl'>
<div className='row  '>
<div className='col-6'>
<div className='main-banner  position-relative     p-3'>
<img src='images/airdopsman.jpg' width="150%" height="150%" className='img-fluid rounded-3' alt=""/>
<div className='main-banner-content   position-absolute'>
<h4>
SUPERCHARGED FOR PROS .
</h4>
 <h5>
airdops
 
 </h5>

<p>
From $999.00 or $41.62/mo

</p>

<Link className='button'>
Buy Now
</Link>



</div>

</div>
</div>

<div className='col-6'>
<div className='d-flex  flex-wrap justify-content-between  align-items-center  '>
<div className='small-banner position-relative p-3'>
<img  width="125%" height="200%" src="images/laptop.jpg" alt="main banner" className='img-fluid rounded-3' />

<div className='small-banner-content  position-absolute'> 


<h4>Best sell</h4>

<h5> Laptop Max</h5>

<p>From $999.00 or $41.62/mo</p>



</div>






</div>



<div className='small-banner position-relative p-3'>
<img  width="125%" height="200%" src="images/ipad.jpg" alt="main banner" className='img-fluid rounded-3' />

<div className='small-banner-content  position-absolute'> 


<h4>New arrival</h4>

<h5>  Buy ipad Air</h5>

<p>From $999.00 or $41.62/12mo</p>



</div>






</div>



<div className='small-banner position-relative p-3'>
<img  width="100%" height="100%" src="images/smart3.jpg" alt="main banner" className='img-fluid rounded-3' />

<div className='small-banner-content2  position-absolute'> 


<h4>15% OFF</h4>

<h5  className=''> SMARTWATCH 7</h5>

<p>shop the latest band styles and colors</p>



</div>






</div>




<div className='small-banner position-relative p-3'>
<img  width="150%" height="150%" src="images/airpods2.jpg" alt="main banner" className='img-fluid rounded-3' />

<div className='small-banner-content  position-absolute'> 


<h4>FREE ENGRAVING</h4>

<h5  className=''> Airpods Max</h5>

<p>    High-fidelity   playback & ultra-low distortion  </p>



</div>






</div>












</div>

</div>


   

</div>

</div>

</section>

<section   className='home-wrapper-2  py-5'>

<div   className='container-xxl'> 

<div  className='row'>

<div   className='col-12'>
<div  className='services   d-flex align-items-center  justify-content-between'>
<div  className='d-flex align-items-center gap-10' >

<RiCaravanLine   className='fs-1'/>
<div>
<h6>

FREE shipping
</h6>
<p   className='mb-0'>
from all order over $5
</p>
</div>


</div>
<div   className='d-flex align-items-center gap-10'>


<GiBoxUnpacking    className='fs-1'/>

<div>
<h6>
Daily surprise offers
</h6>
<p  className='mb-0'>

save upto 25% off
</p>

</div>

</div>
<div  className='d-flex align-items-center gap-10'>





<MdOutlineHeadsetMic   className='fs-1'/>

<div>
<h6>
support 24/7
</h6>
<p   className='mb-0'>
shop with an expert
</p>

</div>




</div>


<div     className='d-flex align-items-center gap-10'>



<LiaPercentageSolid className='fs-1'/>

<div><h6>
Affortable prices
</h6>
<p   className='mb-0'>
Get Factory Default  price
</p>

</div>





</div>




<div     className='d-flex align-items-center gap-10'>



<PiCreditCardFill  className='fs-1'/>

<div>
<h6>
secure payment
</h6>
<p    className='mb-0'>
100% protected payment
</p>

</div>


</div>


</div>


</div>

 
</div>


</div>

</section>

<section   className='home-wrapper2 py-5'> 




 <div   className='container-xxl'>
 <div  className='row'>
 <div    className='col-12'>
 <div  className='categories  d-flex justify-content-between  flex-wrap  align-items-center'>
 
 <div   className='d-flex   align-items-center'>
 <div  >
 <h6 >cameras</h6>

 <p>10 items</p>
 
 </div>
<img width="108px" height="108px" src='images/camera.jpg'  alt='camera'/>
 
 </div>
 

<div   className='d-flex   align-items-center'>
<div  >
<h6 >smart-tv</h6>

<p>10 items</p>

</div>
<img  width="108px" height="108px"  src='images/smart-tv.jpg'  alt='camera'/>

</div>

<div   className='d-flex  align-items-center'>
<div  >
<h6 >freez</h6>

<p>10 items</p>

</div>
<img   width="108px" height="108px"  src='images/freez.jpg'  alt='camera'/>

</div>


<div   className='d-flex   align-items-center'>
<div  >
<h6 >smart-watch</h6>

<p>10 items</p>

</div>
<img    width="108px" height="108px"  src='images/smart-watch.jpg'  alt='camera'/>

</div>


<div   className='d-flex   align-items-center'>
<div  >
<h6 >cameras</h6>

<p>10 items</p>

</div>
<img width="108px" height="108px" src='images/camera.jpg'  alt='camera'/>

</div>


<div   className='d-flex   align-items-center'>
<div  >
<h6 >smart-tv</h6>

<p>10 items</p>

</div>
<img  width="108px" height="108px"  src='images/smart-tv.jpg'  alt='camera'/>

</div>

<div   className='d-flex  align-items-center'>
<div  >
<h6 >freez</h6>

<p>10 items</p>

</div>
<img   width="108px" height="108px"  src='images/freez.jpg'  alt='camera'/>

</div>


<div   className='d-flex  align-items-center'>
<div  >
<h6 >smart-watch</h6>

<p>10 items</p>

</div>
<img    width="108px" height="108px"  src='images/smart-watch.jpg'  alt='camera'/>

</div>









 </div>
 
 </div>
 
 
 </div>
 
 
 </div>
</section>


<section className='featured-wrapper py-5 home-wrapper-2'>


<div className='container-xxl'>
<div className='row'>
<div  className='col-12'>
<h3 className='section-heading'>featured collection</h3>
</div>
 
<Productcard/>
<Productcard/>
<Productcard/>
<Productcard/>

</div>


</div>



</section> 



<section  className='famous-wrapper  py-5 home-wrapper-2'>
 
<div className='container-xxl'>

<div className='row '>

<div className='col-3'>


<div  className='famous-card position-relative '>
<img  width="320px"  height="390px"src='images/famous1.jpg'   alt='fammous' /> 

<div   className='famous-content  position-absolute'>

<h5>Big screen</h5>


<h6> smart watch series 7</h6>

<p>   From $399 or $16.62/mo. for  24 mo .*</p>
</div>








</div>

</div>



<div className='col-3'>


<div  className='famous-card position-relative  '>
<img  width="320px"  height="390px"src='images/famous2-laptop.jpg'  alt='fammous' /> 

<div   className='famous-content  position-absolute'>

<h5>studio Display</h5>


<h6> 600 nits of brightness</h6>

<p>   27-inch  5k Retina Display     </p>
</div>








</div>

</div>





<div className='col-3'>


<div  className='famous-card position-relative  '>
<img  width="320px"  height="390px"src='images/double-ph.jpg'  alt='fammous' /> 

<div   className='famous-content  position-absolute'>

<h5>Studio Displays</h5>


<h6> smart phone 13 pro</h6>

<p>   Now in green .from $999.00 or $41.62/mo ,for 24 month Footnote</p>
</div>








</div>

</div>





<div className='col-3'>


<div  className='famous-card position-relative  '>
<img  width="320px"  height="390px"src='images/double-ph.jpg'  alt='fammous' /> 

<div   className='famous-content  position-absolute'>

<h5>Studio Displays</h5>


<h6> smart phone 13 pro</h6>

<p>   Now in green .from $999.00 or $41.62/mo ,for 24 month Footnote</p>
</div>








</div>

</div>









</div>

</div>




</section>





<section  className='special-wrapper  py-5 home-wrapper-2'>
<div className='container-xxl'>
<div className='row'>
<div  className='col-12'>
<h3 className='section-heading'>special collection</h3>
</div>


</div>


<div   className='row    '>   

<Specialproduct/>
<Specialproduct/>
<Specialproduct/>
</div>


</div>





</section>







<section className='popular-wrapper py-5 home-wrapper-2'>


<div className='container-xxl'>
<div className='row'>
<div  className='col-12'>
<h3 className='section-heading'>our popular products</h3>
</div>
 

</div>



<div   className='row'>

<Productcard/>

<Productcard/>


<Productcard/>


<Productcard/>




</div>










</div>



</section> 






<section  className='marque-wrapper  home-wrapper-2  py-5 '>

<div className='container-xxl'>
<div  className='col-12'>
<div   className='marquee-inner-wrapper  bg-white  card-wrapper'>
<Marquee  className='d-flex   ' >

<div    className='mx-5 w-25'>
<img  width="108px" height="108px" src="images/apple.png" alt="brand"/>    

</div>


<div    className='mx-5 w-25' >
<img    width="108px" height="108px" src="images/canon.png" alt="brand"/>    

</div>

<div       className='mx-5 w-25'>
<img      width="108px" height="108px"   src="images/intel.png" alt="brand"/>    

</div>


<div      className='mx-5 w-25 '>
<img     width="108px" height="108px" src="images/Dell.png" alt="brand"/>    

</div>


<div     className='mx-5 w-25 '>
<img    width="108px" height="108px" src="images/samsung.png" alt="brand"/>    

</div>



 
</Marquee>
</div>
</div>

</div>


</section>







<section className='blog-wrapper py-5 home-wrapper-2'>


<div className='container-xxl'>
<div className='row'>
<div  className='col-12'>
<h3 className='section-heading'>our latest blogs</h3>
</div>
 

</div>


<div className='row'>

<div  className='col-3'><Blogcard/></div>
<div  className='col-3'><Blogcard/></div>
<div  className='col-3'><Blogcard/></div>
<div  className='col-3'><Blogcard/></div>
</div>



</div>



</section> 




</>
  
  )
}

export default Home
//rafce