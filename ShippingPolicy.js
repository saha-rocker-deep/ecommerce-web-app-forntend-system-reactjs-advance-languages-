import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from "../components/Meta";
import {Link} from "react-router-dom";


function ShippingPolicy() {
  return (
    <>
    <Meta   title={"Shipping policy"} />
  
  <BreadCrumb title="Shipping  policy"/>



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

export default ShippingPolicy