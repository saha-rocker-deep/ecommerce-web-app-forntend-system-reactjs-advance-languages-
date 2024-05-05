import React from 'react'
import {Link} from "react-router-dom";
import { SlSocialLinkedin } from "react-icons/sl";
import { GrInstagram } from "react-icons/gr";
import { AiOutlineGithub } from "react-icons/ai";import { FaYoutube } from "react-icons/fa";
import { PiYoutubeLogo } from "react-icons/pi";

const Footer = () => {
  return (
<>
<footer className='py-3'>
  
<div  className='container-xxl'>
<div className='row   align-items-center'>
 <div className='col-5'>
 <div className='footer-top-data d-flex  gap-30 align-items-center'>
 <img   width="35px"  height="35px"   src='images/newsletter.png'  alt='newsletter'   />
<h2  className='mb-0 text-white'>

sign  up for Newsletter
</h2>

 

 </div>



  


</div>



<div className='col-7'>

<div class="input-group ">
  <input type="text" className="form-control  py-1" placeholder="your email address" aria-label="your email address" aria-describedby="basic-addon2"/>
  <span className="input-group-text p-3" id="basic-addon2">subscribe  </span>
</div>

                    

</div>



</div>
</div>
</footer>
<footer className='py-4'>
<div className="container-xxl">

<div  className='row'>


<div   className='col-4'> 
<h4 className='text-white  mb-4'>  contact us</h4>

<div className='d-flex flex-column  gap-3  '>

<div>
<address   className='text-white'>

mno : 277 Near  will  chopal ,sonipat ,Haryana <br/>
pincode:131101

</address>

<a href='tel:+91 826494983' className='nt-4  d-block mb-3 text-white'>
+91 8264954234

</a>

<a href='mailto:navadeep38@gmail.com'
 className='mt-4 d-block mb-2  text-white '>
   navdeephiya3@gmail.com
  
 </a>
</div>
<div  className='social_icons   d-flex  gap-4'>

<SlSocialLinkedin   className='text-white  fs-4'/>
<GrInstagram   className='text-white  fs-4' />
<AiOutlineGithub  className='text-white    fs-4' />

<PiYoutubeLogo  className='text-white  fs-4'   />
</div>
</div>


</div>
<div   className='col-3'>

<h4 className='text-white  mb-4'>
information
</h4>
<div   className='footer-links    d-flex  flex-column'>

<Link  to="/secure-policy" className='text-white py-2  mb-1'>privacy policy</Link>
<Link   to="/refund-policy"  className='text-white py-2  mb-1'>Refund policy</Link>
<Link  to="/shipping-policy"   className='text-white py-2  mb-1'>Shipping policy</Link>
<Link  to="/termandconditions"  className='text-white py-2  mb-1'> Terms  & condition </Link>
<Link    className='text-white py-2  mb-1'>Blogs</Link>


</div>

</div>
<div   className='col-3'> 

<h4 className='text-white  mb-4'>
Account

</h4>

<div   className='footer-links    d-flex  flex-column'>
<Link   className='text-white py-2  mb-1'>About</Link>
<Link    className='text-white py-2  mb-1'>faq</Link>
<Link     className='text-white py-2  mb-1'>contact</Link>



</div>





</div>
<div   className='col-2'> 
<h4 className='text-white  mb-4'>
Quick Links
</h4>


<div   className='footer-links    d-flex  flex-column'>
<Link   className='text-white py-2  mb-1'>Laptops</Link>
<Link    className='text-white py-2  mb-1'>HeadPhones</Link>
<Link     className='text-white py-2  mb-1'>Tablet</Link>
<Link    className='text-white py-2  mb-1'> Watch</Link>


</div>



</div>





</div>

</div>




</footer>
<footer className='py-4'>

    <div className='container-xxl'>
    
      <div  className='row'>
      
        <div  className='col-12'>
        
        <p className='text-center  mb-0 text-white '>

&copy;   {new Date().getFullYear()}; powered by Developer

        </p>
        
        
        </div>
      
      
      </div>
    
    </div>




</footer>

</>
  )
}

export default Footer


