"use client";

import dynamic from "next/dynamic";

const RobotScene = dynamic(() => import("./RobotScene"), {
  ssr: false,
  loading: () => (
    <div className="about-graphic-blob absolute inset-0 bg-gradient-to-br from-[var(--primary-soft)] to-[var(--secondary)] rounded-3xl" />
  ),
});

export default function RobotGraphic({ className = "" }) {
  return (
    <div className={`relative overflow-hidden ${className}`} aria-hidden="true">
      <RobotScene />
    </div>
  );
}
