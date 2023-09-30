import React from 'react'

function SectionNoTop() {
  return (
    <div>
        <section className="gap no-top">
   <div className="container">
      <div className="heading-two">
         <h2>Meet Our Experts</h2>
         <div className="line"></div>
      </div>
      <div className="row">
         <div className="col-xl-4 col-lg-6">
            <div className="chef">
               <img alt="cook chef" src="https://via.placeholder.com/392x505"/>
               <div className="chef-text">
                  <div>
                     <span>Dessert specialist</span>
                     <a href="chef-details.html"><h3>Thomas Walim</h3></a>
                     <ul className="social-media">
                        <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                     </ul>
                     <img alt="sine" src="../../src/assets/img/sine.png"/>
                  </div>
               </div>
            </div>
         </div>
         <div className="col-xl-4 col-lg-6">
            <div className="chef">
               <img alt="cook chef" src="https://via.placeholder.com/392x505"/>
               <div className="chef-text">
                  <div>
                     <span>Chef Master</span>
                     <a href="chef-details.html"><h3>James Jhonson</h3></a>
                     <ul className="social-media">
                        <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                     </ul>
                     <img alt="sine" src="../../src/assets/img/sine.png"/>
                  </div>
               </div>
            </div>
         </div>
         <div className="col-xl-4 col-lg-6">
            <div className="chef mb-0">
               <img alt="cook chef" src="https://via.placeholder.com/392x505"/>
               <div className="chef-text">
                  <div>
                     <span>Dessert specialist</span>
                     <a href="chef-details.html"><h3>Room Minal</h3></a>
                     <ul className="social-media">
                        <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                     </ul>
                     <img alt="sine" src="../../src/assets/img/sine.png"/>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
    </div>
  )
}

export default SectionNoTop