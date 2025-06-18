import React from 'react';



function Universe() {
    return ( 
        <div className="container">
             <h3 className='text-center'>The Zerodha Universe</h3>
             <p className='text-center'>Extend your trading and investment experience even further with our partner platforms</p>
            <div className="row ms-5">


                <div className="col-4 p-5 mt-5">
                 <img src="media/images/smallcaselogo.png" alt="" />
                  <p className='text-small text-muted  mb-5 mt-4'>Thematic investment platform</p>
                 
                  <img style={{width:"50%"}} src="media/images/zerodhaFundhouse.png" alt="" /> 
                  <p className='text-small text-muted mt-4'>Asset management</p>
                     </div> 

                <div className="col-4 p-5 mt-5">
                    <img style={{width:"50%"}} src="media/images/streakLogo.png" alt="" /> 
                    <p className='text-small text-muted  mb-5 mt-4'>Algo & strategy platform</p>
               <img src="media/images/goldenpiLogo.png" alt="" />
               <p className='text-small text-muted mt-4'>Bonds trading platform</p>

                </div>
                <div className="col-4 p-5 mt-5">
                    <img style={{width:"50%"}} src="media/images/sensibullLogo.svg" alt="" /> 
                    <p className='text-small text-muted mt-4 mb-5'>Options trading platform</p>
               <img style={{width:"50%"}} src="media/images/dittoLogo.png" alt="" />
               <p className='text-small text-muted mt-4'>Insurance and other stuff</p>

                </div>
            </div>
               
               <div className="text-center"><button className='btn btn-primary p-3 fs-5 mb-5' style={{width:"20%",margin:"auto",color:"white",backgroundColor:""}}><b>Sign up for free</b></button></div>
              
       
        </div>

     );
}

export default Universe;