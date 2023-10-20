import React from 'react'

function Banner() {
  return (
    <div>
        <section className="banner" style={{backgroundImage:'url(https://via.placeholder.com/1920x470)'}}>
   <div className="container">
      <div className="row align-items-center">
         <div className="col-lg-7">
            <div className="title-area-data">
               <h2>New</h2>
               <p>Celebrating daily updates on Our News Page.</p>
            </div>
            <ol className="breadcrumb">
               <li className="breadcrumb-item">
                 <a href="index.html"><i className="fa-solid fa-house"></i> Home</a>
               </li>
               <li className="breadcrumb-item active" aria-current="page">News</li>
               <li className="breadcrumb-item active" aria-current="page">Our Blog</li>
            </ol>
         </div>
         <div className="col-lg-5">
            <div className="row">
               <div className="col-6">
                  <div className="title-area-img">
                     <img alt="title-area-img" src="https://via.placeholder.com/230x376"/>
                     <img alt="pata" className="pata" src="../../src/assets/img/pata.png"/>
                  </div>
               </div>
               <div className="col-6">
                  <div className="title-area-img two">
                     <img alt="title-area-img" src="https://via.placeholder.com/230x376"/>
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

export default Banner