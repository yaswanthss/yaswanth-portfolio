import styles from './Experience.module.css';
import { experience } from '../data/resume';

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <div className="reveal fade-up">
          <div className="sec-label">02 / Career</div>
          <h2 className="sec-title">WORK <span>EXPERIENCE</span></h2>
        </div>
        <div className={styles.timeline}>
          {experience.map((job, i) => (
            <div className={`${styles.item} reveal fade-up`} key={i}>
              <div className={styles.left}>
                <div className={styles.company}>{job.company}</div>
                <div className={styles.role}>{job.role}</div>
                <div className={styles.period}>
                  {job.current && <span className={styles.activeDot} />}
                  {job.period}
                </div>
              </div>
              <ul className={styles.bullets}>
                {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
