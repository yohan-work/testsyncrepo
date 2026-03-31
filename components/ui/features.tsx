import React from 'react';

interface Feature {
  title: string;
  value: string;
}

const Features = ({ features }: { features: Feature[] }) => (
  <div className="grid gap-4">
    {features.map((feature, index) => (
      <div key={index} className="p-4 bg-zinc-800 rounded-lg shadow">
        <h3>{feature.title}</h3>
        <p>{feature.value}</p>
      </div>
    ))}
  </div>
);

export default Features;