const SectionSubTitle = ({ children, className = "" }) => {
  return (
    <p
      className={`text-[var(--primary-color)] text-lg font-light mb-2 ${className}`}
    >
      {children}
    </p>
  );
};

export default SectionSubTitle;
