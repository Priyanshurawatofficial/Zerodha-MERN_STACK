import React from 'react';


function Awards() {
    return (
      <div className='container mb-5'>
         <div className='row'>
            
        <div className='col p-3'>
              <img src='media/images/largestBroker.svg'/>
        </div>
        


        <div className='col p-3 mt-5'>
           <h1>Largest stock broker in India</h1>
           <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                  

                   <div className='row'>
               <div className='col'>
                      <ul>
 
                      <li className='mb-2'>Futures and Options</li>
                      <li className='mb-2'>Commodity derivatives</li>
                      <li className='mb-3'>Currency derivatives</li>
                      </ul>
                </div>

    <div className='col'><ul>
                <li className='mb-2'>Stocks & IPOs</li>
                <li className='mb-2'>Direct mutual funds</li>
                <li className='mb-3'>Bonds and Govt. Securities</li>
             </ul></div>
  </div>
 
     <img className='mt-4' src='media/images/pressLogos.png' style={{width:"90%"}} />
             

        </div>

         </div>
      </div>
    );
}

export default Awards;