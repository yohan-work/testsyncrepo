import React from 'react';

const HeroBandPlusSections = ({ title, description }: { title: string; description: string }) => (
  <section className="bg-zinc-800 text-white p-4">
    <h1>{title}</h1>
    <p>{description}</p>
  </section>
);

export default HeroBandPlusSections;