import React, { useEffect } from "react";
import Styles from "./Carosel.css";

const Carosel = () => {
   useEffect(() => {
      const items = document.querySelectorAll(".slider-item");
      const itemCount = items.length;
      const nextItem = document.querySelector(".next");
      const previousItem = document.querySelector(".previous");
      // const navItem = document.querySelector("a.toggle-nav");
      let count = 0;

      function showNextItem() {
         items[count].classList.remove("active");

         if (count < itemCount - 1) {
            count++;
         } else {
            count = 0;
         }

         items[count].classList.add("active");
      }

      function showPreviousItem() {
         items[count].classList.remove("active");

         if (count > 0) {
            count--;
         } else {
            count = itemCount - 1;
         }

         items[count].classList.add("active");
         // Check if working...
      }

      function toggleNavigation() {
         this.nextElementSibling.classList.toggle("active");
      }

      function keyPress(e) {
         e = e || window.event;

         if (e.keyCode == "37") {
            showPreviousItem();
         } else if (e.keyCode == "39") {
            showNextItem();
         }
      }

      nextItem.addEventListener("click", showNextItem);
      previousItem.addEventListener("click", showPreviousItem);
      document.addEventListener("keydown", keyPress);
      // navItem.addEventListener("click", toggleNavigation);
   });
   return (
      <main class="intro-section">
         <div className="he">
            <h3>A routine tailored to you</h3>
            <h4>
               We'll help you create a health plan with vitamins, supplements,
               and more that help you feel your best today and support you
               long-term.
            </h4>
         </div>
         <div class="container intr">
            <div class="grid">
               <div class="column-xs-12">
                  <ul class="slider">
                     <li class="slider-item active">
                        <div class="grid vertical">
                           <div class="column-xs-12 column-md-4 hide-mobile">
                              <div class="intro">
                                 <a href="#">
                                    <h1 class="title">
                                       <span class="underline">
                                          Explore Tokyo jhkjh jh hjkh ljhl kjh
                                          lkjhlkjh ljh l
                                       </span>
                                    </h1>
                                 </a>
                              </div>
                           </div>
                           <div class="column-xs-12 column-md-8">
                              <div class="image-holder">
                                 <img src="https://source.unsplash.com/cddaZDt6uRw" />
                              </div>
                              <div class="grid">
                                 <div class="column-xs-12 column-md-9">
                                    <div class="intro show-mobile">
                                       <a href="#">
                                          <h1 class="title">
                                             <span class="underline">
                                                Explore Tokyo
                                             </span>
                                          </h1>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </li>
                     <li class="slider-item">
                        <div class="grid vertical">
                           <div class="column-xs-12 column-md-4 hide-mobile">
                              <div class="intro">
                                 <a href="#">
                                    <h1 class="title">
                                       <span class="underline">
                                          Explore Kyoto
                                       </span>
                                    </h1>
                                 </a>
                              </div>
                           </div>
                           <div class="column-xs-12 column-md-8">
                              <div class="image-holder">
                                 <img src="https://source.unsplash.com/Pz3EHf-KJfc" />
                              </div>
                              <div class="grid">
                                 <div class="column-xs-12 column-md-9">
                                    <div class="intro show-mobile">
                                       <a href="#">
                                          <h1 class="title">
                                             <span class="underline">
                                                Explore Kyoto
                                             </span>
                                          </h1>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </li>
                     <li class="slider-item">
                        <div class="grid vertical">
                           <div class="column-xs-12 column-md-4 hide-mobile">
                              <div class="intro">
                                 <a href="#">
                                    <h1 class="title">
                                       <span class="underline">
                                          Explore Osaka
                                       </span>
                                    </h1>
                                 </a>
                              </div>
                           </div>
                           <div class="column-xs-12 column-md-8">
                              <div class="image-holder">
                                 <img src="https://source.unsplash.com/peYW3VwICpE" />
                              </div>
                              <div class="grid">
                                 <div class="column-xs-12 column-md-9">
                                    <div class="intro show-mobile">
                                       <a href="#">
                                          <h1 class="title">
                                             <span class="underline">
                                                Explore Osaka
                                             </span>
                                          </h1>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </li>
                     <li class="slider-item">
                        <div class="grid vertical">
                           <div class="column-xs-12 column-md-4 hide-mobile">
                              <div class="intro">
                                 <a href="#">
                                    <h1 class="title">
                                       <span class="underline">
                                          Explore Hokkaido
                                       </span>
                                    </h1>
                                 </a>
                              </div>
                           </div>
                           <div class="column-xs-12 column-md-8">
                              <div class="image-holder">
                                 <img src="https://source.unsplash.com/VmeOZQjTVGE" />
                              </div>
                              <div class="grid">
                                 <div class="column-xs-12 column-md-9">
                                    <div class="intro show-mobile">
                                       <a href="#">
                                          <h1 class="title">
                                             <span class="underline">
                                                Explore Hokkaido
                                             </span>
                                          </h1>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </li>
                  </ul>
                  <div class="grid">
                     <div class="column-xs-12">
                        <div class="controls">
                           <button class="previous">
                              <span class="visually-hidden">Previous</span>
                              <span
                                 class="icon arrow-left"
                                 aria-hidden="true"
                              ></span>
                           </button>
                           <button class="next">
                              <span class="visually-hidden">Next</span>
                              <span
                                 class="icon arrow-right"
                                 aria-hidden="true"
                              ></span>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </main>
   );
};

export default Carosel;
