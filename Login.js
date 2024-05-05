import React from 'react';
import BreadCrumb from '../components/BreadCrumb'
import Meta from "../components/Meta";
import {Link} from "react-router-dom";


function Login() {
  return (
   <>
     
<Meta   title={"Login"} />

<BreadCrumb title="Login "/>


<div  className='login-wrapper  py-5 home-wrapper-2'>

<div className='row'>

<div  className='col-12'>

<div className='auth-card'>
<h3 className='text-center  mb-3'>Login</h3>

<form action="" className='d-flex flex-column gap-15'>

<div>   <input  type='email'  placeholder='email'  className='form-control' /></div>

<div className='mt-1'>   <input  type='password' placeholder='password' className='form-control' /></div>
<div>
<Link to="/forgot-password"> Forget password?</Link>
<div  className='d-flex mt-3 justify-content-center gap-15 align-items-center'>

<button  className='button'   type="submit">Login</button>
<Link className="button signup" to="/signup">  signup</Link>

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

export default Login
