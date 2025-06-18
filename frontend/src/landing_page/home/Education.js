import React from 'react';



function Education() {
    return (
        <div className="container mb-5 mt-5 p-5">
                <div className="row">
                      <div className="col-6">
                          <img src="media/images/education.svg" alt="image" style={{width:"70%"}} />
                         
                      </div>
                      
                      
                      
                      <div className="col-6">
                      <h1 className='mb-3 fs-2'>Free and open market education</h1>
               <p className='mb-3'>Varsity, the largest online stock market education book in the world covering everything from basics to advanced trading.</p>
                <a href="" style={{textDecoration:"none"}}>Versity &nbsp;&nbsp;<i class="fa-solid fa-arrow-right"></i></a>
                   

            
                <p className='mb-3 mt-5'>TradingQ&A,the most active trading and investment community in India for all your market related queries.</p>
                <a href="" style={{textDecoration:"none"}}>TradingQ&A &nbsp;&nbsp;<i class="fa-solid fa-arrow-right"></i></a>

                      </div>

                </div>
        </div>
    );
}

export default Education;