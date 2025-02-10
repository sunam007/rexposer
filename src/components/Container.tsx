import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <section className={`py-20 px-32`}>
      <div>{children}</div>
    </section>
  );
};

export default Container;
