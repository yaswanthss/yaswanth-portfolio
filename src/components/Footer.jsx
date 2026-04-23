import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        Crafted by <span>Yaswanth Naidu Vegi</span> · 2025
      </div>
      <div className={styles.right}>Blue Yonder · LCT Technical Consultant</div>
    </footer>
  );
}
