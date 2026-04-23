import { useEffect, useRef } from 'react';
import styles from './Skills.module.css';
import { skills } from '../data/resume';

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.querySelectorAll('[data-pct]').forEach(bar => {
            bar.style.width = bar.dataset.pct + '%';
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const half = Math.ceil(skills.length / 2);

  return (
    <section id="skills" className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className="reveal fade-up">
          <div className="sec-label">03 / Capabilities</div>
          <h2 className="sec-title">TECHNICAL <span>SKILLS</span></h2>
        </div>
        <div className={styles.grid}>
          {[skills.slice(0, half), skills.slice(half)].map((col, ci) => (
            <div key={ci}>
              {col.map((s, i) => (
                <div className={`${styles.item} reveal fade-up`} data-delay={i * 80} key={s.name}>
                  <div className={styles.header}>
                    <span className={styles.name}>{s.name}</span>
                    <span className={styles.pct}>{s.pct}%</span>
                  </div>
                  <div className={styles.barBg}>
                    <div
                      className={styles.bar}
                      data-pct={s.pct}
                      style={{ background: s.pct >= 90 ? 'var(--ink)' : s.pct >= 85 ? 'var(--accent)' : 'rgba(13,13,13,0.4)' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
