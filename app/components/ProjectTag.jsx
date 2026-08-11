import React from 'react';

export default function ProjectTag({ name, onClick, isSelected }) {
  const buttonStyles = isSelected
    ? "text-surface bg-primary border-primary"
    : "text-ink-soft border-line hover:border-primary hover:text-primary";

  return (
    <button
      className={`${buttonStyles} font-semibold rounded-full border-2 px-4 py-1.5 text-sm md:px-5 md:py-2 md:text-base cursor-pointer transition-colors duration-300`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
}