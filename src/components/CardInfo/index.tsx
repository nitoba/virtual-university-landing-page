import classNames from "classnames";
import styles from "./styles.module.scss";

export interface CardInfoProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon: React.ReactNode;
  variant: "red" | "blue";
}

export function CardInfo({
  title,
  description,
  icon,
  variant,
  ...props
}: CardInfoProps) {
  const cardInfoClasses = classNames(styles.container, {
    [styles.red]: variant === "red",
    [styles.blue]: variant === "blue",
  });
  return (
    <div className={cardInfoClasses} {...props}>
      <div className={styles.content}>
        <div className={styles.iconContainer}>{icon}</div>
        <div className={styles.contentInfo}>
          <strong className={styles.title}>{title}</strong>
          <strong className={styles.description}>{description}</strong>
        </div>
      </div>
    </div>
  );
}
