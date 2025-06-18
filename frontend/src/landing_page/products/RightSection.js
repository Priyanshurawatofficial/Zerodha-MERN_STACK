import React from 'react';

function RightSection({imageUrl,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-5 p-5">
                    
                    
                     <h1>{productName}</h1>
                    <p>{productDescription}</p>

                    <div>
                    <a style={{textDecoration:"none"}} href={learnMore}>Learn More &nbsp;<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    
                </div>

                <div className="col-7">
                     <img style={{width:"70%"}} src={imageUrl} alt="" />
                   
                </div>
            </div>
        </div>
    );
}

export default RightSection;