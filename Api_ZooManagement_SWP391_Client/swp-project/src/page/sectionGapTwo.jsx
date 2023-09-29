import React from 'react'


function SectionGapTwo() {
  return (
    <div>
        <section>
   <div className="container" >
      <div style={{backgroundImage:'url(../../src/assets/img/patron.jpg)'}} className="reserve-table">
         <div className="row">
            <div className="col-xl-4">
               <div className="reserve-table-text">
                  <h3>reserve A table</h3>
                  <p>Discover our New Menu !</p>
               </div>
            </div>
            <div className="col-xl-8">
               <div className="best-food-restaurants">
               <form role="form"  id="reservation-form" method="post">
                  <div className="row">
                     <div className="col-xl-6">
                         <input type="text" name="complete_name" placeholder="Complete Name"/>
                     </div>
                     <div className="col-xl-6">
                          <input type="email" name="email_address" placeholder="Email Address" required/>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-xl-6">
                         <input type="number" name="No of Guest" placeholder="No of Guest"/>
                     </div>
                     <div className="col-xl-6">
                        <div className="row">
                           <div className="col-xl-6">
                              <input type="date" name="day"/>
                           </div>
                           <div className="col-xl-6">
                              <input type="time" name="time"/>
                           </div>
                        </div>
                     </div>     
                  </div>
                  <button className="button" type="submit">Reserve a Table</button>
               </form>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
    </div>
  )
}

export default SectionGapTwo