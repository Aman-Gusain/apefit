import React from "react";
import Styles from "./Features.css";

const Features = () => {
   return (
      <section className="servi">
         <div className="hea">
            <h3>Healthy doesn’t have to be hard. We make it easy.</h3>
         </div>
         <div class="services-grid">
            <div class="service service1">
               <i class="ti-bar-chart"></i>
               <h4>Wealth Management</h4>
               <p>
                  Get your personalized recommendation. Backed by science and
                  delivered to you.
               </p>
            </div>

            <div class="service service2">
               <i class="ti-light-bulb"></i>
               <h4>Financial Planning</h4>
               <p>
                  Get your personalized recommendation. Backed by science and
                  delivered to you.
               </p>
            </div>

            <div class="service service3">
               <i class="ti-money"></i>
               <h4>Investment Banking</h4>
               <p>
                  Get your personalized recommendation. Backed by science and
                  delivered to you.
               </p>
            </div>
         </div>
      </section>
   );
};

export default Features;
