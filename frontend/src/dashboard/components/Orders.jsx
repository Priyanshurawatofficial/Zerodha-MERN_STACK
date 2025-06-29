import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [allOrders, setallOrders] = useState([]);
  const [username, setusername] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://zerodha-mern-stack.onrender.com/verification", { withCredentials: true })
      .then(res => {
        if (res.data.status) setusername(res.data.user_id);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (!username) return;
    setLoading(true);
    axios
      .get(`https://zerodha-mern-stack.onrender.com/allOrders?userid=${username}`, { withCredentials: true })
      .then((res) => {
        setallOrders(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [username]);

  return (
    <div className="orders">
      {loading ? (
        <div className="loader">
          {/* You can replace this with a spinner component */}
          <p>Loading orders...</p>
        </div>
      ) : allOrders.length < 1 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/dashboard"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <>
          <h3 className="title">
            Orders ({allOrders.length}){" "}
            <form action="/dashboard/orders">
              <button>refresh</button>
            </form>
          </h3>
          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Mode</th>
                </tr>
              </thead>
              <tbody>
                {allOrders.map((stock, index) => (
                  <tr key={index}>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td>{stock.mode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;