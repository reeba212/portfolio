import React from "react";

export default function SkillCard({ title, description, skills }) {
  return (
    <div className="group relative bg-surface border border-line rounded-2xl p-5 h-full overflow-hidden transition-all duration-500 ease-out hover:border-primary hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_16px_32px_-16px_var(--primary)]">
      <h3 className="font-heading text-base font-semibold text-ink mb-1">{title}</h3>
      <p className="text-ink-soft text-xs mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary-soft text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-surface"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
