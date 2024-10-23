import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "../Products/Products";
import Details from "../Details/Details";
import Home from "../Home/Home";
import Nav from "../Home/Nav/Nav"
import axios from "axios";
import Cart from "../Cart/Cart";
export const Mycontext=createContext()
function App() {
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState(null);
  const [error, seterror] = useState("");
  const [cart,setcart]=useState([])
  useEffect(()=>{
    
    const datacart=JSON.parse(localStorage.getItem("datacart"))
    if(datacart) setcart(datacart) 
  },[])

  useEffect(()=>{
    localStorage.setItem("datacart",JSON.stringify(cart))
  },[cart])


const removeitem=(id)=>{
if(window.confirm("آیا از حذف محصول مطمئنید؟")){
  const x=cart?.filter(item=>item.id!==id)
  setcart(x)
}else{
  null
}

}
  const inc=(item)=>{
    cart?.map((elem)=>{
      if(elem.id === item.id){
        return elem.count++
      }
    })
    setcart([...cart])
  }
  const dec=(item)=>{
    cart?.map((elem)=>{
      if(elem.id === item.id){
        return elem.count===1?elem.count=1:elem.count--
      }
    })
    setcart([...cart])
  }

  const addcart=( id)=>{
    const check=cart?.every(item=> item.id!==id)
    if(check){
      const res=data?.filter(item=>{return item.id==parseInt(id)})
setcart([...cart,...res])
    }else{
      alert("این محصول در سبد خرید موجود است!")
    }

}
  const fetchdata = async () => {
    try {
      const res = await axios("http://localhost:3000/data");
      setdata(res.data);
      setloading(false);
    } catch (error) {
      seterror(error.message);
      setloading(true);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return (
  <Mycontext.Provider value={{addcart, loading,removeitem, error, data ,cart,inc,dec}}>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/:id" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Mycontext.Provider>
  );
}

export default App;
