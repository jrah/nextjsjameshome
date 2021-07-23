import React, { useState } from "react";
import { RichText } from "prismic-reactjs";

const Accordion = ({ children, title, isExpand = false }) => {
  const [expand, setExpand] = useState(isExpand);
  return (
    <section>
      <span
        className="text-lg font-medium text-gray-900 cursor-pointer"
        onClick={() => setExpand((expand) => !expand)}
      >
        <RichText render={title} />
      </span>
      {expand && <div>{children}</div>}
    </section>
  );
};

const FaqDisplay = ({ slice }) => {
  return (
    <section>
      <span className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
        {slice.primary.title ? (
          <RichText render={slice.primary.title} />
        ) : (
          <h2>Template slice, update me!</h2>
        )}
      </span>
      <div className="text-center mt-1">
        {slice.primary.description ? (
          <RichText render={slice.primary.description} />
        ) : (
          <p>start by editing this slice from inside Prismic builder!</p>
        )}
      </div>
      <div className="mx-auto max-w-3xl mt-4 border-t-2">
        {slice?.items?.map((item, i) => (
          <div key={i} className="py-6 border-b">
            <Accordion title={item.heading}>
              <div className="mt-2 text-gray-700">
                <RichText render={item.content} />
              </div>
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqDisplay;
