type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "nav";
  id?: string;
};

export function Container({ children, className = "", as: Tag = "div", id }: ContainerProps) {
  return (
    <Tag id={id} className={`mx-auto w-full max-w-[1120px] px-6 sm:px-8 ${className}`.trim()}>
      {children}
    </Tag>
  );
}
