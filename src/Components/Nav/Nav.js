import React from 'react'
import illumelogo from '../../img/illumenotext.png'
import { withRouter, Link } from 'react-router-dom';

const Nav = ({history, match}) => {

    console.log(history.location.pathname);



    
    return(





        <div className= 'nav disable-select'>

            




            <div className='header__logo-box'>

                <a className=''>
                    <img src={illumelogo} className="header__logo" alt="Illume Logo"/>
                </a>

            </div>



            <div className="header__links">



                <div onClick={() => history.push('/', {scrollTo: 'about'}) } className="about">

                    About

                </div>

                <div onClick={() => history.push('/', {scrollTo: 'benefits'}) } className="benefits">

                    Benefits
                </div>


                <div onClick={() => history.push('/', {scrollTo: 'pricing'}) } className="pricing">
                    Pricing
                </div>



            </div>

            
            <div className="header__text">
                illume
            </div>



            <div onClick={
                
                (history.location.pathname === '/demo'?
                ()=> history.push('/#section-prices'):
                ()=> history.push('/demo'))
                
                
                } className="header__demo">

                {
                    (history.location.pathname === '/demo'?
                    <span>Buy Now</span> :
                    <span>Start Demo</span>)
                }


                
            </div>





        </div>


    )
}

export default withRouter(Nav)