// HowDoCard.jsx
import styles from "./how_do.module.css";

export default function HowDoCard({ icon: Icon, title, description }) {
  return (
    <div className={styles.howCard}>
      <Icon className={styles.icon} />
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
}
