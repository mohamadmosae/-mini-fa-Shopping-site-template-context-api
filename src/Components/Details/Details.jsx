import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Mycontext } from '../App/App';
import formatcurrency from '../../util';

function Details() {
  const [index,setindex]=useState(0)
  const {id}=useParams()
const {addcart,data}=useContext(Mycontext)
const ditails=data?.filter((elem)=>{
  return elem.id == parseInt(id)
})
// const handelmosemove=(e)=>{
//   const {left,top,width,height}=e.target.getBoundingClientRect()
//   const x=(e.pageX - left) / width*100
//   const y=(e.pageY - top) / height*100
//   imgDiv.current.style.backgroundPosition=`${x}% ${y}%`
// } این برای عکسی است که در بکگراند باشد
return(
  <>
<div className='container mt-3'>
{    ditails?.map((elem)=>{
return<div key={elem.id} style={{minHeight:"500px"}}  className="ditails  bg-white border shadow  p-2  d-flex justify-content-between align-items-center ">
  <div className='right-ditails col-3'>
    <img 
    // onMouseMove={handelmosemove} this is for bg img
     className='img-fluid  w-100' style={{maxHeight:"500px" }} src={elem.images[index]} alt="" />
  </div>
  <div className='left-ditails col-8'>
<div className="ditail-text">
  <h3>{elem.title}</h3>
  <h5>{formatcurrency(elem.price)}</h5>
</div>
<div className="colors d-flex">

{
  elem.colors?.map((elem,index)=>{
    return <button key={index} className="color rounded-0 btn p-3 mt-3 me-2" style={{backgroundColor:elem}}></button>
  })
}

</div>
<div className="my-3 discription">
  <p>{elem.description}</p>
  <p>{elem.content}</p>
</div>
<div className="d-flex col-2 justify-content-between   ">
{
  elem.images?.map((elem,index)=>{
    return <button className='btn'>
      <img key={index} className='w-100 img-fluid col-3' onClick={()=>setindex(index)} src={elem}/>
    </button>
    
  })
}

</div>
<button onClick={()=>addcart(elem.id)} className='btn btn-success mt-3'>
  افزودن به سبد خرید
</button>
  </div>
</div>
    })}
</div>

  
  
  </>
) 
}


export default Details
