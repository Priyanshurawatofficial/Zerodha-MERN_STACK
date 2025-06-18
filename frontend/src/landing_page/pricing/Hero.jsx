import React from 'react';




function Hero() {
    return ( 
        <div className="container border-bottom mt-5 mb-5">
              <h1 className='text-center'>Charges</h1>
              <h5 className="text-muted text-center mb-5">List of all charges and taxes</h5>
       
                  <div className="row border-top">
                <div className="col-4 p-5">
                    <img src="media/images/pricingEquity.svg" alt="" />
                   <h3>Free equity delivery</h3>
                    <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                
                
                <div className="col-4 p-5">
                    <img src="media/images/trading20.svg" alt="" />
                     <h3>Intraday and F&O trades</h3>
                     <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>

                </div>
                 
                
                <div className="col-4 p-5">
                    <img src="media/images/pricingMF.svg" alt="" />
                    <h3>Free direct MF</h3>
                    <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                
                </div>
            </div>
       
        </div>
     );
}

export default Hero;