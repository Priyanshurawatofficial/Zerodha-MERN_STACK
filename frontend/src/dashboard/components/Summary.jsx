import React from "react";
import axios  from "axios";
import { useEffect,useState } from "react";
const Summary = () => {
 
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("https://zerodha-mern-stack.onrender.com/verification", { withCredentials: true })
      .then((res)=>{
        setUser(res.data);
        console.log(res.data);
      })
      .catch(() => setUser(null));
  }, []);
 
  return (
    <>
      <div className="username">
        <h6>Hi, {user && user.user ? user.user : "Guest"}</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>31.43k</span>{" "}
            </p>
            <p>
              Investment <span>29.88k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;