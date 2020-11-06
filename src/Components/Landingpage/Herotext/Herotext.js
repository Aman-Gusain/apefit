import React from "react";
import Styles from "./Herotext.css";

const Herotext = () => {
   return (
      <div className="hero">
         <div className="herotext">
            <h1>Your nutrition, personalized.</h1>
            <h2>
               Protein powder tailored specifically to your body type and
               fitness goals
            </h2>
            <button className="btn draw-border">TAKE A QUIZ</button>
         </div>
         <img
            className="phar"
            src="https://images.unsplash.com/photo-1594129159093-de0400fcc70d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
            alt=""
         />
         ;
      </div>
   );
};

export default Herotext;
