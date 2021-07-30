import React from "react";
import { RichText } from "prismic-reactjs";
import Heading from '../../components/heading';
const MySlice = ({ slice }) => (
  <section className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden background-color">
    <div className="mx-auto max-w-7xl lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
          <div className="lg:py-24">
            <Heading shade="light">
            {slice.primary.title ? (
                <RichText render={slice.primary.title} />
              ) : (
                <h2>Template slice, update me!</h2>
              )}
            </Heading>
            <div className={`${slice.primary.fontshade === 'dark' ? 'font-dark'  : 'font-light' } mt-3 text-base text-gray-800 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl`}>
              {slice.primary.description ? (
                <RichText render={slice.primary.description} />
              ) : (
                <p>
                  start by editing this slice from inside the SliceMachine
                  builder!
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
            {slice.primary.image ? (
              <img
                className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:max-w-none"
                src={slice.primary.image.url}
                alt={slice.primary.image.alt}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .background-color {
        background-color: ${slice.primary.backgroundcolor};
      }
      .font-dark {
        @apply bg-blue-600;
      }
      .font-light {
        @apply bg-red-600;
      }
    `}</style>
  </section>
);

export default MySlice;
