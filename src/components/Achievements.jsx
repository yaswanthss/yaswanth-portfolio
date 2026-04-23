import styles from './Achievements.module.css';
import { achievements } from '../data/resume';

const animClasses = ['slide-left', 'fade-up', 'fade-up', 'slide-right'];

export default function Achievements() {
  return (
    <section id="achievements" className={styles.section}>
      <div className="container">
        <div className="reveal fade-up">
          <div className="sec-label" style={{color:'rgba(255,255,255,0.35)'}}>
            <span style={{background:'var(--accent)',display:'block',width:'24px',height:'1px'}}/>
            05 / Recognition
          </div>
          <h2 className="sec-title" style={{color:'var(--white)'}}>ACHIEVE<span>MENTS</span></h2>
        </div>
        <div className={styles.grid}>
          {achievements.map((a, i) => (
            <div className={`${styles.card} ach-card reveal ${animClasses[i]}`} key={i}>
              <span className={styles.icon}>{a.icon}</span>
              <p className={styles.text}>
                {a.text.split(a.highlight).map((part, j, arr) => (
                  j < arr.length - 1
                    ? <span key={j}>{part}<span className={styles.highlight}>{a.highlight}</span></span>
                    : <span key={j}>{part}</span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
