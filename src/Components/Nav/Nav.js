import React from 'react'
import illumelogo from '../../img/illumenotext.png'

const Nav = () => {
    return(





        <div className= 'nav disable-select'>

            




            <div className='header__logo-box'>

                <a className=''>
                    <img src={illumelogo} className="header__logo" alt="Illume Logo"/>
                </a>

            </div>



            <div className="header__links">



                <div className="about">
                    About
                </div>

                <div className="benefits">

                    Benefits
                </div>


                <div className="pricing">
                    Pricing
                </div>



            </div>

            
            <div className="header__text">
                illume
            </div>



            <div className="header__demo">

                <span>Start Demo</span>
                
            </div>





        </div>


    )
}

export default Nav