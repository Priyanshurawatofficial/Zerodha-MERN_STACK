import {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Menu = () => {

    const [selectedMenu,setSelectedMenu]=useState(0);
    const [isProfileDropdownOpen,setIsProfileDropdownOpen]=useState(false);

    const handleMenuClick=(index)=>{
      setSelectedMenu(index);
    }

     const handleProfileClick=()=>{
      setIsProfileDropdownOpen(!isProfileDropdownOpen);
    }
    const menuClass="menu";
    const activeMenuClass="active";

   const [username,setUsername]=useState("");
    useEffect(()=>{
      axios.get("http://localhost:3000/verification", { withCredentials: true })
       .then((res)=>{
        if(res.data.status)
        {
          setUsername(res.data.user);
        }
        else{
          setUsername("Guest");
        }
       })

    },[])





  return (
  
  <div className="menu-container">
      <img src="logo.svg" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to="/dashboard" onClick={()=>handleMenuClick(0)}>
            <p className={selectedMenu===0?activeMenuClass:menuClass}>Dashboard</p></Link>
            
          </li>
          <li>
                 <Link style={{textDecoration:"none"}} to="/dashboard/orders" onClick={()=>handleMenuClick(1)}>
            <p className={selectedMenu===1?activeMenuClass:menuClass}>Orders</p></Link>
          
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/dashboard/holdings" onClick={()=>handleMenuClick(2)}>
            <p className={selectedMenu===2?activeMenuClass:menuClass}>Holdings</p></Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/dashboard/positions" onClick={()=>handleMenuClick(3)}>
            <p className={selectedMenu===3?activeMenuClass:menuClass}>Positions</p></Link>
          </li>
          <li>
             <Link style={{textDecoration:"none"}} to="/dashboard/funds" onClick={()=>handleMenuClick(4)}>
            <p className={selectedMenu===4?activeMenuClass:menuClass}>Funds</p></Link>
          </li>
          
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick} style={{ position: 'relative', cursor: 'pointer' }}>
          <div className="avatar mb-3">{username && username !== "Guest" ? username.substring(0, 2).toUpperCase() : "GU"}</div>
          <p className="username">{username}</p>
          {isProfileDropdownOpen && (
            <div style={{
              position: 'absolute',
              top: '40px',
              right: 0,
              background: '#fff',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              borderRadius: '4px',
              zIndex: 100,
              minWidth: '120px',
              padding: '10px 0',
              textAlign: 'center',
            }}>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#f44336',
                  fontWeight: 500,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  width: '100%',
                  padding: '8px 0',
                }}
                onClick={async () => {
                  await axios.post("https://zerodha-mern-stack.onrender.com/logout", {}, { withCredentials: true });
                  window.location.href = '/';
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;