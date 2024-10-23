import React, { useContext } from 'react'
import formatcurrency from '../../../util'
import { Link } from 'react-router-dom'
import { Mycontext } from '../../App/App'

function Item({item}) {
 const {addcart}=useContext(Mycontext)
  return (
    <>    
<img src={item.images[0]} style={{height:"220px",width:"220px"}} className='img-fluid ' alt="" />
   <Link className='text-decoration-none' to={`/product/${item.id}`} ><h4>{item.title}</h4></Link>
   <small className=''>{item.description}</small>
   <p className='text-danger '>{formatcurrency(item.price)}</p>
   <button onClick={()=>addcart(item.id)} className=' btn btn-success '>افزودن به سبد خرید</button>
    </>
  )
}

export default Item
