import { useEffect, useState } from 'react';
import styles from './Loader.module.css';

export default function Loader() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHidden(true), 1800);
    const t2 = setTimeout(() => setRemoved(true), 2600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (removed) return null;

  return (
    <div className={`${styles.loader} ${hidden ? styles.hide : ''}`}>
      <div className={styles.center}>
        <div className={styles.orbit} />
        <div className={`${styles.orbit} ${styles.orbit2}`} />
        <div className={styles.initials}>YNV</div>
      </div>
      <div className={styles.name}>YAS<span>WAN</span>TH</div>
      <div className={styles.barWrap}><div className={styles.bar} /></div>
    </div>
  );
}
