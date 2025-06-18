import React from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
import Hero from './Hero';


function ProductsPage() {
    return ( 
    <>
    
    <Hero/>
    <LeftSection imageUrl="media/images/kite.png"
    productName="Kite"
    productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
     tryDemo="" learnMore=" " googlePlay=" " appStore=""/>


    <RightSection imageUrl="media/images/console.png"
    productName="Console"
    productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
     tryDemo="" learnMore=" " googlePlay=" " appStore=""/>


     <LeftSection imageUrl="media/images/coin.png"
    productName="Coin"
    productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
     tryDemo="" learnMore=" " googlePlay=" " appStore=""/>


   <RightSection imageUrl="media/images/kiteconnect.png"
    productName="Kite"
    productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
     tryDemo="" learnMore=" " googlePlay=" " appStore=""/>

     <LeftSection imageUrl="media/images/varsity.png"
    productName="Kite Connect API"
    productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
     tryDemo="" learnMore=" " googlePlay=" " appStore=""/>



    <h5 className='text-center mt-5 mb-5'>Want to know more about our technology stack? Check out the Zerodha.tech blog.</h5> 
  
    
   
    <Universe/>
        
    
    
    </>
     );
}

export default ProductsPage;