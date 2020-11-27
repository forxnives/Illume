import React from 'react'
// import './Active.css';


const Active = ({ object, date, symbol, direction, link }) => {
    return(
        <div className="active-section">

            <div className="active-section-title">
                <h2>
                    Active Signals
                </h2>
            </div>
            <section>
        {
            object.map((each, i) => 

                <article className="test">



                    <div className="active-container">
                        <header className="signal-card fn fl-ns">

                            <article className="">


                                
                                <div className="signal-header fl w-100 w-50-ns bg-near-white tl">
                                    <h1 className="f5 lh-title fw9 mb0 mt0 pt3">
                                    <a href={link[i]}> {direction[i] + ' ' + symbol[i].slice(-10,-4)} </a>
                                    </h1>
                                </div>
                                <div className="signal-header fl w-100 w-50-ns bg-light-gray tl tr-ns">
                                    <div className="f5 lh-title fw9 mb0 mt0 pt3">
                                        <time className="f6 ttu tracked gray tr">{date[i]}</time>
                                    </div>
                                </div>



                                <div class="bg-black-90 w-100">
                                    <h3 class="white sans-serif fw1 tracked">Progress</h3>
                                    <div class="bg-moon-gray br-pill h1 overflow-y-hidden mb0">
                                        {Number((object[i].progress).replace('%', '')) < 100 ? 
                                            <div class="bg-green br-pill h1 shadow-1 progress-bar" style={{width:object[i].progress}}></div> :
                                            <div class="bg-green br-pill h1 shadow-1 progress-bar" style={{width:'100%'}}></div>}

                                    </div>

                                </div>




                            </article>


                            <div className="">
                                <a href={link[i]}><img className="mw-60" src={object[i].image} /></a>
                            </div>
                            {<div className="parent-div" dangerouslySetInnerHTML={{__html: object[i].comments}} />}




                            <div className="cf">

                                <div className="targets fl w-50 w-25-ns tc bg-black-05">
                                    <article class="center mw5 mw6-ns hidden mv0">
                                        <h1 class="f6 bg-near-black white mv0 pv2 ph3">Entry</h1>
                                        <div class="pa0 bt">
                                            <p class="f6 f5-ns lh-copy measure mv0">
                                            {object[i].entry}
                                            </p>
                                        </div>
                                    </article>
                                </div>

                                <div className="targets fl w-50 w-25-ns tc bg-black-10">
                                    <article class="center mw5 mw6-ns hidden mv0">
                                        <h1 class="f6 bg-near-black white mv0 pv2 ph3">Stoploss</h1>
                                        <div class="pa0 bt">
                                            <p class="f6 f5-ns lh-copy measure mv0">
                                            {object[i].stoploss}
                                            </p>
                                        </div>
                                    </article>
                                </div>


                                <div className="targets fl w-50 w-25-ns tc bg-black-20">
                                    <article class="center mw5 mw6-ns hidden mv0">
                                        <h1 class="f6 bg-near-black white mv0 pv2 ph3">Target 1</h1>
                                        <div class="pa0 bt">
                                            <p class="f6 f5-ns lh-copy measure mv0">
                                            {object[i].target1}
                                            </p>
                                        </div>
                                    </article>
                                </div>

                                <div className="targets fl w-50 w-25-ns tc bg-black-10">
                                    <article class="center mw5 mw6-ns hidden mv0">
                                        <h1 class="f6 bg-near-black white mv0 pv2 ph3">Target 2</h1>
                                        <div class="pa0 bt">
                                            <p class="f6 f5-ns lh-copy measure mv0">
                                            {object[i].target2}
                                            </p>
                                        </div>
                                    </article>
                                </div>

                            </div>





                        </header>

                        {/* <div className="info-container w-50-ns">




                        </div> */}
                    </div>
                </article>
        )}
        </section>
        </div>
    )
}

export default Active

