import React from "react";
import classnames from "classnames";
 import { Link } from 'prismic-reactjs'

function Button({ children, type, outline, data }) {
  return (
    <div>
      <a
        className={classnames(
          {
            "border-transparent": !outline
          },
          {
            "text-white bg-indigo-600 hover:bg-indigo-700": type === "primary",
            "text-indigo-700 bg-indigo-100 hover:bg-indigo-200":
              type === undefined,
          },
          "inline-flex items-center justify-center px-5 py-3 border text-base font-medium rounded-md"
        )}
        href={Link.url(data.linkurl)}
      >
        {children}
      </a>
    </div>
  );
}
export default Button;
