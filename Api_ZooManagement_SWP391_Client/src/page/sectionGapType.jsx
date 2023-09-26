import React from 'react'

function SectionGapType() {
  return (
    <div>
        <section className="gap">
   <div className="container">
      <div className="row">
         <div className="col-lg-6">
            <div className="bbq" style={{backgroundImage: 'url(https://via.placeholder.com/630x366)'}}>
               <h2>Steaks & BBQ</h2>
               <p>canonical classNameics to obscure<br/> tiki drinks</p>
               <div className="bbr-price">
                  <div>
                     <h3>$120</h3>
                     <span>per person</span>
                  </div>
               </div>
            </div>
         </div>
         <div className="col-lg-6">
            <div className="bbq mb-0" style={{backgroundImage: 'url(https://via.placeholder.com/630x366)'}}>
               <h2>Cocktails</h2>
               <p>canonical classNameics to obscure <br/> tiki drinks</p>
               <div className="bbr-price">
                  <div>
                     <h3>$120</h3>
                     <span>per person</span>
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

export default SectionGapType