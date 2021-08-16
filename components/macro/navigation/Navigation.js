import React from "react";
import { Link } from "prismic-reactjs";
function Navigation({ children, items }) {
  return (
    <nav>
      {children && <span>{children}</span>}
      {items[0].items[0].linktext === null &&
        items?.map((item, i) => (
          <a href={Link.url(item.primary.linkurl)} key={i}>
            {item.primary.linktext}
          </a>
        ))}
      {items[0].items[0].linktext != null && (
        <div className="flex">
          {items?.map((item, j) => (
            <div>
              <a href={Link.url(item.primary.linkurl)} key={j}>
                {item.primary.linktext}
              </a>
              <ChildNavLink items={item.items} />
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}

const ChildNavLink = ({ items }) => {
  return (
    <div>
      {items?.map((item, k) => (
        <div>
          <a href={Link.url(item.linkurl)} key={k}>
            {item.linktext}
          </a>
        </div>
      ))}
    </div>
  );
};
export default Navigation;
