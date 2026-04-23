import styles from './Projects.module.css';
import { projects } from '../data/resume';

const animClasses = ['slide-left', 'fade-up', 'slide-right'];

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <div className="reveal fade-up">
          <div className="sec-label">04 / Portfolio</div>
          <h2 className="sec-title">FEATURED <span>PROJECTS</span></h2>
        </div>
        <div className={styles.grid}>
          {projects.map((p, i) => (
            <div className={`${styles.card} project-card reveal ${animClasses[i % 3]}`} key={p.title}>
              <span className={styles.num}>0{i+1}</span>
              <div className={styles.badge}>{p.badge}</div>
              <div className={styles.title}>{p.title}</div>
              <p className={styles.desc}>{p.desc}</p>
              <div className={styles.metrics}>
                {p.metrics.map(m => (
                  <div className={styles.metric} key={m.label}>
                    <span className={styles.metricVal}>{m.val}</span>
                    <span className={styles.metricLabel}>{m.label}</span>
                  </div>
                ))}
              </div>
              <div className={styles.tags}>
                {p.tags.map(t => <span className={styles.tag} key={t}>{t}</span>)}
              </div>
              <a href={p.link} className={styles.link}>{p.linkLabel} →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
