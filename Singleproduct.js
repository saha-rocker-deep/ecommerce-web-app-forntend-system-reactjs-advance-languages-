    import React, { useState } from 'react'
    import BreadCrumb from '../components/BreadCrumb'
import Meta from "../components/Meta";
import {Link} from "react-router-dom";

import ReactStars from "react-rating-stars-component";

import Productcard from '../components/Productcard';
import ReactImageZoom from 'react-image-zoom';
import   Color from  '../components/Color';
import { IoIosGitCompare } from "react-icons/io";

import { FaRegHeart } from "react-icons/fa";




    function Singleproduct() {

      const props ={width:400, height :600 ,zoomwidth:600,img:"https://www.bhphotovideo.com/images/images2000x2000/klipsch_1062799_reference_on_ear_bluetooth_black_1302718.jpg"}

const [orderedproduct,setorderedproduct]=useState(true);


   const copyToClipboard = (text) => {
  console.log('text', text)
  var textField = document.createElement('textarea')
  textField.innerText = text
  document.body.appendChild(textField)
  textField.select()
  document.execCommand('copy')
  textField.remove()
}



      return (
        <>
        <Meta   title={"Product Name"} />

<BreadCrumb title="Product Name "/>
<div className='  main-product-wrapper  py-5 home-wrapper-2'>

<div className='container-xxl '>
<div className='row'>

<div   className='col-6'>

<div className='main-product-image'>
<div> 
<ReactImageZoom {...props} />

</div>

</div>

<div  className='other-product-images d-flex flex-wrap  gap-15 '>

<div><img src='https://www.bhphotovideo.com/images/images2000x2000/klipsch_1062799_reference_on_ear_bluetooth_black_1302718.jpg' className='img-fluid' alt=""/></div>
<div>   <img src='https://www.bhphotovideo.com/images/images2000x2000/klipsch_1062799_reference_on_ear_bluetooth_black_1302718.jpg'  className='img-fluid'  alt=""/></div>
<div> <img src='https://www.bhphotovideo.com/images/images2000x2000/klipsch_1062799_reference_on_ear_bluetooth_black_1302718.jpg'  className='img-fluid' alt=""/>   </div>
<div><img src='https://www.bhphotovideo.com/images/images2000x2000/klipsch_1062799_reference_on_ear_bluetooth_black_1302718.jpg'   className='img-fluid'  alt=""/></div>
</div>

</div>
<div   className='col-6'>

<div className='main-product-details'>

<div className='border=bottom'>

<h3 className='title'>
kids  Headphones Bulk 10 pack multi  colored for students

</h3>

</div>


<div className='border-bottom  py-3'>

<p className='price'>$100</p>

<div className='d-flex align-items-center gap-10'>

<ReactStars
count={5}

size={24}
value={4}
edit={true}
activeColor="#ffd700"

/>


<p className='mb-0  t-review'>

       ( 2 Reviws)

</p>

</div>

<a  className='review-btn' href="#review">write a Review </a>

</div>



<div className='  py-3'>



<div className='d-flex gap-10 align-items-center'>

<h3 className='product-heading'>Type:</h3> <p className="product-data">WATCH</p>


</div>

<div className='d-flex gap-10 align-items-center my-2'>

<h3 className='product-heading'>Brand:</h3> <p className="product-data">gFD</p>


</div>
<div className='d-flex gap-10 align-items-center my-2'>

<h3 className='product-heading'>category:</h3> <p className="product-data">gFD</p>


</div>


<div className='d-flex gap-10 align-items-center my-2'>

<h3 className='product-heading'>Tags:</h3> <p className="product-data">Watch</p>

</div>



<div className='d-flex gap-10 align-items-center my-2'>

<h3 className='product-heading'>Availablity:</h3> <p className="product-data">IN STOCK</p>

</div>


<div className='d-flex  gap-10 align-items-center mt-2  mb-3'>

<h3 className='product-heading'>size:</h3>


<div  className='d-flex flex-wrap gap-15'>

<span className='badge border-1 bg-white border text-dark border-secondary'>s</span>
<span className='badge  border-1 border bg-white  text-dark border-secondary'>M</span><span className='badge  border border-1 bg-white  text-dark border-secondary'>XL</span>
<span className='badge border   border-1  bg-white  text-dark border-secondary'>XXL</span>
</div>

</div>




<div className='d-flex      gap-10 align-items-center  mt-2  mb-3'>

<h3 className='product-heading'>color:</h3>

<Color/>

</div>







<div className='d-flex gap-15 align-items-center flex-row mt-2  mb-3'>

<h3 className='product-heading '>quantity:</h3>

<div className='mb-1'>
<input type='number'  className='form-control'  name='' id='' min={1} max={10} style={{width:" 70px"}}/>
 
</div>

<div  className='d-flex align-items-center  gap-30 ms-5' ><button  className='button'   type="submit">Add to cart</button>
<Link className="button signup" to="/signup">  Buy it now</Link></div>





</div>


<div  className='d-flex  align-items-center  gap-15'>

<div>   <a href=''> <IoIosGitCompare   className='fs-5  me-2'/>  Add to compare</a></div>

<div>    <a href=''> <FaRegHeart     className='fs-5  me-2'/>     Add to wishlist</a> </div>


</div>



<div className='d-flex gap-10 align-items-center flrx-column my-3'>

<h3 className='product-heading'>Shipping & Returns:</h3>

<p className="product-data">Free shipping and returns  avialble on all orders ! we ship all us domestic orders within <b> 5-10 business days  </b></p>


</div>




<div className='d-flex gap-10 align-items-center  my-2'>

<h3 className='product-heading'> product Link:</h3>

<a href='javascript:void(0);' onClick={()=>{copyToClipboard("https://www.bhphotovideo.com/images/images2000x2000/klipsch_1062799_reference_on_ear_bluetooth_black_1302718.jpg")}}>copy product Link</a>

</div>



</div>












</div>

</div>

</div>


</div>


</div>



<div className='description-wrapper py-5 home-wrapper-2'>

<div className='container-xxl'>

<div className='row'>

<div className='col-12'>
<h4>Description</h4>

<div className='bg-white  p-3'>




<p className=''>

LOREM IContrary to popular belief, Lorem Ipsum is not si
mply random text. It has roots in a piece of classical Latin lite
rature from 45 BC, making it over 2000 years old. Richard McClintock
, a Latin professor at Hampden-Sydney College in Virginia, looked up o
ne of the more obscure Latin words, consectetur, from a Lorem Ipsum pass
age, and going through the cites of the word in classical lit
erature, discovered the undoubtable source. Lorem
 Ipsum comes from sections

</p>


</div>
</div>
</div>

</div>

</div>






<section  id='review' className='reviews-wrapper home-wrapper-2'>




<div className='container-xxl'>
<div className='row'>

<div className='col-12'>
<h3>Reviews</h3>
<div className='review-inner-wrapper'>

<div className='review-head  d-flex justify-content-between align-items-end'>

<div>
<h4>

Customer Reviews
</h4>
<div  className='d-flex   align-items-center  gap-10'>

<ReactStars
count={5}

size={24}
value={4}
edit={true}
activeColor='#ffd700'

/>

<p className='mb-0'>Based on 2 Reviews</p>


</div>
</div>



{orderedproduct && (

<div>  <a  className='text-dark text-decoration-underline'>   write Review</a> </div>

)

}


</div>
<div id='review' className='review-form   py-4'>
<h4>write a review</h4>
<form  action=''   className='d-flex flex-column   gap-15'>
<h4>
<h4  className='mb-2'> customer Reviews</h4>

</h4>
<div>

<ReactStars
count={5}

size={24}
value={4}
edit={true}
activeColor='#ffd700'

/>
</div>

<div>
<textarea name=''  id=''   className='form-control'  placeholder='comment' cols='30' rows='4                                                 '></textarea>
</div>

<div  className='d-flex justify-content-end'>
<button  className='button border-0'>

submit Review

</button>
</div>

</form>
</div>

<div  className='reviews  mt-4'>
<div className='review'>
<div className='d-flex gap-10 align-items-center'>
<h6  className=''>aniket</h6>
<ReactStars
count={5}

size={24}
value={4}
edit={true}
activeColor='#ffd700'

/>
</div>




<p className='mt-3 '>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially </p>
</div>

</div>

</div>
</div>

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





</div>










</div>



</section> 

        
        
        </>
      )
    }
    
    export default Singleproduct