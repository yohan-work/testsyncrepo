import React from 'react';

const ProductIntro = ({ title, description }: { title: string; description: string }) => (
  <div className="p-4 bg-zinc-800 rounded-lg shadow">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

export default ProductIntro;