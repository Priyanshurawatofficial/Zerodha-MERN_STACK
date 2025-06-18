import React from 'react';


function Stats() {
    return ( 
      <div className='container mt-5 p-5'>
              <div className='row'>
                    <div className='col-6 mt-5 p-5'>
                       <h1 className='mb-5'>Trust with confidence</h1>
                         
                         <h4> Customer-first always</h4>
                            <p className='mb-4 text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>


                            <h4>No spam or gimmicks </h4>
                            <p className='mb-4 text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>

                            <h4> The Zerodha universe</h4>
                            <p className='mb-4 text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                            <h4>Do better with money </h4>
                            <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                         
                         
                    </div>
 
                    <div className='col-6 p-5'>
                       <img src='media/images/ecosystem.png'  style={{width:"100%"}}/>
                        <div style={{textAlign:"center"}}>
                            <a href='' style={{textDecoration:"none"}}>Explore our products  <i class="fa-solid fa-arrow-right"></i></a>
                            &nbsp; &nbsp; &nbsp;
                            <a href='' style={{textDecoration:"none"}}>Try Kite demo  <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>


              </div>
              <img className='mt-0 mb-5' src='media/images/pressLogos.png' style={{width:"80%",margin:"16%"}} />
      </div>
    );
}

export default Stats;