import React from "react";
import Styles from "./Footer.css";
const Footer = () => {
   return (
      <div>
         <footer class="footer-wrap">
            <div class="container f-menu-list">
               <div class="row">
                  <div class="f-menu">
                     <h3>About us</h3>
                     <ul class="nav nav-pills nav-stacked">
                        <li class="active">
                           <a href="#">Home</a>
                        </li>
                        <li>
                           <a href="#">Catalog</a>
                        </li>
                        <li>
                           <a href="#">Elements</a>
                        </li>
                        <li>
                           <a href="#">Blog</a>
                        </li>
                        <li>
                           <a href="#">Contacts</a>
                        </li>
                     </ul>
                  </div>
                  <div class="f-menu">
                     <h3>Shop</h3>
                     <ul class="nav nav-pills nav-stacked">
                        <li>
                           <a href="#">Women</a>
                        </li>
                        <li>
                           <a href="#">Men</a>
                        </li>
                        <li>
                           <a href="#">Kids</a>
                        </li>
                        <li>
                           <a href="#">Shoes</a>
                        </li>
                        <li>
                           <a href="#">Accessories</a>
                        </li>
                     </ul>
                  </div>
                  <div class="f-menu">
                     <h3>Information</h3>
                     <ul class="nav nav-pills nav-stacked">
                        <li>
                           <a href="#">Blog</a>
                        </li>
                        <li>
                           <a href="#">News</a>
                        </li>
                        <li>
                           <a href="#">Reviews</a>
                        </li>
                        <li>
                           <a href="#">Articles</a>
                        </li>
                        <li>
                           <a href="#">Contacts</a>
                        </li>
                     </ul>
                  </div>
                  <div class="f-menu">
                     <h3>Pages</h3>
                     <ul class="nav nav-pills nav-stacked">
                        <li>
                           <a href="#">About us</a>
                        </li>
                        <li>
                           <a href="#">Delivery</a>
                        </li>
                        <li>
                           <a href="#">Guarantees</a>
                        </li>
                        <li>
                           <a href="#">Contacts</a>
                        </li>
                        <li>
                           <a href="#">Page 404</a>
                        </li>
                     </ul>
                  </div>
                  <div class="f-subscribe">
                     <h3>Subscribe to news</h3>
                     <form class="f-subscribe-form" action="#">
                        <input placeholder="Your e-mail" type="text" />
                        <button type="submit">
                           <i class="fa fa-paper-plane"></i>
                        </button>
                     </form>
                     <p>
                        Enter your email address if you want to receive our
                        newsletter. Subscribe now!
                     </p>
                  </div>
               </div>
            </div>

            <div class="footer-bottom">
               <div class="container">
                  <div class="row">
                     <ul class="social-icons nav navbar-nav">
                        <li>
                           <a
                              href="http://facebook.com/"
                              rel="nofollow"
                              target="_blank"
                           >
                              <i class="fa fa-facebook"></i>
                           </a>
                        </li>
                        <li>
                           <a
                              href="http://google.com/"
                              rel="nofollow"
                              target="_blank"
                           >
                              <i class="fa fa-google-plus"></i>
                           </a>
                        </li>
                        <li>
                           <a
                              href="http://twitter.com/"
                              rel="nofollow"
                              target="_blank"
                           >
                              <i class="fa fa-twitter"></i>
                           </a>
                        </li>
                        <li>
                           <a
                              href="http://vk.com/"
                              rel="nofollow"
                              target="_blank"
                           >
                              <i class="fa fa-vk"></i>
                           </a>
                        </li>
                        <li>
                           <a
                              href="http://instagram.com/"
                              rel="nofollow"
                              target="_blank"
                           >
                              <i class="fa fa-instagram"></i>
                           </a>
                        </li>
                     </ul>
                     <div class="footer-copyright">
                        <a href="#">Scanfcode</a> © Copyright 2017
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </div>
   );
};
export default Footer;
