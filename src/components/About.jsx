import styles from './About.module.css';
import { profile, aboutStats } from '../data/resume';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <div className="reveal fade-up">
          <div className="sec-label">01 / Profile</div>
          <h2 className="sec-title">ABOUT <span>ME</span></h2>
        </div>
        <div className={styles.grid}>
          <div className="reveal slide-left">
            <p className={styles.para}>
              Technical Consultant with 3+ years of experience in supply chain analytics,
              API/EDI integrations, and large-scale workflow automation on Blue Yonder LCT.
              Proven track record of reducing manual effort and improving data accuracy.
            </p>
            <p className={styles.para}>
              I architect intelligent automation systems that eliminate redundant workflows—turning
              4-hour daily reporting cycles into zero-touch pipelines, and enabling real-time
              visibility across logistics networks.
            </p>
            <div className={styles.links}>
              <a href={`mailto:${profile.email}`} className="contact-link"><span>✉</span> {profile.email}</a>
              <a href={`tel:${profile.phone}`} className="contact-link"><span>📞</span> {profile.phone}</a>
            </div>
          </div>
          <div className="reveal slide-right">
            <div className={styles.statsGrid}>
              {aboutStats.map(s => (
                <div className="stat-item" key={s.label} style={s.amber ? {borderColor:'var(--accent)'} : {}}>
                  <span className="stat-num" style={s.amber ? {color:'var(--accent)'} : {}}>{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
            <div className={styles.highlight}>
              <div className={styles.highlightLabel}>Key Deliverables</div>
              <div className={styles.tagRow}>
                <span className={styles.tag}>Order Collaboration (P2I)</span>
                <span className={styles.tag}>Invoice Workflows</span>
                <span className={styles.tag}>Change Requests</span>
                <span className={styles.tag}>State-Machine Logic</span>
                <span className={styles.tag}>YAML Optimization</span>
                <span className={styles.tagAccent}>~25% Failure Reduction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
