import React from "react";
function Button({ children, items }) {
  return (
    <div>
      <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700" href="#">{children}</a>
    </div>
  );
}
export default Button;
