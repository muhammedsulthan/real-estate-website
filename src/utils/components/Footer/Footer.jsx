import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
  <section className='f-wrapper'>
    <div className="f-container paddings innerWidth flexCenter">

        {/*left side */}
         <div className="f-left flexColStart" >
         <h1 className='primaryText'>&ULTHAN'S </h1>
           {/* <img src="./logo2.png" alt="" width={120}/> */}

           <span className="secondaryText">
           Our vision is to make all people <br />the best place to live for them.
           </span>
         </div>
        {/*RIGHT SIDE */}
        <div className="f-right flexColStart">
          <span className='orangeText'>Information</span>
          <span className='secondaryText'>145 New York, FL 5467, USA</span>

          <div className="f-menu flexCenter">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
         
    </div>

  </section>
  )
}

export default Footer
