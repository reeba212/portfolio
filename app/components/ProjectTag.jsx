import React from 'react';

export default function ProjectTag({ name, onClick, isSelected }) {
  const buttonStyles = isSelected
    ? "text-white border-purple-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-4 py-2 text-sm md:px-6 md:py-3 md:text-xl cursor-pointer transition-colors duration-300`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
}