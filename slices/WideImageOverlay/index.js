import React from 'react';
import { RichText } from 'prismic-reactjs';

const MySlice = ({ slice }) => (
  <section>
    <span className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
      {
        slice.primary.title ?
        <RichText render={slice.primary.title}/>
        : <h2>Template slice, update me!</h2>
      }
    </span>
    {
      slice.primary.image ?
    <img src={slice.primary.image.url} alt={slice.primary.image.alt} /> : null }
    <div className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
    {
      slice.primary.description ?
      <RichText render={slice.primary.description}/>
      : <p>start by editing this slice from inside the SliceMachine builder!</p>
    }
    </div>
    { slice?.items?.map((item, i) => <div key={i} className={`gallery ${slice.variation}-gallery`}><RichText render={item.heading} /><img src={item.image.url} alt={item.image.alt} /> <span >{ item.test }</span></div>) }
    {/* { slice?.items?.map((item, i) => <img src={item.image.url} alt={item.image.alt} />) }   */}
    </section>
);

export default MySlice;
