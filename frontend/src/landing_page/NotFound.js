
import { Link } from "react-router-dom";

function NotFound() {
    return ( 
        <div className='container p-10 mb-5'>
  <div className='row text-center'>
       <h1 className=''><b>404 Not Found</b></h1>
       <p className='text-muted'>Sorry, the page you are looking for does not exist</p>
     <Link to="/">  <button className='btn btn-primary p-3 fs-5 mb-5' style={{width:"20%",margin:"auto",color:"white",backgroundColor:""}}><b>Go Home</b></button> </Link>

  </div> 
    

   </div>
     );
}

export default NotFound;