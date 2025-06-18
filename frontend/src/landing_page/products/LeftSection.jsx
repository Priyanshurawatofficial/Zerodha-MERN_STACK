import React from 'react';

function LeftSection({imageUrl,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-7">
                    <img style={{width:"70%"}} src={imageUrl} alt="" />
                </div>

                <div className="col-5 p-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>

                    <div><a style={{textDecoration:"none"}} href={tryDemo}>Try Demo &nbsp;<i class="fa-solid fa-arrow-right"></i></a>
                    <a style={{textDecoration:"none"}} href={learnMore} className='ms-5'>Learn More &nbsp;<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    
                    
                    <div className='mt-3'>
                          <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="" /></a>
                     <a href={appStore} className='ms-4'><img  src="media/images/appStoreBadge.svg" alt="" /></a>
                    </div>
                    
                   
                </div>
            </div>
        </div>
    );
}

export default LeftSection;

