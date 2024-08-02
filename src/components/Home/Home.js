// import React from 'react'
// import { useState } from "react";
// import "./Home.css";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";

import Sec1 from "./Sec1.js";
import Sec2 from "./Sec2.js";
import Sec3 from "./Sec3.js";
import Sec4 from "./Sec4.js";
import Sec5 from "./Sec5.js";
import Sec6 from "./Sec6.js";

const Home = () => {
  return (
    <><Header/>
      <div> 
        <Sec1 />
        <Sec2 />
        <Sec3 />
        <Sec4 />
        <Sec5 />
        <Sec6 />
      </div>
      <Footer />
    </>
  );
};

export default Home;
