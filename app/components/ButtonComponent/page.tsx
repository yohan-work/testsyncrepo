"use client";

import React from 'react';

interface ButtonProps {
  text: string;
  type: 'primary' | 'secondary';
  onClick: () => void;
}

const ButtonComponent: React.FC<ButtonProps> = ({ text, type, onClick }) => {
  return (
    <button 
      className={`bg-${type === 'primary' ? 'blue' : 'gray'} hover:bg-${type === 'primary' ? 'dark-blue' : 'dark-gray'} text-white font-semibold py-2 px-4 rounded`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;