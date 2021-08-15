import React from 'react';
import Navigation from 'components/macro/navigation/Navigation';

const Layout = ({children, menu}) => {
    return (
      <div>
          <Navigation items={menu.data.slices}/>
          <main>{children}</main>
      </div>  
    )
}

export default Layout;