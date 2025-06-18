import React from 'react';


function Hero() {
    return ( 
       <div className="container text-center mt-5 border-bottom mb-5">
         <b><h1>Technology</h1></b>
         <p className='fs-5'>Sleek, modern and intuitive trading platforms.</p>
         <p className='mb-5'>Check out our <a style={{textDecoration:"none"}} href="/">investment offerings  <i class="fa-solid fa-arrow-right"></i></a></p>
       </div>
     );
}

export default Hero;

