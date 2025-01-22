import React from "react";

const SectionTitle = ({ children, className = "" }) => {
  return (
    <h3 className={`text-[40px] font-light tracking-wide mb-3 ${className}`}>
      {children}
    </h3>
  );
};

export default SectionTitle;
