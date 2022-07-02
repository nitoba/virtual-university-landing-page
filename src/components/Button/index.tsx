import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant?: "red" | "blue";
}

export function Button({ title, variant, ...props }: ButtonProps) {
  const buttonClasses = classNames(styles.container, {
    [styles.red]: variant === "red",
    [styles.blue]: variant === "blue",
  });
  return (
    <button {...props} className={buttonClasses}>
      {title}
    </button>
  );
}
