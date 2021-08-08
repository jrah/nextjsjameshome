import React from "react";
import classnames from "classnames";

function Button({ children, type }) {
  return (
    <div>
      <a
        className={classnames(
          {
            "text-white bg-indigo-600 hover:bg-indigo-700": type === "primary",
            " text-indigo-700 bg-indigo-100 hover:bg-indigo-200": (type === null) | type === undefined,
          },
          "inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md"
        )}
        href="#"
      >
        {children}
      </a>
    </div>
  );
}
export default Button;
