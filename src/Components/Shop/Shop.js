import React from "react";
import Styles from "./Shop.css";
import Product from "./Product/Product";

const Shop = () => {
   return (
      <div className="shopi">
         <div className="col-md-4">
            <Product />
         </div>
         <div className="col-md-4">
            <Product />
         </div>
         <div className="col-md-4">
            <Product />
         </div>
         <div className="col-md-4">
            <Product />
         </div>
         <div className="col-md-4">
            <Product />
         </div>
         <div className="col-md-4">
            <Product />
         </div>
      </div>
   );
};
export default Shop;
