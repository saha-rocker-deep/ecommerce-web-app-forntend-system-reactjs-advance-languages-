import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from "../components/Meta";
import {Link} from "react-router-dom";

function Signup() {
  return (
   <>
   <Meta   title={"signup"} />

<BreadCrumb title="signup"/>
   

<div  className='login-wrapper  py-5 home-wrapper-2'>

<div className='row'>

<div  className='col-12'>

<div className='auth-card'>
<h3 className='text-center  mb-3'>Signup</h3>

<form action="" className='d-flex flex-column gap-15'>


<div>   <input  type='text'  placeholder='Name'  className='form-control' /></div>


<div>   <input  type='email'  placeholder='email'  className='form-control' /></div>

<div>   <input  type='tel' name='mobile' placeholder='Mobile Number'  className='form-control' /></div>

<div className='mt-1'>   <input  type='password' placeholder='password' className='form-control' /></div>
<div>

<div  className='d-flex mt-3 justify-content-center gap-15 align-items-center'>

<button  className='button'>signup</button>


</div>
</div>
</form>


</div>

</div>

</div>

</div>

   
   </>
  )
}

export default Signup
