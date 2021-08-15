import React from "react";
import { Link } from 'prismic-reactjs'
function Navigation({ children, items }) {
  return (
    <nav>
      {children && <span>{children}</span>}
      {items?.map((item, i) => (
        <a href={Link.url(item.primary.linkurl)} key={i}>{item.primary.linktext}</a>
      ))}
    </nav>
  );
}
export default Navigation;
