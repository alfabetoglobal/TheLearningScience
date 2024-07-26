import Header from "./Components/Header/Header"

import Home from './Components/Home/Home'

import Footer from "./Components/Footer/Footer";
//  import {BrowserRouter, Outlet} from 'react-router-dom';
// import  {BrowserRouter, Router, Router} from "react-router-dom"

const Layout = () => {
  return (
<>
    <Header />
    <Home />
    
    {/* <Outlet /> */}
    <Footer />

    </>
  )
}

export default Layout



