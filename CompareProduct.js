import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from "../components/Meta";
import color  from "../components/Color";

const CompareProduct = () => {
  return (
   <>
   <Meta   title={"compareproduct"} />

   <BreadCrumb title="compare products"/>
   <div className='compare-product-wrapper py-5  home-wrapper-2'>
   <div className='container-xxl'>
   
   <div className='row'>
   <div className='col-3'>
   
   <div className='compare-product-card   position-relative'>


<img  src="images/cross2.png" alt="cross"  className='position-absolute    cross img-fluid'/>



  <div   className='product-card-image'>

   <img   src="images/headphone.jpg" className='img-fluid' alt="smart.jpg"/>

   </div>


   <div  className='compare-product-details'>


   <h5 className='title'>       smart watch best view on upper layer of  watch </h5>

   <h6 className='price  mb-2 mt-3'>$100</h6>
   



   <div>


   <div className='product-detail'>
   
   <h5>Brand:</h5>

   <p>  Havels</p>



   </div>


   <div className='product-detail'>
   
   <h5>Type:</h5>

   <p>  Headphone</p>



   </div>



   <div className='product-detail'>
   
   <h5>avialability:</h5>

   <p>  in stock</p>



   </div>



   <div className='product-detail'>
   
   <h5>color:</h5>

    <color/>



   </div>


   <div className='product-detail'>
   
   <h5>size:</h5>

  <div className='d-flex gap-10'>
  <p>S</p>

  <p>M</p>
  
  
  </div>



   </div>


</div>



   
   </div>



   
   
   </div>
   
   </div>


   <div className='col-3'>
   
   <div className='compare-product-card   position-relative'>


<img  src="images/cross2.png" alt="cross"  className='position-absolute    cross img-fluid'/>



  <div   className='product-card-image'>

   <img   src="images/headphone.jpg" className='img-fluid' alt="smart.jpg"/>

   </div>


   <div  className='compare-product-details'>


   <h5 className='title'>       smart watch best view on upper layer of  watch </h5>

   <h6 className='price  mb-2 mt-3'>$100</h6>
   



   <div>


   <div className='product-detail'>
   
   <h5>Brand:</h5>

   <p>  Havels</p>



   </div>


   <div className='product-detail'>
   
   <h5>Type:</h5>

   <p>  Headphone</p>



   </div>



   <div className='product-detail'>
   
   <h5>avialability:</h5>

   <p>  in stock</p>



   </div>



   <div className='product-detail'>
   
   <h5>color:</h5>

    <color/>



   </div>


   <div className='product-detail'>
   
   <h5>size:</h5>

  <div className='d-flex gap-10'>
  <p>S</p>

  <p>M</p>
  
  
  </div>



   </div>


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

export default CompareProduct;
