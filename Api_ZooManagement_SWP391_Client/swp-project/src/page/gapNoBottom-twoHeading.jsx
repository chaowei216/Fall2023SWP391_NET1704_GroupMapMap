import React from 'react'
import { Link } from 'react-router-dom';

function GapNoBottomTwoHeading() {
  return (
    <div>
        <section className="gap">
   <div className="container">
      <div className="heading-two">
         <h2>Recent News</h2>
         <div className="line"></div>
      </div>
      <div className="row">
         <div className="col-xl-6">
            <div className="recent-news">
               <img alt="recent-news" src="../../src/assets/img/2anhfooter.jpeg"/>
               <div>
               <Link to="/new"><span>29 December, 2023</span></Link>
                  <Link to="/new" style={{textDecoration:"none"}}><h3>Table restaurant located in on Bank Street</h3></Link>
                  <div className="d-flex align-items-center"><img alt="img" className="me-3" src="https://via.placeholder.com/55x55"/><h6>by Thomas Walimes</h6></div>
               </div>
            </div>
         </div>
         <div className="col-xl-6">
            <div className="recent-news">
               <img alt="recent-news" src="../../src/assets/img/2anhsothu2.jpeg"/>
               <div>
               <Link to="/new"><span>29 December, 2023</span></Link>
                  
                  <Link to="/new" style={{textDecoration:"none"}}><h3>Craig Davies appointed executive head chef of Burgh</h3></Link>
                  <div className="d-flex align-items-center"><img alt="img" className="me-3" src="https://via.placeholder.com/55x55"/><h6>by Thomas Walimes</h6></div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
    </div>
  )
}

export default GapNoBottomTwoHeading
