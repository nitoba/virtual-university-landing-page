import styles from "./styles.module.scss";
import { Button } from "../Button";

type ActionButton = {
  title: string;
  variant: "red" | "blue";
  onClick: () => void;
};

export interface SectionInfoProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  image: string;
  contentDirection?: "left" | "right";
  actionButton?: ActionButton;
}

export function SectionInfo({
  title,
  description,
  image,
  actionButton = {
    title: "Learn More",
    variant: "blue",
    onClick: () => {},
  },
  contentDirection = "right",
  ...props
}: SectionInfoProps) {
  return (
    <section {...props} className={styles.container}>
      {contentDirection === "left" && (
        <img className={styles.image} src={image} />
      )}
      <div className={styles.textsContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <Button {...actionButton} />
      </div>
      {contentDirection === "right" && (
        <img className={styles.image} src={image} />
      )}
    </section>
  );
}
