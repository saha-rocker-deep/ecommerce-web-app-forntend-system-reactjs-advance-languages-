import React, { useState } from 'react'
import BreadCrumb from './BreadCrumb';
import  Meta  from   "../components/Meta";
import ReactStars from "react-rating-stars-component";
import { GiHamburgerMenu } from "react-icons/gi";
import Productcard from   "../components/Productcard";
import  Color  from  "../components/Color";
  
const Ourstore = () => {

const[grid,setGrid]=useState(1);

alert(grid);

     
  return (


<>


<Meta  title={"our store "}/>

<BreadCrumb      title='Our store'/>



<div  className='store-wrapper   home-wrapper-2  py-5'>
<div className='container-xxl'>
<div className='row'>
<div  className='col-3'>

<div  className='filter-card  mb-3'>
<h3    className='filter-title'>

shop  by  categories

</h3>

<div>
<ul  className='ps-0'>
<li  >
watch</li>

<li>Tv</li>
<li>Camera</li>
<li>Laptop</li>

</ul>
</div>




</div>


<div  className='filter-card  mb-3'>

<h3    className='filter-title'>


filter By


</h3>

<div>
<h5 className='sub-title'>
Availability

</h5>
<div  className='form-check'>
<input    className='form-check-input'   type='checkbox'  valuye=""  id=" "     />

<label className='form-check-label'   for="">
in stock {1}

</label>

</div>
<div  className='from-check'>
<input    className='form-check-input'   type='checkbox'  valuye=""  id=" "     />

<label className='form-check-label'   for="">
out of stock {0}

</label>



</div>






<h5 className='sub-title'>
price
</h5>

<div>

<div  className="d-flex align-items-center  gap-10">

<div  className='form-floating '>

<input type='email'  className='form-control' id='floatinginput' placeholder="from"/>

<lable for="floatingInput">FROM</lable>


</div>



<div  className='form-floating '>

<input type="email"  className="form-control" id="floatinginput" placeholder="to"/>

<lable for="floatingInput">to</lable>


</div>






</div>



<h5 className='sub-title'>
colors
</h5>

<div  className='d-flex flex-wrap '>

<Color/>


</div>



<h5 className='sub-title'>
size
</h5>

<div>


<div  className='form-check'>
<input    className='form-check-input'   type='checkbox'  valuye=""  id=" "     />

<label className='form-check-label'  htmlfor="color-1">

s{2}
</label>

</div>


<div  className='form-check'>
<input    className='form-check-input'   type='checkbox'  valuye=""  id=" "     />

<label className='form-check-label'  htmlfor="color-2">

m{2}
</label>

</div>





</div>


</div>




</div>

</div>



<div   className='filter-card  mb-3'>

<h3    className='filter-title'>

products Tags


</h3>



<div>
<div className='products-tags  d-flex  flex-wrap align-items-center gap-10'>
<span className="badge bg-light text-secondary  rounded-3  py-2 px-3">
Headphone

</span>


<span className="badge bg-light text-secondary  rounded-3  py-2 px-3">
Laptop

</span>

<span className="badge bg-light text-secondary  rounded-3  py-2 px-3">
Headphone

</span>

<span className="badge bg-light text-secondary  rounded-3  py-2 px-3">
Mobile

</span>

<span className="badge bg-light text-secondary  rounded-3  py-2 px-3">
wire

</span>




</div>

</div>


</div>
<div   className='filter-card  mb-3'>

<h3    className='filter-title'>
Random product
</h3>


<div>

<div  className='random-products mb-3 d-flex '>

<div className='w-50'>
<img  src="images/headphone.jpg"  className='img-fluid'  alt="watch"/>

</div>


<div className='w-50'>

<h5>      man headphone bulk 10 pack multi colored  for students </h5>

<ReactStars
count={5}

size={24}
value={4}
edit={false}
activeColor="#ffd700"

/>

<b>$ 300</b>

</div>




</div>

<div  className='random-products  d-flex '>

<div className='w-50'>
<img  src="images/headphone.jpg"  className='img-fluid'  alt="watch"/>

</div>


<div className='w-50'>

<h5>      man headphone bulk 10 pack multi colored  for students </h5>

<ReactStars
count={5}

size={24}
activeColor="#ffd700"
edit={false}
/>

<b>$ 300</b>

</div>




</div>

</div>

</div>
</div>

<div className='col-9'> 

<div className='filter-sort-grid  mb-4'>

<div className='d-flex justify-content-between  align-items-center'>

<div className='d-flex align-items-center  gap-10 '>

<p className='mb-0   d-block' style={{"width":"100px"}}> Sort By</p>


<select  name="" className="form-control  form-select"   id="">


<option   value="manual">Featured</option>


<option   value="best-selling"   selected="selected">Best selling </option>

<option value="title-ascending">

Alphabetically ,A-z
</option>



<option value="title-descending">

Alphabetically ,Z-A
</option>


<option value="peice-ascending">
price low to high
</option>



<option value="price-descending">
price  high to low
</option>


<option value="created-ascending">

Dated,old to new
</option>

<option value="created-descending">

Dated,new to old
</option>




</select>

</div>

<div   className='d-flex align-items-center gap-10'>

<p className='totalproducts  mb-0'>21 products</p>

<div   className='d-flex gap-10 align-items-center'>

<GiHamburgerMenu   onClick={()=>{setGrid(3)}}  className='fs-2'/>
<GiHamburgerMenu     onClick={()=>{setGrid(4)}}    className='fs-2'/>
<GiHamburgerMenu   onClick={()=>{setGrid(6)}}     className='fs-2'/>
<GiHamburgerMenu          onClick={()=>{setGrid(12)}}     className='fs-2' />


</div>
</div>


</div>
</div>

//


<div className='product-list  pb-5  '>

<div  className='d-flex  gap-5 flex-wrap '> 
<Productcard   grid={grid}  />

</div>
</div>





</div>



</div>


</div>


</div>







</>
  )
  }
export default Ourstore;
