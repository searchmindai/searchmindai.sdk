declare global {
  interface ButtonProps {
    children: JSX.Element | string;
    onClick?: () => void;
    variant?: "primary" | "secondary";
  }
}

export {};
