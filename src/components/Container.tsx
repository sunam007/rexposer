import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <section className="py-32">
      <div className="px-40">{children}</div>
    </section>
  );
};

export default Container;
