"use client";
import React, { useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";

export default function DetailDrawer({ open, onClose, eyebrow, title, subtitle, sections = [] }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-2/3 sm:max-w-3xl bg-bg border-l border-line shadow-2xl transition-transform duration-300 ease-out overflow-y-auto ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <div className="p-6 sm:p-10">
          <button
            onClick={onClose}
            aria-label="Close details"
            className="mb-6 inline-flex items-center justify-center w-9 h-9 rounded-full border border-line text-ink-soft hover:text-ink hover:border-primary transition-colors"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>

          {eyebrow && (
            <span className="block text-xs font-bold tracking-widest uppercase text-primary mb-2">
              {eyebrow}
            </span>
          )}
          <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-ink text-balance">
            {title}
          </h3>
          {subtitle && <p className="text-primary font-semibold mt-1">{subtitle}</p>}

          <div className="mt-8 space-y-8">
            {sections.map((s, i) => (
              <div key={i}>
                <h4 className="text-xs font-bold uppercase tracking-wider text-ink-soft mb-2">
                  {s.heading}
                </h4>
                {s.placeholder ? (
                  <p className="text-sm italic text-ink-soft bg-surface border border-dashed border-line rounded-xl px-4 py-3 leading-relaxed">
                    {s.body}
                  </p>
                ) : (
                  <div className="text-sm text-ink-soft leading-relaxed">{s.body}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
