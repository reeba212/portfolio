import React from 'react';
import { CodeBracketIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

export default function ProjectCard({ title, description, imgUrl, gitUrl }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-line h-64 md:h-72">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />

      {/* Base scrim so the title stays legible over the image even without hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent transition-opacity duration-300 group-hover:opacity-0" />
      <div className="absolute inset-x-0 bottom-0 p-4 transition-opacity duration-300 group-hover:opacity-0">
        <h5 className="font-heading text-lg font-semibold text-white drop-shadow-lg">{title}</h5>
      </div>

      {/* Hover: darken fully, reveal description + code link */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h5 className="font-heading text-lg font-semibold text-white mb-2">{title}</h5>
        <p className="text-white/85 text-sm leading-relaxed mb-4 line-clamp-4">{description}</p>
        <Link
          href={gitUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-white border border-white/50 rounded-full px-4 py-2 hover:bg-white hover:text-ink transition-colors duration-200"
        >
          <CodeBracketIcon className="h-4 w-4" />
          Code
        </Link>
      </div>
    </div>
  );
}
