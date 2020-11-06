import React from "react";
import Styles from "./Info.css";

const Info = () => {
   return (
      <div className="Feat">
         <section id="features">
            <div class="features-inner">
               <div class="features-group">
                  <div class="features-image">
                     <img src="https://images.unsplash.com/photo-1599488303987-24a54f815908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                  </div>
                  <div class="features-text">
                     <h1>Honest Guidance</h1>
                     <p>
                        We promise to be honest with you. That means we’ll show
                        you the research and be transparent about how
                        established it is. We don't pretend all supplements have
                        equal levels of scientific evidence or traditional
                        history — because that isn't the truth. But we will
                        always show our work and tailor our guidance to you as
                        an individual.
                     </p>
                  </div>
               </div>

               <div class="features-group">
                  <div class="features-image inverted">
                     <img src="https://images.unsplash.com/photo-1604171827102-39f105156fec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />
                  </div>
                  <div class="features-text inverted">
                     <h1>Better Ingredients</h1>
                     <p>
                        Our research and development team has traveled the globe
                        so we can provide the most effective, bioavailable, and
                        sustainable ingredients possible. We’re transparent
                        about our supply chain, because we build products we
                        want to take. And then we deliver them straight to your
                        door.
                     </p>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Info;
