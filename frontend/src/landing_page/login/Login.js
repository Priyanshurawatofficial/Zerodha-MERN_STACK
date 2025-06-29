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

  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  

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
    setLoading(true);
    setLoadingMessage("");
    try {
      const {data} = await axios.post(
        "https://zerodha-mern-stack.onrender.com/login", 
        { ...formData },
        { withCredentials:true }
        );
      console.log(data);
        const {success,message}=data;
        if(success){
          handleSuccess(message);
          setLoadingMessage("Login successful! Moving to the dashboard...");
          setTimeout(()=>{
            navigate("/dashboard");
          },1000)
        }
        else {
          setLoading(false);
          setLoadingMessage("");
          handleError(message);
          setTimeout(() => {
            navigate("/signup");
          }, 1200);
        }
      }catch(err){
          handleError("Server error. Please try again.");
          console.log(err);
          setLoading(false);
          setLoadingMessage("");
      }  
       setFormData({
  email: "",
  password: ""
});
  };

  return (
    <div className="container mt-5 mb-5">
      {loading && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(255,255,255,0.7)',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(4px)'
        }}>
          <div className="loader"></div>
          {loadingMessage && (
            <div style={{ marginTop: 24, fontSize: 20, color: '#3498db', fontWeight: 500 }}>
              {loadingMessage}
            </div>
          )}
        </div>
      )}
      <div style={loading ? { filter: 'blur(4px)', pointerEvents: 'none', userSelect: 'none' } : {}}>
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
              <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                {loading ? "Logging In..." : "Login"}
              </button>
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
      </div>
      <ToastContainer style={{ zIndex: 1000000, position: 'fixed', pointerEvents: 'auto' }} />
      <style>{`
        .loader {
          border: 8px solid #f3f3f3;
          border-top: 8px solid #3498db;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default Login;
