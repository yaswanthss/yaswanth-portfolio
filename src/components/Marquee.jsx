import { useEffect, useRef } from 'react';
import styles from './Marquee.module.css';
import { techStack } from '../data/resume';

export default function Marquee() {
  const double = [...techStack, ...techStack];
  return (
    <div className={styles.section}>
      <div className={styles.label}>Tech Stack</div>
      <div className={styles.overflow}>
        <div className={styles.track}>
          {double.map((t, i) => (
            <div className={styles.item} key={i}>
              <span className={styles.dot} />
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
