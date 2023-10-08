import React from 'react'

function SectionGap() {
  return (
    <div>
        <section className="gap">
   <div className="container">
      <div className="row">
         <div className="col-xl-6">
            <div className="heading">
               <span>About The Food Restaurant</span>
               <h2>New Ground with Dishes to be Enjoyed</h2>
            </div>
         </div>
         <div className="col-xl-6">
            <div className="about-text">
               <p>Nisl quam nestibulum ac quam nec odio eleme aucan ligula. Orci varius nat oque pena tibus et urient monte nascete ridiculus mus nellentesq um ac qu am nec odio rbine. Nisl quam nestibu aucan ligula. </p>
               <div className="mt-4 d-flex align-items-center">
                  <img alt="girl" src="https://via.placeholder.com/80x80"/>
                  <div>
                     <h4>Willimes James</h4>
                     <p>Director and Chief Operations Officer</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="row mt-5">
         <div className="col-xl-4 col-lg-6">
            <div className="restaurant-card">
               <img alt="Restaurant-img" className="w-100" src="../../src/assets/img/baotuyet.jpg"/>
               <div className="restaurant-span">
                  <span>Restaurant</span>
               </div>
               <div className="coctail-bar">
                  <h5>Restaurant</h5>
                  <p>Nisl quam nestibulum ac quam nec aucan ligula. Orci varius natoque li um ac quam nec odio rbine.</p>
                  <a href="contact.html">Reserve a Table</a>
               </div>
            </div>
         </div>
         <div className="col-xl-4 col-lg-6">
            <div className="restaurant-card coctail">
               <img alt="Restaurant-img" className="w-100" src="../../src/assets/img/tuanloc.jpg"/>
               <div className="restaurant-span">
                  <span>Coctail Bar</span>
               </div>
               <div className="coctail-bar">
                  <h5>Coctail Bar</h5>
                  <p>Nisl quam nestibulum ac quam nec aucan ligula. Orci varius natoque li um ac quam nec odio rbine.</p>
                  <a href="contact.html">Reserve a Table</a>
               </div>
            </div>
         </div>
         <div className="col-xl-4 col-lg-6">
            <div className="restaurant-card">
               <img alt="Restaurant-img" className="w-100" src="../../src/assets/img/tegiac.jpg"/>
               <div className="restaurant-span">
                  <span>Private Dining</span>
               </div>
               <div className="coctail-bar">
                  <h5>Private Dining</h5>
                  <p>Nisl quam nestibulum ac quam nec aucan ligula. Orci varius natoque li um ac quam nec odio rbine.</p>
                  <a href="contact.html">Reserve a Table</a>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
    </div>
  )
}

export default SectionGap