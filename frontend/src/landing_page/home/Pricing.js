import React from 'react';



function Pricing() {
    return (
     <div className='container p-5 mb-5'>
            <div className='row'>
              <div className='col-4'>
               <h1 className='mb-3'>Unbeatable pricing</h1>
               <p className='mb-3'>We pioneered the concept of discount broking and price transparency in India.Flat fees and no hidden charges.</p>
                <a href="" style={{textDecoration:"none"}}>See pricing &nbsp;&nbsp;<i class="fa-solid fa-arrow-right"></i></a>
              </div>

              <div className="col-2"></div> 


              <div className='col-6'>
               <div className="row">
                      <div className="col-6 text-center border p-3">
                            <h1><b>₹0</b></h1>
                             <p className='mb-3 mt-3'>Free equity delivery and <br /> direct mutual funds</p>      
                            
                       </div>
                     <div className="col-6 text-center border p-3">
                            <h1><b>₹20</b></h1>
                            <p className='mt-3'>Intraday and F&O</p>
                            
                            </div>
               </div>

              </div>
            </div>
     </div>    
     );
}

export default Pricing;