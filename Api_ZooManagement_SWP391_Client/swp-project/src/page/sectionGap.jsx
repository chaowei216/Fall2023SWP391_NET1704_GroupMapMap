import React from 'react'

function SectionGap() {
  return (
    <div>
        <section className="gap">
   <div className="container">
      <div className="row">
         <div className="col-xl-6">
            <div className="heading">
               <span>Newest information about zoo</span>
               <h2>New animal is comming to MapMap Zoo</h2>
            </div>
         </div>
         <div className="col-xl-6">
            <div className="about-text">
               <p>MapMap Zoo just welcomed a new animal. This is one that come from Pacific Ocean region. </p>
               <div className="mt-4 d-flex align-items-center">
                  <img alt="girl" src="https://via.placeholder.com/80x80"/>
                  <div>
                     <h4>Le Viet Hung</h4>
                     <p>Staff of MapMap Zoo</p>
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
                  <span>Snow Leopard</span>
               </div>
               <div className="coctail-bar">
                  <h5>Snow Leopard</h5>
                  <p>The snow leopard, commonly known as the ounce, is a species of large cat in the genus Panthera of the family Felidae. The species is native to the mountain ranges of Central and South Asia.</p>
                  <a href="contact.html">Explore</a>
               </div>
            </div>
         </div>
         <div className="col-xl-4 col-lg-6">
            <div className="restaurant-card coctail">
               <img alt="Restaurant-img" className="w-100" src="../../src/assets/img/tuanloc.jpg"/>
               <div className="restaurant-span">
                  <span>Deer</span>
               </div>
               <div className="coctail-bar">
                  <h5>Deer</h5>
                  <p>A quite large animal with four legs that eats grass and leaves. The male has antlers (= wide horns like branches) .</p>
                  <a href="contact.html">Explore</a>
               </div>
            </div>
         </div>
         <div className="col-xl-4 col-lg-6">
            <div className="restaurant-card">
               <img alt="Restaurant-img" className="w-100" src="../../src/assets/img/tegiac.jpg"/>
               <div className="restaurant-span">
                  <span>Rhinoceros</span>
               </div>
               <div className="coctail-bar">
                  <h5>Rhinoceros</h5>
                  <p>A rhinoceros, commonly abbreviated to rhino, is a member of any of the five extant species of odd-toed ungulates in the family Rhinocerotidae</p>
                  <a href="contact.html">Explore</a>
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