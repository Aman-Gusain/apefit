import React, { useEffect } from "react";
import Styles from "./Navbar.css";
import $ from "jquery";
import { NavLink, Link } from "react-router-dom";
import { Route } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Landingpage from "../Components/Landingpage/Landingpage";
import Shop from "../Components/Shop/Shop";

const Navbar = () => {
   useEffect(() => {
      // TOGGLE HAMBURGER & COLLAPSE NAV
      $(".nav-toggle").on("click", function () {
         $(this).toggleClass("open");
         $(".menu-left").toggleClass("collapse");
      });
      // REMOVE X & COLLAPSE NAV ON ON CLICK
      $(".menu-left a").on("click", function () {
         $(".nav-toggle").removeClass("open");
         $(".menu-left").removeClass("collapse");
      });
      $(".logo").on("click", function () {
         $(".nav-toggle").removeClass("open");
         $(".menu-left").removeClass("collapse");
      });
      // SHOW/HIDE NAV

      // Hide Header on on scroll down
      var didScroll;
      var lastScrollTop = 0;
      var delta = 5;
      var navbarHeight = $("header").outerHeight();

      $(window).scroll(function (event) {
         didScroll = true;
      });

      setInterval(function () {
         if (didScroll) {
            hasScrolled();
            didScroll = false;
         }
      }, 250);

      function hasScrolled() {
         var st = $(window).scrollTop();

         // Make sure they scroll more than delta
         if (Math.abs(lastScrollTop - st) <= delta) return;

         // If they scrolled down and are past the navbar, add className .nav-up.
         // This is necessary so you never see what is "behind" the navbar.
         if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $("header").removeClass("show-nav").addClass("hide-nav");
            $(".nav-toggle").removeClass("open");
            $(".menu-left").removeClass("collapse");
         } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
               $("header").removeClass("hide-nav").addClass("show-nav");
            }
         }

         lastScrollTop = st;
      }
   });

   return (
      <div>
         <header>
            <div className="container">
               <nav id="navigation">
                  {/* <Link to="/Agence" className="logo">
                     <img className="log" src={log} alt="" />
                  </Link> */}
                  {/* <h2 className="Name">Agence</h2> */}
                  <a aria-label="mobile menu" className="nav-toggle">
                     <span></span>
                     <span></span>
                     <span></span>
                  </a>
                  <ul className="menu-left">
                     <li className="shop">
                        <NavLink to="/shop">SHOP</NavLink>
                        <div class="dropdown-content">
                           <table>
                              <td>
                                 <a href="#">Link 1</a>
                                 <a href="#">Link 2</a>
                                 <a href="#">Link 3</a>
                                 <a href="#">Link 1</a>
                                 <a href="#">Link 2</a>
                                 <a href="#">Link 3</a>
                              </td>
                              <td>
                                 <a href="#">Link 1</a>
                                 <a href="#">Link 2</a>
                                 <a href="#">Link 3</a>
                                 <a href="#">Link 1</a>
                                 <a href="#">Link 2</a>
                                 <a href="#">Link 3</a>
                              </td>
                              <td>
                                 <a href="#">Link 1</a>
                                 <a href="#">Link 2</a>
                                 <a href="#">Link 3</a>
                                 <a href="#">Link 1</a>
                                 <a href="#">Link 2</a>
                                 <a href="#">Link 3</a>
                              </td>
                              <td>
                                 <img
                                    src="https://images.unsplash.com/photo-1601116780183-d2e80a0bd47f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                                    alt=""
                                 />
                                 <img
                                    src="https://images.unsplash.com/photo-1604335788369-94f349ae5243?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                    alt=""
                                 />
                              </td>
                           </table>
                        </div>
                     </li>
                     <li>
                        <NavLink to="/work">LEARN</NavLink>
                     </li>
                     <li>
                        <NavLink to="/contact">IMMUNITY</NavLink>
                     </li>
                  </ul>
               </nav>
               <ul className="menu-right">
                  {/* <FontAwesomeIcon className="ico" icon={faUser} size="2x" /> */}
                  {/* <NavLink to="/contact">SIGN IN</NavLink> */}
                  <FontAwesomeIcon
                     className="ico"
                     icon={faShoppingBag}
                     size="2x"
                  />
               </ul>
            </div>
         </header>
         <Route path="/" exact component={Landingpage} />
         <Route path="/shop" exact component={Shop} />
      </div>
   );
};

export default Navbar;
