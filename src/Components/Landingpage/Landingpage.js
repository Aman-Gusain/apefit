import React from "react";
import Herotext from "./Herotext/Herotext";
import Features from "./Features/Features";
import Carosel from "./Carosel/Carosel";
import Info from "./Info/Info";
import Ending from "./Ending/Ending";

const Landingpage = () => {
   return (
      <div className="pages">
         <Herotext />
         <Features />
         <Carosel />
         <Info />
         <Ending />
      </div>
   );
};
export default Landingpage;
