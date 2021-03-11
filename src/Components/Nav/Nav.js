import React from 'react'
import illumelogo from '../../img/illumenotext.png'
import { withRouter, Link } from 'react-router-dom';

import {scrollHelper} from '../../utils';


const Nav = ({history, match}) => {

    console.log(history.location.pathname);


    const handleScroll = (scrolllocation) => {

        switch (scrolllocation) {

            case 'about':

                const aboutSection = document.getElementById('about')

                aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start'})
                break

            case 'benefits':

                const benefitsSection = document.getElementById('benefits')
                
                benefitsSection.scrollIntoView({ behavior: 'smooth', block: 'end'})
                break
            
            case 'pricing':

                const pricingSection = document.getElementById('section-prices')

                pricingSection.scrollIntoView({ behavior: 'smooth', block: 'end'})
                break

            case 'top':

                const topSection = document.getElementById('top')

                topSection.scrollIntoView({behavior: 'smooth', block: 'end'})

            default:
            
                console.log('error!')

        }
        
    }

    
    return(


        <div className= 'nav disable-select'>

            <div  className='collapse header__logo-box'>

                <a onClick={
                history.location.pathname === '/demo' ?
                (()=> history.push('/')) :
                (()=> handleScroll('top'))
            } className=''>
                    <img src={illumelogo} className="header__logo" alt="Illume Logo"/>
                </a>

            </div>


            <div className="header__links">

                <div onClick={
                    history.location.pathname === '/demo'? 
                    (() => history.push('/', {scrollTo: 'about'})):
                    (() => handleScroll('about'))
                    } className="about">

                    About

                </div>

                <div onClick={
                    history.location.pathname === '/demo'? 
                    (() => history.push('/', {scrollTo: 'benefits'})):
                    (() => handleScroll('benefits'))
                    } className="benefits">

                    Benefits
                </div>


                <div onClick={
                    history.location.pathname === '/demo'? 
                    (() => history.push('/', {scrollTo: 'pricing'})):
                    (() => handleScroll('pricing'))
                    } className="pricing">
                    Pricing
                </div>

            </div>

            
            <div className="collapse header__text">
                illume
            </div>


            <div onClick={
                
                (history.location.pathname === '/demo'?
                ()=> history.push('/#section-prices'):
                ()=> history.push('/demo'))
                
                
                } className="header__demo">

                {
                    (history.location.pathname === '/demo'?
                    <span>Home</span> :
                    <span>Start Demo</span>)
                }

            </div>

        </div>

    )
}

export default withRouter(Nav)