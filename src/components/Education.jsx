import styles from './Education.module.css';
import { education } from '../data/resume';

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className="container">
        <div className="reveal fade-up">
          <div className="sec-label">06 / Education</div>
          <h2 className="sec-title">ACADEMIC <span>BACKGROUND</span></h2>
        </div>
        {education.map((e, i) => (
          <div className={`${styles.card} reveal fade-up`} key={i}>
            <div className={styles.iconWrap}>{e.icon}</div>
            <div>
              <div className={styles.degree}>{e.degree}</div>
              <div className={styles.school}>{e.school}</div>
              <div className={styles.location}>📍 {e.location}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
