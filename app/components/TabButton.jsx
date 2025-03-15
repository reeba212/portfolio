import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "100%" }
};

export default function TabButton({ active, selectTab, children }) {
  const buttonClasses = active
    ? "text-white"
    : "text-[#ADB7BE] hover:text-white";

  return (
    <button
      onClick={selectTab}
      className={`mr-3 font-semibold ${buttonClasses} flex flex-col items-start`}
    >
      {children}
      <div className="w-full overflow-hidden mt-2">
        <motion.div
          initial="default"
          animate={active ? "active" : "default"}
          variants={variants}
          className="h-1 bg-purple-500"
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </div>
    </button>
  );
}
