import React from 'react';


function Hero() {
    return ( 
   <div className='container p-10 mb-5'>
  <div className='row text-center'>
       <img src='media/images/homeHero.png' alt='heroimage.png' className='mb-5'/>
       <h1 className=''><b>Invest in everything</b></h1>
       <p className='text-muted'>Online platform to invest in stocks,derivatives,mutual funds,and more</p>
      <a href='/signup'> <button className='btn btn-primary p-3 fs-5 mb-5' style={{width:"20%",margin:"auto",color:"white",backgroundColor:""}}><b>Sign up for free</b></button> </a>

  </div> 
    

   </div>
    );
}

export default Hero;