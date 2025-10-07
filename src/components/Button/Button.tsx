// src/components/Button/Button.tsx
import { type JSX } from "preact";
import styles from "./Button.module.css";

interface ButtonProps {
  children: JSX.Element | string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export const Button = ({
  children,
  onClick,
  variant = "primary",
}: ButtonProps) => {
  return (
    <button
      className={`${styles.btn} ${styles[`btn--${variant}`]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
