import React from "react";
import Styles from "./Herotext.css";

const Herotext = () => {
   return (
      <div className="title">
         <div className="header">
            <div id="hero-text">
               <h1 className="titletext">
                  Brand By Agence is a global creative branding studio founded
                  in India. We make brands future-ready.
               </h1>
               <button className="button" id="abc">
                  Read more
               </button>
            </div>
            <div className="scrolll"></div>
         </div>
         <img
            className="homw im"
            src="https://www.henryford.com/-/media/henry-ford-blog/images/interior-banner-images/2019/09/protein-powder.jpg"
            alt=""
         />
      </div>
   );
};

export default Herotext;
