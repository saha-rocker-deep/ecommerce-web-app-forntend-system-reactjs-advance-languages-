import React from 'react';
import BreadCrumb from '../components/BreadCrumb'
import Meta from "../components/Meta";
import { CiHome } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";

const Contact = () => {
  return (
<>
  
<Meta   title={"contact us"} />

<BreadCrumb title="contact-Us "/>



<div  className='contact-wrapper  py-5  home-wrapper-2'>
<div  className='container-xxl'>
<div className='row'>

<div className='col-12'>

<iframe


src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117738.80487794244!2d88.28693459243937!3d22.752847317198583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89aefcc6fe3a7%3A0x6a6d434ac504dbc5!2z4KSs4KWI4KSw4KSV4KSq4KWB4KSwLCDgpLXgpYfgpLjgpY3gpJ8g4KSs4KSC4KSX4KS-4KSy!5e0!3m2!1shi!2sin!4v1702380453550!5m2!1shi!2sin" width="600" height="450"  className='border-0  w-100' allowfullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

</div>


<div className='col-12 mt-5'>
 <div className='contact-inner-wrapper  d-flex    justify-content-between  '>
 
 <div>
 <h3 className='contact-title'>contact</h3>

<form  action=''   className='d-flex flex-column   gap-15'>

<div>
<input type='text' className='form-control '  placeholder='name'/>
</div>

<div>
<input type='email' className='form-control  '  placeholder='email'/>
</div>

<div>
<input type='tel' className='form-control' placeholder='mobile Number'/>
</div>

<div>
<textarea name=''  id=""   className="   form-control" placeholder='comment' cols="30" rows="4 "></textarea>
</div>

<div>
<button  className='button border-0'>

submit

</button>
</div>

</form>


 </div>


 <div className='mt-1'>
 <h3 className='contact-title  mb-4'>
 Get in touch with us 
 </h3>
 

 <div>

 <ul className='ps-0 gap-15'>
 
 <li  className='mb-3 d-flex gap-15 align-items-center'>  <CiHome   className='fs-5'/>
  <address>   Hno:277  , Near village   debpukur ,  barrackpure ,  n 24 paraganas</address>
        </li> 
 <li   className='mb-3 d-flex gap-15 align-items-center '><IoIosCall  className='fs-5'/><a className='text-dark' href="tel:+9167867866">+91 82345467756</a></li>
 <li   className='mb-3 d-flex gap-15 align-items-center'>  <CiMail   className='fs-5'/> <a  className='text-dark' href="mailto:aniketkumarsaha52gmail.com">aniketkumarsaha5gmail.com</a></li>
 <li   className='mb-3 d-flex gap-15 align-items-center'>   <CiCircleInfo  className='fs-5'/><p>monday to friday 10pm</p></li>
 </ul>
 
 </div>
 
 </div>



 
 </div>

</div>




</div>

</div>

</div>


</>
  )
}

export default Contact
