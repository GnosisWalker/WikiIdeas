import React from 'react';
import Nav from "../components/Nav/Nav.tsx";
import {Outlet} from "react-router-dom";


const Layout: React.FC<any> = () => {

  return <div className="page_wrapper">
    <Nav/>
    <Outlet/>
  </div>
};

export default Layout;