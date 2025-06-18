import React, { useState } from 'react';
import {Link,useNavigate} from "react-router-dom"
import axios from "axios"
import {ToastContainer,toast} from "react-toastify";


function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value
        }));
    };

const handleError=(err)=>{
  toast.error(err,{
    position:"bottom-left",
  });
}

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const {data} = await axios.post(
        "http://localhost:3000/login", 
        {
         ...formData,
        },
        {
          withCredentials:true
        });
      console.log(data);
        const {success,message}=data;
        if(success){
          handleSuccess(message);
          setTimeout(()=>{
            navigate("/dashboard");
          },1000)
        }
        else {
          handleError(message);
        }
      }catch(err){
          console.log(err)
      }  
       setFormData({
        ...formData,
        email:"",
        password:"",
        username:"",
       });
    
     
  };

  return (
    <div className="container mt-5 mb-5">
      <h1 className="text-center">Welcome to Zerodha</h1>
      <h5 className="text-muted text-center mb-5">
        Start investing brokerage free and join a community of 1.5+ crore investors and traders
      </h5>

      <div className="row">
        <div className="col-6">
          <img className="ms-5" style={{ width: "70%" }} src="/media/images/login.svg" alt="" />
        </div>

        <div className="col-6 p-5">
          <h1>Login</h1>
          <p>Or <Link style={{textDecoration:"none"}} to={"/signup"}>Create a new account</Link></p>

          <form  onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter your email id'
                required
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formData.password}
                 placeholder='Enter password'
                onChange={handleChange}
                required
              />
            </div>


            <button type="submit" className="btn btn-primary w-100">Login</button>
             <span className='mt-5'>
                <p style={{fontSize:20}} className='mt-3 text-center'> New Customer? <Link style={{textDecoration:"none"}} to={"/signup"}>Create a new account</Link></p>
        </span>
        
          </form>

          <p className="text-muted small text-center mt-3 mb-0">
            By proceeding, you agree to the Zerodha{' '}
            <a href="#" className="text-decoration-none">terms</a> &{' '}
            <a href="#" className="text-decoration-none">privacy policy</a>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
