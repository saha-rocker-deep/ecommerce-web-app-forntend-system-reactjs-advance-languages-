import React from 'react'
import Meta from "../components/Meta";
import BreadCrumb from '../components/BreadCrumb';
import {Link} from "react-router-dom";
import { TiArrowLeftThick } from "react-icons/ti";

function SingleBlog() {
  return (
<>
<Meta   title={"Dynamic blog  name"} />

<BreadCrumb title="Dynamic blog namse"/>










<div className='blog-wrapper  home-wrapper-2 py-5'>

<div className='container-xxl'>

<div className='row'>

<div className='col-12'>

<div   className='single-blog-card'>
<Link  to="/blog" className='d-flex align-items-center gap-10'><TiArrowLeftThick  className='fs-3'/> Go  back to blog </Link>

<h3 className='title'>

A Beautiful sunday Morning Renaisance
</h3>

<img   src='images/blogphoto.jpg'  className='img-fluid w-100 my-4' alt="blog"/>


<p>ary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>


</div>
</div>

</div>


</div>


</div>



</>
  )
}

export default SingleBlog;