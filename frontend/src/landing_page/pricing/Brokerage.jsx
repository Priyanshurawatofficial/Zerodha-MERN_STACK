


function Brokerage() {
    return ( 
       <div className="container mt-5 p-5 border-bottom">
        <div className="row">
            
            <div className="col-5 p-5">
                 <h3 style={{color:"#387ed1"}}>Brokerage Calculator</h3> 
                 <ul className="mt-4">
                    <li><p className="text-muted">Call & Trade and RMS auto-squareoff</p></li>
                    <li><p className="text-muted">Digital contract notes will be sent via email</p></li>
                    <li><p className="text-muted">Physical copies of contract notes.</p></li>
                    <li><p className="text-muted">For NRI account (Non-PIS)</p></li>
                    <li><p className="text-muted">For NRI account (PIS)</p></li>
                    <li><p className="text-muted">If the account is in debit balance, any order placed will be charged.</p></li>
                 </ul>

            </div>
                                <div className="col-1"></div>
            
            <div className="col-6 p-5">
                    <h3 className="mb-4" style={{color:"#387ed1"}}>List of charges</h3>
                    <p className="text-muted">Flat Rs. 20 per executed order</p>
                    <p className="text-muted">18% on (brokerage + SEBI charges + transaction charges)</p>
                    <p className="text-muted">0.003% or ₹300 / crore on buy side</p>
                    <p className="text-muted">0.03% or Rs. 20/executed order whichever is lower</p>
                    <p className="text-muted">18% on (brokerage + SEBI charges + transaction charges)</p>
                    <p className="text-muted">NSE: 0.00297% <br />
                    BSE: 0.00375%</p>


            </div>
        </div>
       </div>
     );
}

export default Brokerage;