import styles from "./Button.module.css";

export const Button = ({ children, onClick, variant = "primary" }: ButtonProps) => {
  return (
    <button className={`${styles.btn} ${styles[`btn--${variant}`]}`} onClick={onClick}>
      {children}
    </button>
  );
};
