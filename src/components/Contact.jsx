import styles from './Contact.module.css';
import { profile, languages } from '../data/resume';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={`${styles.rippleWrap} reveal fade-up`}>
          <div className={styles.ring} />
          <div className={styles.ring} />
          <div className={styles.ring} />
          <div className={styles.avatar}>{profile.initials}</div>
        </div>

        <div className="reveal fade-up">
          <div className={`sec-label ${styles.centerLabel}`}>07 / Contact</div>
          <h2 className={styles.title}>LET&apos;S <span>CONNECT</span></h2>
          <p className={styles.sub}>
            Open to exciting opportunities in supply chain tech, automation, and
            AI-powered workflows. Let&apos;s build something remarkable together.
          </p>
        </div>

        <div className={`${styles.links} reveal fade-up`}>
          <a href={`mailto:${profile.email}`} className="contact-link"><span>✉</span> {profile.email}</a>
          <a href={`tel:${profile.phone}`} className="contact-link"><span>📞</span> {profile.phone}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-link"><span>💼</span> LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="contact-link"><span>🐙</span> GitHub</a>
        </div>

        <div className={`${styles.langRow} reveal fade-up`}>
          {languages.map(l => <span className={styles.langBadge} key={l}>{l}</span>)}
        </div>
      </div>
    </section>
  );
}
