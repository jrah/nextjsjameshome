import React from "react";
import Navigation from "components/macro/navigation/Navigation";

const Layout = ({ children, menu }) => {
  return (
    <div>
      <div className="container flex items-center">
        <img src={menu.data.logo.url} width="186px" height="82px"/>
        <Navigation items={menu.data.slices} />
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
