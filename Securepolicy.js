import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from "../components/Meta";
import {Link} from "react-router-dom";
function Securepolicy() {
  return (
    <>
    <Meta   title={"privacy policy"} />
  
  <BreadCrumb title="privacy policy"/>




  <section  className='policy-wrapper py-5  home-wrapper-2'>
<div  className='container-xxl'>

<div  className='row'>

<div  className='policy'></div>



</div>


</div>


</section>
    
    </>
  )
}

export default Securepolicy;