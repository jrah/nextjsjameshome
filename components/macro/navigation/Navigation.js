import React from "react";
import { Link, RichText } from "prismic-reactjs";
function Navigation({ children, items }) {
  return (
    <nav>
      {children && <span>{children}</span>}
      {items[0].items[0].linktext === null &&
        items?.map((item, i) => (
          <a href={Link.url(item.primary.linkurl)} key={i}>
            <RichText render={item.primary.linktext} />
          </a>
        ))}
      {items[0].items[0].linktext != null && (
        <div className="flex">
          {items?.map((item, j) => (
            <div key={j}>
              <NavItem item={item.primary} />
              <ChildNavItem items={item.items} />
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}

// const NavItem = ({ item }) => {
//   return (
//     item.linkurl.url != null && (
//       <a href={Link.url(item.linkurl)}>
//         <RichText render={item.linktext} />
//       </a>
//     ),
//     item.linkurl.url === null && (
//       <span>
//         <RichText render={item.linktext} />
//       </span>
//     )
//   );
// };

const NavItem = ({ item }) => {
  return (
    <div>
      {item.linkurl.url ? (
        <a href={Link.url(item.linkurl)}>
          <RichText render={item.linktext} />
        </a>
      ) : (
        <RichText render={item.linktext} />
      )}
    </div>
  );
};

const ChildNavItem = ({ items }) => {
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
