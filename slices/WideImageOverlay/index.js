import React from "react";
import { RichText } from "prismic-reactjs";

const MySlice = ({ slice }) => (
  <section className="mx-auto max-w-5xl">
    <div className="flex items-center">
      <div>
        <span className="mt-4 text-4xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
          {slice.primary.title ? (
            <RichText render={slice.primary.title} />
          ) : (
            <h2>Template slice, update me!</h2>
          )}
        </span>
        <div className="mt-3 text-base text-gray-800 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
          {slice.primary.description ? (
            <RichText render={slice.primary.description} />
          ) : (
            <p>
              start by editing this slice from inside the SliceMachine builder!
            </p>
          )}
        </div>
      </div>
      <div>
      {slice.primary.image ? (
          <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
        ) : null}
      </div>
    </div>
  </section>
);

export default MySlice;
