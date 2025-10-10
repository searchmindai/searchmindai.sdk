/// <reference types="vite/client" />

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.css" {
  const css: string;
  export default css;
}

declare module "*.css?inline" {
  const css: string;
  export default css;
}

declare module "classnames" {
  type Value = string | number | boolean | undefined | null;
  type Mapping = Record<string, any>;
  interface ArgumentArray extends Array<Argument> {}
  type Argument = Value | Mapping | ArgumentArray;

  interface ClassNamesExport {
    (...args: ArgumentArray): string;
    default: ClassNamesExport;
  }

  const classNames: ClassNamesExport;
  export = classNames;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }

  interface ButtonProps {
    children: JSX.Element | string;
    onClick?: () => void;
    variant?: "primary" | "secondary";
  }
}

export {};
