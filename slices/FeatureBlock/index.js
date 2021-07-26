import React from "react";
import { RichText } from "prismic-reactjs";

const FeatureBlock = ({ slice }) => (
  <section
    className={`${slice.slice_type} ${slice.variation} ax-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8`}
  >
    <span className="text-3xl font-extrabold text-black tracking-tight">
      {slice.primary.title ? (
        <RichText render={slice.primary.title} />
      ) : (
        <h2>Template slice, update me!</h2>
      )}
    </span>
    <div className="mt-4 max-w-3xl text-lg text-gray-900">
      {slice.primary.description ? (
        <RichText render={slice.primary.description} />
      ) : (
        <p>start by editing this slice from inside Prismic builder!</p>
      )}
    </div>
    <div className="grid grid-flow-col justify-items-center gap-4 mt-12">
      {slice?.items?.map((item, i) => (
        <div key={i}>
          <div className="mb-6">
            <img
              className="h-16 w-16"
              src={item.image.url}
              alt={item.image.alt}
            />
          </div>
          <div class="mt-5 text-lg leading-6 font-medium text-gray-900">
            <RichText render={item.heading} />
          </div>
          <div className="mt-2 text-base text-gray-500">
            <RichText render={item.content} />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default FeatureBlock;
