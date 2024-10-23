import React, { useContext, useEffect, useState } from "react";
import { Mycontext } from "../App/App";
import formatcurrency from "../../util";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, inc, dec, removeitem } = useContext(Mycontext);
  const [flag, setflag] = useState(false);
  const [total, settotal] = useState(0);
  useEffect(() => {
    if (cart.length === 0) {
      setflag(true);
    } else {
      setflag(false);
    }
  }, [cart.length]);
  const gettotal=()=>{
    let res=cart?.reduce((prev,item)=>{
      return prev+(item.price*item.count)
    },0)
    settotal(res)
  }
useEffect(()=>{
gettotal()
},[cart])
  return (
    <>
      <div className="container  mt-5">
        {flag && (
          <h2 className="text-danger w-100 text-center mx-auto">
            سبد خرید خالی است!
          </h2>
        )}

        {cart?.map((elem) => {
          return (
            <div key={elem.id} className=" d-flex justify-content-around align-items-center p-3 bg-white my-3 border shadow  "
              style={{ maxHeight: "300px", width: "100%" }}
            >
              <div className="img col-3">
                <img
                  className="img-fluid w-100"
                  style={{ maxHeight: "300px" }}
                  src={elem.images[0]}
                />
              </div>
              <div className=" col-8">
                <h5 className="">{elem.title}</h5>
                <p>{elem.description}</p>
                <h5 className="my-3">{formatcurrency(elem.price*elem.count)}</h5>
                <div className="d-flex justify-content-between col-5 align-items-center">
                  <div className="del">
                    <Link
                      onClick={() => removeitem(elem.id)}
                      className="btn btn-danger"
                    >
                      حذف از سبد خرید
                    </Link>
                  </div>
                  <div className="count d-flex ">
                    <span
                      onClick={() => inc(elem)}
                      className="btn btn-success d-flex justify-content-center align-items-center"
                    >
                      +
                    </span>
                    <span className="btn">{elem.count}</span>
                    <span
                      onClick={() => dec(elem)}
                      className="btn btn-danger d-flex justify-content-center align-items-center"
                    >
                      -
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="p-5 bg-white mt-5 d-flex justify-content-between align-items-center">
          <h4 className=" text-dark fw-bold">مجموع مبلغ سبد خرید شما:{formatcurrency(total)}</h4>
          <Link className="btn btn-info">پرداخت</Link>
        </div>
      </div>
    </>
  );
}

export default Cart;
