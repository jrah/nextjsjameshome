import classnames from "classnames";

function Heading({ shade, children }) {
  return (
    <span
      className={classnames(
        {
          "text-gray-800": shade === "dark",
          "text-white": shade === "light",
        },
        "mt-4 text-4xl tracking-tight font-extrabold sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"
      )}
    >
      {children}
    </span>
  );
}
export default Heading;
