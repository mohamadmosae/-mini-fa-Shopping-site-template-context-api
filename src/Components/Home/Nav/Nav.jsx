import React, { useContext, useEffect, useState } from "react";
import { BiBasket } from "react-icons/bi";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Nav.css";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Mycontext } from "../../App/App";

function Nav() {
  const [respans, setrespans] = useState(false);
const [x,setx]=useState(0)
const {cart}=useContext(Mycontext)
useEffect(()=>{
  setx(cart.length)
},[cart])

AOS.init();
  return (
    <>
      <nav className="container ">  
          <div  className="nav-items align-items-center d-flex justify-content-between p-5 border-bottom">  
            <button onClick={()=>setrespans(!respans)} id="btn" className="btn btn-light rounded d-flex p-2 fs-5">
              {  
               respans? <FaTimes/> : <FaBars/>
              }
            </button>
            <Link to="/cart"
              className="icon position-relative text-secondary btn"
              style={{ fontSize: "20px" }}
            >
              <BiBasket />
              <span
                className="position-absolute bg-danger rounded-circle text-white "
                style={{
                  top: "0",
                  right: "0",
                  width: "20px",
                  height: "20px",
                  fontSize: "15px",
                }}
              >
             {x}
              </span>
            </Link>
            <div id="b" className="item">
              <Link to="/" className="btn ">خانه</Link>
              <Link to="/product" className="btn ">محصولات</Link>
              <Link className="btn ">درباره ما</Link>
              <Link className="btn ">تماس باما</Link>
              <Link className="btn ">ورود / ثبت نام</Link>
            </div>
            <div className="logo">
            <Link to="/" className="text-decoration-none text-black"> <h2>MeloShope</h2></Link>
             
            </div>
          </div>
      {

        respans?
        <div id="#btn"  data-aos={respans?`flip-left`:`flip-right`} data-aos-mirror="true"  className="  d-flex flex-column  align-items-left ">
        <Link to="/" className="btn p-3  ">خانه</Link>
        <Link to="/product" className="btn ">محصولات</Link>
        <Link className="btn p-3  ">درباره ما</Link>
        <Link className="btn p-3  ">تماس باما</Link>
        <Link className="btn p-3  ">ورود / ثبت نام</Link> 
      </div>
        :
""

      }
      </nav>

    </>
  );
}

export default Nav;
