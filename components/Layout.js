import React from "react";
import Navigation from "components/macro/navigation/Navigation";

const Layout = ({ children, menu }) => {
  return (
    <div>
      <div className="container flex items-center">
        <img src={menu.data.logo.url} width="186px" height="82px"/>
        <div className="hidden md:flex md:ml-10">
        <Navigation items={menu.data.slices} />
        </div>
      </div>
      <main>{children}</main>
      <Navigation items={menu.data.slices1} />
    </div>
  );
};

export default Layout;
