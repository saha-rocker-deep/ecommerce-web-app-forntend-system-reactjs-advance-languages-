import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from "../components/Meta";
import {Link} from "react-router-dom";

function forgotpassword() {
  return (
<>
<Meta   title={"forget passowrd"} />

<BreadCrumb title="forgetpassword"/>




<div  className='login-wrapper  py-5 home-wrapper-2'>

<div className='row'>

<div  className='col-12'>

<div className='auth-card'>
<h3 className='text-center  mb-3'>Reset your password </h3>

<p className='text-center my-2'>  we will send  you email to reset a   password</p>

<form action="" className='d-flex flex-column gap-15'>

<div>   <input  type='email'  placeholder='email'  className='form-control' /></div>


<div>

<div  className='d-flex mt-3 justify-content-center    flex-column gap-15 align-items-center'>

<button  className='button'  type='submit'>submit</button>
<Link to='/login'> cancel</Link>

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

export default forgotpassword
