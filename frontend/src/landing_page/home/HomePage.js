import Hero from './Hero';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Awards from './Awards';
import Pricing from './Pricing';
import Stats from './Stats';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const cors  =require("cors")
  

function HomePage() { 
 

return (<>
      
      <Hero/>
      <Awards/>
      <Stats/>
      <Pricing/>
      <Education/>
      <OpenAccount/>
      
    </>  );
}

export default HomePage;