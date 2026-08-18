import { Link } from "react-router-dom";
import { Icon } from "./Icon";
import styles from "./Button.module.css";

const variantClass = {
  primary: styles.primary,
  secondary: styles.secondary,
  onDark: styles.onDark,
};

export function Button({
  children,
  to,
  href,
  onClick,
  type = "button",
  variant = "primary",
  showArrow = true,
  fullWidth = false,
  className = "",
  ...rest
}) {
  const classes = [styles.btn, variantClass[variant], fullWidth ? styles.fullWidth : "", className]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {children}
      {showArrow && <Icon name="arrowRight" size={16} strokeWidth={2.2} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}
