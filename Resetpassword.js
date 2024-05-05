import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from "../components/Meta";
import {Link} from "react-router-dom";

function Resetpassword() {
  return (
<>
<Meta   title={"Reset password"} />

<BreadCrumb title="Reset  password"/>

<div  className='login-wrapper  py-5 home-wrapper-2'>

<div className='row'>

<div  className='col-12'>

<div className='auth-card'>
<h3 className='text-center  mb-3'>Reset   password</h3>

<form action="" className='d-flex flex-column gap-15'>

<div>   <input  type='password' name='password' placeholder='password'  className='form-control' /></div>

<div className='mt-1'>   <input name='confpassword' type='password' placeholder='confirm password' className='form-control' /></div>
<div>

<div  className='d-flex mt-3 justify-content-center gap-15 align-items-center'>

<button  className='button'   type="submit">ok</button>


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

export default Resetpassword