import React from "react";
import { RichText } from "prismic-reactjs";
import { Link } from "prismic-reactjs";

const NavigationLink = ({ slice }) => {
  if (slice.variation === "multiLevelNavigation") {
    return (
      <section>
        <a className="block text-sm font-semibold text-gray-400 tracking-wider uppercase" href={Link.url(slice.primary.linkurl)}>
          {slice.primary.linktext}
        </a>
        {slice?.items?.map((item, i) => (
          <a
          className="block text-base text-gray-500 hover:text-gray-900"
            key={i}
            href={Link.url(item.linkurl)}
          >
            {item.linktext}
          </a>
        ))}
      </section>
    );
  } else {
    return (
      <section>
        <a className="block text-sm font-semibold text-gray-400 tracking-wider uppercase" href={Link.url(slice.primary.linkurl)}>
          {slice.primary.linktext}
        </a>
      </section>
    );
  }
};

export default NavigationLink;
