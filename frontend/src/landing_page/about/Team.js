import React from 'react';

function Team() {
    return (
         <div className="container border-top" style={{marginTop:"200px"}}>
            <div className="row mt-5">
                <div className="col-6 mt-5 p-5">
                   <div>
                     <p className='text-muted' style={{fontSize:"19px",lineHeight:"1.8",marginBottom: "15px"}}>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>

                       <p className='text-muted' style={{fontSize:"19px",lineHeight:"1.8",marginBottom: "15px"}}>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>


                       <p className='text-muted' style={{fontSize:"19px",lineHeight:"1.8",marginBottom: "15px"}}>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>

                    </div>
                </div>


                <div className="col-6 mt-5 p-5">
                    <div>
                     <p className='text-muted' style={{fontSize:"19px",lineHeight:"1.8",marginBottom: "15px"}}>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>

                       <p className='text-muted' style={{fontSize:"19px",lineHeight:"1.8",marginBottom: "15px"}}>Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>


                       <p className='text-muted' style={{fontSize:"19px",lineHeight:"1.8",marginBottom: "15px"}}>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.</p>

                    </div>
                </div>

            </div>
                 <div className="container">
                     <div className="row">
                        <div className="col-6 p-5 text-center">
                            <img style={{width:"60%",borderRadius:"100%"}} src="media/images/Priyanshu.jpg" alt="" />
                           <h4 className='mt-3' >Priyanshu Rawat</h4>
                           <h5>Founder, Ceo</h5>

                        </div>
                        <div className="col-6 p-5">
                             <div>
                               <p className='text-muted' style={{fontSize:"19px",lineHeight:"1.8",marginBottom: "15px"}}>Priyanshu bootstrapped and created Zerodha Website to enhance his skills in Full-Stack development. Today, he is well known for his great contribution in Zerodha.</p>

                               <p className='text-muted' style={{fontSize:"19px",lineHeight:"1.8",marginBottom: "15px"}}>He is currently pursuing BCA degree from UTTARANCHAL UNIVERSITY which is  well known university in Dehradun, Uttarakhand</p>
                                
                                <p className='text-muted' style={{fontSize:"19px",lineHeight:"1.8",marginBottom: "15px"}}>Very active person both physically and mentally</p>

                                <p>Connect on <a style={{textDecoration:"none"}} href="https://www.instagram.com/priyanshurawat_official/#">Instagram</a></p>
                             </div>

                        </div>
                     </div>
                 </div>
              
         </div>

     );
}

export default Team;