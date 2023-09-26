import React from 'react'
const socialMediaLinks = [
   { text: 'Facebook', url: '#' },
   { text: 'Instagram', url: '#' },
   { text: 'Youtube', url: '#' },
 ];
function Footer() {
  return (
    <div>
        <footer style={{backgroundImage: 'url(https://via.placeholder.com/1920x660)',backgroundColor: '#f5f8fd'}}>
   <div className="container">
      <div className="row">
         <div className="col-xl-4 col-lg-6">
            <div className="logo-white">
               <a href="index.html"><img alt="logo-white" src="../../src/assets/img/logo-white.png"/></a>
               <p>Tuesday - Saturday:   12:00pm - 23:00pm 
               <span>Closed on Sunday</span></p>
               <img alt="tripa" src="../../src/assets/img/tripa.png"/>
               <h6>5 star rated on TripAdvisor</h6>
            </div>
         </div>
         <div className="col-xl-2 col-lg-3 col-md-6">
            <div className="link-about">
               <h3>About</h3>
               <ul>
                  <li><i className="fa-solid fa-angle-right"></i><a href="about.html">Information</a></li>
                  <li><i className="fa-solid fa-angle-right"></i><a href="#">Special Dish</a></li>
                  <li><i className="fa-solid fa-angle-right"></i><a href="#">Reservation</a></li>
                  <li><i className="fa-solid fa-angle-right"></i><a href="contact.html">Contact</a></li>
               </ul>
            </div>
         </div>
         <div className="col-xl-2 col-lg-3 col-md-6">
            <div className="link-about">
               <h3>menu</h3>
               <ul>
                  <li><i className="fa-solid fa-angle-right"></i><a href="menu-1.html">Steaks</a></li>
                  <li><i className="fa-solid fa-angle-right"></i><a href="menu-1.html">Burgers</a></li>
                  <li><i className="fa-solid fa-angle-right"></i><a href="menu-1.html">Coctails</a></li>
                  <li><i className="fa-solid fa-angle-right"></i><a href="menu-1.html">Bar B Q</a></li>
                  <li><i className="fa-solid fa-angle-right"></i><a href="menu-1.html">Desserts</a></li>
               </ul>
            </div>
         </div>
         <div className="col-xl-4 col-lg-6">
            <div className="link-about">
               <h3>Newsletter</h3>
               <p>Get recent news and updates.</p>
               <form className="footer-form">
                  <input type="text" name="Enter Your Email Address" placeholder="Enter Your Email Address..."/>
                  <button className="button">Subscribe</button>
               </form>
            </div>
         </div>
      </div>
      <div className="footer-bootem">
         <h6><span>© 2023 Foodio</span> | Restaurant and BBQ.</h6>
         <div className="header-social-media">
            {socialMediaLinks.map((i)=>(
                <a  href="#">{i.text}</a>
            ))}
           
              
         </div>
      </div>
   </div>
</footer>
    </div>
  )
}

export default Footer