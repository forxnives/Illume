import React from 'react';


import { Notifications } from 'react-push-notification';
import addNotification from 'react-push-notification';
import emailjs from 'emailjs-com';

import {scrollHelper} from '../../utils.js';

import img_man_bench from '../../img/man_bench.jpg';
import img_happy_senior from '../../img/happy_senior.png';
import img_woman_shopping from '../../img/woman_shopping.png'

import illumelogo from '../../img/illumenotext.png'

import { TradingViewEmbed, widgetType } from "react-tradingview-embed";

import Nav from '../Nav/Nav';

import {
    Switch,
    Route,
    Link,
    withRouter,
    BrowserRouter as Router
  } from "react-router-dom";



class HomePage extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            loaded: false
        }

    };



    componentDidMount() {                                                        //component has mounted after initial state

        //Setting up timer and calling iterate every period
      
          // this.timerID = setInterval(() => this.iterate(), 6000);
          this.setState({loaded: true });

      
    };
      
    componentDidUpdate(prevProps, prevState) {
    
    
        if (this.state.loaded) {
        let tickerCopyrightDiv =  document.querySelector('.tradingview-widget-copyright');
        tickerCopyrightDiv.remove();

        let tapeCopyrightDiv =  document.querySelector('.tradingview-widget-copyright');
        tapeCopyrightDiv.remove();
        this.setState({loaded: false});




        if (this.props.location.state) {

            switch (this.props.location.state.scrollTo) {

                case 'about': 


                    scrollHelper('about')
                    break;

                case 'benefits':

                    scrollHelper('benefits');

                    break;


                case 'pricing':

                    scrollHelper('section-prices')

                    break;

            }

            this.props.location.state = undefined;

        }else {
            window.scrollTo(0,0)
        }


        }

    }


      
    render() {

        return (


            <div classname='full-container'>

                <Notifications />
                <header id='top' className="header">
                    {/* <Nav /> */}
                    <div className="header__text-box">
                        <h1 className='heading-primary'>
                            <span className="heading-primary--main">Let us <br/> light your path</span>
                            <span className="heading-primary--sub">World Class trading signals</span>
                        </h1>
                        <a href="#about" className="btn btn--white btn--animated">Find Out More</a>
                        <Link to="/demo" className="btn btn--white btn--animated">Try the demo</Link>
                    </div>

                    <TradingViewEmbed
                    widgetType={widgetType.TICKER}
                    widgetConfig={{
                        colorTheme: "dark",
                        autosize: true
                    }}
                    />

                </header>

            <main>
                <section id='about' className="disable-select section-about">
                    <div className="about-header u-margin-bottom-big">
                        <h2 className="heading-secondary">
                            SENTIMENT-DRIVEN <br/> ANALYSIS
                        </h2>
                    </div>

                    <div className="section-about-flex-container">
                        <div className="section-about-col u-margin-bottom-small section-about-col-text">

                        <div className="about-card">

                            <h3 className="heading-tertiary u-margin-bottom-small">
                            Gain valuable insight into market dynamics
                            </h3>
                            <p className="paragraph">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem doloremque adipisci veritatis soluta ipsum nesciunt assumenda voluptatibus voluptates pariatur eveniet itaque sint perferendis fugiat architecto possimus, magni libero consequatur facilis.
                            </p>


                        </div>

                        <div className="about-card">

                            <h3 className="heading-tertiary u-margin-bottom-small">
                            Trade against the herd
                            </h3>
                            <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus repellendus sequi consequatur dolorum nam tempore non laboriosam veritatis quod ea, alias magni facilis exercitationem vero voluptatem similique numquam repellat beatae.
                            </p>

                            <Link to='/demo' className="btn-text">Try Demo &rarr;</Link>

                        </div>


                        </div>
                        
                        <div className="section-about-col u-margin-bottom-small">
                        <div className="composition">
                            <img src={img_woman_shopping} alt="photo-1" className="composition__photo composition__photo--p1"/>
                            <img src={img_man_bench} alt="photo-2" className="composition__photo composition__photo--p2"/>
                            <img src={img_happy_senior} alt="photo-3" className="composition__photo composition__photo--p3"/>
                        </div>
                        </div>
                    </div>

                </section>

                <section id='benefits' className="disable-select section-features">
                    <div className="features-flex-container">
                        <div className="features">
                        <div className="features-card">
                            <i className="icon icon-basic-world"></i>   
                            <h3 className="heading-tertiary">
                            Explore the World
                            </h3> 
                            <p className="section-features-text">
                            Aperiam modi reprehenderit possimus hic nulla quasi sint commodi id, deleniti obcaecati aspernatur alias beatae ipsam eius quos, excepturi ipsum magni ut!
                            </p>
                        </div>
                        </div>
                        <div className="features">
                        <div className="features-card">
                            <i className="icon icon-basic-paperplane"></i> 
                            <h3 className="heading-tertiary">
                            Explore the World
                            </h3> 
                            <p className="section-features-text">
                            Aperiam modi reprehenderit possimus hic nulla quasi sint commodi id, deleniti obcaecati aspernatur alias beatae ipsam eius quos, excepturi ipsum magni ut!
                            </p>
                        </div>
                        </div>
                        <div className="features">
                        <div className="features-card">
                            <i className="icon icon-ecommerce-graph3"></i>   
                            <h3 className="heading-tertiary">
                            Explore the World
                            </h3> 
                            <p className="section-features-text">
                            Aperiam modi reprehenderit possimus hic nulla quasi sint commodi id, deleniti obcaecati aspernatur alias beatae ipsam eius quos, excepturi ipsum magni ut!
                            </p>
                        </div>
                        </div>
                        <div className="features">
                        <div className="features-card">
                            <i className="icon icon-basic-world"></i>   
                            <h3 className="heading-tertiary">
                            Explore the World
                            </h3> 
                            <p className="section-features-text">
                            Aperiam modi reprehenderit possimus hic nulla quasi sint commodi id, deleniti obcaecati aspernatur alias beatae ipsam eius quos, excepturi ipsum magni ut!
                            </p>
                        </div>
                        </div>
                    </div>
    
                </section>
                <section id="section-prices" className="section-prices disable-select">
                    <div className="u-center-text u-margin-bottom-big">
                        <h2 className="heading-secondary u-margin-top-big">
                            Competitive Pricing
                        </h2>
                    </div>
                    <div className="prices">
                        <div className="prices-col">
                        <div className="prices-card">
                            
                            <div className="prices-card__side prices-card__side-front prices-card__side-front-1">
                            
                            <div className="prices-content-front prices-content-front-1">
                                &nbsp;
                            </div>

                                <h4 className="prices-content-front-heading">
                                <span className="prices-content-front-heading-span prices-content-front-heading-span-1">
                                    Starter Membership
                                </span>
                                </h4>

                                <ul className="prices-content-front-list">
                                <li className="prices-content-front-list-item">Sentiment Data Access</li>
                                <li className="prices-content-front-list-item">Email Trading Signals</li>
                                <li className="prices-content-front-list-item">In-Depth Trade Analysis</li>
                                <li className="prices-content-front-list-item">Trade Notifications</li>

                                </ul>
                            
                            </div>

                            <div className="prices-card__side prices-card__side-back  prices-card__side-back-1">
                    
                            <div className="price-div">

                                <span>Only</span>

                                <h1 className="price-div-heading">
                                $9.99
                                </h1>

                                <span>a Month</span>

                                <div className="price-div-btn">
                                Buy Now
                                </div>

                            </div>

                            </div>

                        </div>

                        </div>
                        <div className="prices-col">
                        <div className="prices-card">

                            <div className="prices-card__side prices-card__side-front prices-card__side-front-2">

                            <div className="prices-content-front prices-content-front-2">
                                &nbsp;
                            </div>

                                <h4 className="prices-content-front-heading">
                                <span className="prices-content-front-heading-span prices-content-front-heading-span-2">
                                    pro Membership
                                </span>
                                </h4>

                                <ul className="prices-content-front-list">
                                <li className="prices-content-front-list-item">Sentiment Data Access</li>
                                <li className="prices-content-front-list-item">Email Trading Signals</li>
                                <li className="prices-content-front-list-item">In-Depth Trade Analysis</li>
                                <li className="prices-content-front-list-item">Trade Notifications</li>

                                </ul>

                            </div>
                            <div className="prices-card__side prices-card__side-back  prices-card__side-back-2">
                            <div className="price-div">

                            <span>Only</span>


                            <h1 className="price-div-heading">
                                14.99
                            </h1>

                            <span>a Month</span>

                            <div className="price-div-btn">
                                Buy Now
                            </div>

                            </div>
                            </div>

                        </div>

                        </div>
                        <div className="prices-col">
                        <div className="prices-card">

                            <div className="prices-card__side prices-card__side-front prices-card__side-front-3">

                            <div className="prices-content-front prices-content-front-3">
                                &nbsp;

                            </div>

                                <h4 className="prices-content-front-heading">
                                <span className="prices-content-front-heading-span prices-content-front-heading-span-3">
                                    Elite Membership
                                </span>
                                </h4>

                                <ul className="prices-content-front-list">
                                <li className="prices-content-front-list-item">Sentiment Data Access</li>
                                <li className="prices-content-front-list-item">Email Trading Signals</li>
                                <li className="prices-content-front-list-item">In-Depth Trade Analysis</li>
                                <li className="prices-content-front-list-item">Trade Notifications</li>

                                </ul>
                            </div>
                            <div className="prices-card__side prices-card__side-back  prices-card__side-back-3">

                            <div className="price-div">

                            <span>Only</span>

                            <h1 className="price-div-heading">
                                $24.99
                            </h1>

                            <span>a Month</span>

                            <div className="price-div-btn">
                                Buy Now
                            </div>

                            </div>

                            </div>

                        </div>
                        
                        </div>
                    </div>

                    <div onClick={() => this.props.history.push('./demo')} className="btn trydemobtn">
                        TRY DEMO
                    </div>

                </section>

            </main>


            <TradingViewEmbed
                widgetType={widgetType.TICKER_TAPE}
                widgetConfig={{
                    colorTheme: "dark",
                    autosize: true
                }}
                />

            <footer class="footer">

                <div className="footer-top">

                    <div className="footer-top-logo">
                    <img src={illumelogo} alt=""/>
                    </div>

                    <div className="footer-top-social">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 19" class="footer__social-link-icon">
                        <path d="M7.73932217 19C17.0261544 19 22.104657 11.6908474 22.104657 5.35293191c0-.20769473-.0044296-.41445432-.0144701-.62009174.9857367-.67694829 1.8427192-1.52166081 2.5187767-2.48345293-.904724.3817244-1.8782546.63907509-2.8995266.75503253 1.0424357-.59362726 1.8427192-1.53325655 2.2201223-2.65318096-.9756962.54939512-2.0558328.9489807-3.2058589 1.16415656C19.8024392.58315369 18.4902893 0 17.0383605 0c-2.7884909 0-5.0496609 2.14811151-5.0496609 4.79614919 0 .37648761.0443945.74240813.1309197 1.09364695C7.92359409 5.68939551 4.2027188 3.78067999 1.71278386.87847109c-.43400368.70864956-.68373544 1.53232142-.68373544 2.410699 0 1.66417624.89133666 3.13318863 2.24669994 3.99258286-.82804241-.02422015-1.60617784-.24042466-2.2866649-.60007974-.00118123.02001201-.00118123.04011754-.00118123.0611582 0 2.32326334 1.74064121 4.26255799 4.05063541 4.70235459-.42396323.1095985-.87027139.1686994-1.33095119.1686994-.32523206 0-.6416049-.0305791-.94911851-.0865005.64278613 1.9056295 2.5065706 3.2923495 4.7166524 3.3314384-1.72833673 1.2864729-3.90514721 2.0531012-6.27065923 2.0531012-.407426 0-.80924116-.0220693-1.20446111-.066395C2.23459233 18.2058786 4.88763547 19 7.73932217 19" fill="currentColor"></path>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 20" class="footer__social-link-icon">
                        <path d="M6.70294649 19.0324132v-8.654762h3.00434904l.44977127-3.38759623H6.70294649V4.83241844c0-.97844706.27977369-1.64521342 1.72457345-1.64521342l1.83110886-.00080865V.16549104C9.94001269.12438092 8.84691042.03241315 7.57512387.03241315c-2.65512703 0-4.47286835 1.57403019-4.47286835 4.46467698v2.49296484H.10918114v3.38759623h2.99307438v8.654762h3.60069097" fill="currentColor"></path>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 19" class="footer__social-link-icon">
                        <path d="M9.99686508.00599405c-2.715 0-3.05543651.01093254-4.12170635.0571508C4.81111111.10925 4.08440476.26980753 3.44853175.50459324c-.65738096.24266469-1.21488096.56739881-1.77067461 1.09536508C1.12210317 2.1279623.78027778 2.6575873.52484127 3.28209921.27769841 3.88617857.10869047 4.5765496.06015873 5.58739484.01150793 6.60035119 0 6.92376587 0 9.50301587c0 2.57921233.01150794 2.90262703.06015873 3.91558333.04853175 1.0108452.21753968 1.7012163.46468254 2.3052956.2554365.6245119.5972619 1.1541369 1.15301587 1.6821409.55579365.5279663 1.11329365.8527004 1.77067461 1.0954028.63587301.234748 1.36257936.3953055 2.42662698.4414107C6.94142857 18.9890675 7.28186508 19 9.99686508 19c2.71496032 0 3.05539682-.0109325 4.12166662-.0571508 1.0640477-.0461052 1.790754-.2066627 2.426627-.4414107.657381-.2427024 1.214881-.5674365 1.7706746-1.0954028.555754-.528004.8975794-1.057629 1.1530556-1.6821409.2471032-.6040793.4161111-1.2944504.4646428-2.3052956.0486508-1.0129563.0601588-1.336371.0601588-3.91558333 0-2.57925-.011508-2.90266468-.0601588-3.91562103-.0485317-1.01084524-.2175396-1.70121627-.4646428-2.30529563-.2554762-.62451191-.5973016-1.15413691-1.1530556-1.68214088-.5557936-.52796627-1.1132936-.8527004-1.7706746-1.09536508-.635873-.23478571-1.3625793-.39534325-2.426627-.4414484-1.0662698-.04621826-1.4067063-.0571508-4.12166662-.0571508zm0 1.71116865c2.66924602 0 2.98543652.00968849 4.03956352.05537897.9746825.04222222 1.5040079.1969365 1.8562698.32699603.466627.17228174.7996429.37807738 1.1494445.71042659.3498412.3323115.5664682.64867658.7478174 1.09197222.1369048.33464881.2997619.83750793.3442064 1.76345635.0480952 1.00142063.0582936 1.30180158.0582936 3.83762301 0 2.53578373-.0101984 2.83616473-.0582936 3.83758533-.0444445.9259484-.2073016 1.4288075-.3442064 1.7634563-.1813492.4432957-.3979762.7596608-.7478174 1.0919723-.3498016.3323492-.6828175.5381448-1.1494445.7104265-.3522619.1300596-.8815873.2847739-1.8562698.3269961-1.0539683.0456905-1.3701191.0553789-4.03956352.0553789-2.66948413 0-2.98559524-.0096884-4.03960318-.0553789-.97468253-.0422222-1.50400793-.1969365-1.85626984-.3269961-.46662698-.1722817-.79964285-.3780773-1.14944444-.7104265-.34980159-.3323115-.56646825-.6486766-.74781746-1.0919723-.13690476-.3346488-.29976191-.8375079-.34420635-1.7634563-.04809524-1.0014206-.05829365-1.3018016-.05829365-3.83758533 0-2.53582143.01019841-2.83620238.05829365-3.83762301.04444444-.92594842.20730159-1.42880754.34420635-1.76345635.18134921-.44329564.39797619-.75966072.74781746-1.09197222.34980159-.33234921.68281746-.53814485 1.14944444-.71042659.35226191-.13005953.88158731-.28477381 1.85626984-.32699603 1.05412699-.04569048 1.37031747-.05537897 4.03960318-.05537897z" fill="currentColor"></path>
                        <path d="M9.99686508 12.6686647c-1.84039683 0-3.33230159-1.4173095-3.33230159-3.16564883 0-1.74837698 1.49190476-3.1656865 3.33230159-3.1656865 1.84035712 0 3.33226192 1.41730952 3.33226192 3.1656865 0 1.74833933-1.4919048 3.16564883-3.33226192 3.16564883zm0-8.04250399c-2.83519841 0-5.13353175 2.18341667-5.13353175 4.87685516 0 2.69340083 2.29833334 4.87681743 5.13353175 4.87681743 2.83515872 0 5.13349202-2.1834166 5.13349202-4.87681743 0-2.69343849-2.2983333-4.87685516-5.13349202-4.87685516zM16.5328175 4.43348413c0 .6294127-.5371032 1.13962301-1.1996429 1.13962301-.6625 0-1.1996032-.51021031-1.1996032-1.13962301s.5371032-1.13966072 1.1996032-1.13966072c.6625397 0 1.1996429.51024802 1.1996429 1.13966072" fill="currentColor"></path>
                    </svg>


                    </div>

                </div>

                <div className="whiteline-container">
                    <div className="whiteline"></div>
                </div>
                


                <div className="footer-list-container">

                    <div className="footer-left">
                    <h3>About Us</h3>

                    <p className="tagline">We provide actionable sentiment-based trading alerts catered for an elite clientele</p>

                    
                    <div className="contact">
                        <i className="icon icon-basic-mail"></i>   
                        <h3>Contact us</h3>
                    </div>



                    <p>
                        Phone: 1 876 9876 5432 <br/>
                        Email: email@email.com
                    </p>
                    </div>
                    
                    <div className="footer-list first-list">

                    <ul className="ul second-list-ul">
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                    </ul>


                    </div>

                    <div className="footer-list second-list">

                    <ul className="ul third-list-ul">
                    <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                    </ul>

                    </div>

                    <div className="footer-subscribe">

                    <h2>
                        Subscribe
                    </h2>

                    <input type="text" id="input1" placeholder="Try typing something in here!" />

                    </div>

                </div>

            </footer>
          </div> 



        )
    }

}


export default withRouter(HomePage)