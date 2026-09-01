import { Icon } from "../ui/Icon";
import styles from "./InsightPdf.module.css";

export function InsightPdf({ src, title }) {
  return (
    <div className={styles.wrap}>
      <iframe className={styles.frame} src={src} title={title} loading="lazy" />
      <a className={styles.fallback} href={src} target="_blank" rel="noreferrer noopener">
        <Icon name="arrowUpRight" size={16} />
        Open the PDF in a new tab
      </a>
    </div>
  );
}
