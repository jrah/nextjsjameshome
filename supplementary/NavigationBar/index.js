import React from "react";
import { Link } from "prismic-reactjs";

const NavigationBar = ({ slice }) => (
  <section>
    <nav class="flex items-center">
    <img
      className="w-36"
      src={slice.primary.logo.url}
      alt={slice.primary.logo.alt}
    />
    {slice?.items?.map((item, i) => (
      <a className="block ml-4 " href={Link.url(item.linkurl)}>{item.linktext}</a>
    ))}
    </nav>
  </section>
);

export default NavigationBar;
