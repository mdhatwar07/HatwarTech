import { useReveal } from "../../lib/useReveal";

export function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const ref = useReveal();
  return (
    <Tag ref={ref} className={`fade-up ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
