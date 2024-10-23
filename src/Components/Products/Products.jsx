import React, { useContext } from "react";

import Item from "./Item/Item";
import { Mycontext } from "../App/App";

function Products() {
  const { loading, error, data } = useContext(Mycontext);
  return (
    <div>
      <div className="text-center">
        {loading ? <span className="spinner-border text-danger"></span> : ""}
        {error && <h1 className="text-center">{error}</h1>}
      </div>
      <div
        style={{ height: "450px" }}
        className="items d-flex justify-content-center  align-content-center mt-5  "
      >
        {data?.map((elem) => {
          return (
            <div
              key={elem.id}
              className="text-center p-3 mx-3 border shadow bg-white col-2"
            >
              <Item item={elem} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
