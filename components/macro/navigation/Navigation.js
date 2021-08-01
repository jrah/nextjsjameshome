import React from "react";
function Navigation({ children, items }) {
  return (
    <nav>
      <span>{children}</span>
      {items?.map((item, i) => (
        <a href="#" key={i}>{item.text}</a>
      ))}
    </nav>
  );
}
export default Navigation;
