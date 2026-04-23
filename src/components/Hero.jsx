import styles from './Hero.module.css';
import { profile, stats, achievements } from '../data/resume';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className="container">

        {/* Top bar */}
        <div className={`${styles.topBar} reveal fade-up`}>
          <span className={styles.topLabel}>
            <span className={styles.dot} />Available for opportunities
          </span>
          <span className={styles.topRight}>Hyderabad · India</span>
        </div>

        {/* Full name + headline + photo row */}
        <div className={`${styles.namePhotoRow} reveal fade-up`}>
          <div className={styles.introCol}>
            <span className={styles.fullName}>Yaswanth Naidu Vegi</span>
            <div className={styles.supText}>
              <span className={styles.roleTag}>LCT Technical Consultant</span>
              <span className={styles.yearTag}>March 2023 — Present</span>
            </div>
            <h1 className={styles.name}>
              <span className={styles.greeting}>Hello,</span>
              <span className={styles.hiLine}><span className={styles.nameHighlight}>Yaswanth</span> here! 👋</span>
            </h1>
          </div>
          <div className={styles.photoContainer}>
            <img src="/Yaswanth Naidu Standard Photo.png" alt="Yaswanth Naidu Vegi" className={styles.photo} />
          </div>
        </div>

        {/* Bottom split */}
        <div className={styles.bottomSplit}>
          {/* Left: description + buttons */}
          <div className={`${styles.descCol} reveal slide-left`}>
            <p className={styles.desc}>
              Technical Consultant at Blue Yonder — specializing in
              supply chain analytics, API/EDI integrations, and
              AI-powered workflow automation that turns manual effort
              into zero-touch pipelines.
            </p>
            <div className={styles.btns}>
              <a href="#projects" className="btn-primary"
                onClick={e=>{e.preventDefault();document.querySelector('#projects')?.scrollIntoView({behavior:'smooth'})}}>
                View Projects
              </a>
              <a href="#contact" className="btn-outline"
                onClick={e=>{e.preventDefault();document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'})}}>
                Contact Me
              </a>
            </div>

            {/* Achievement pills */}
            <div className={styles.achRow}>
              {achievements.slice(0,3).map((a,i) => (
                <div className={styles.achPill} key={i}>
                  <span>{a.icon}</span>
                  <span className={styles.achText}>{a.highlight.replace(/"/g,'')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: floating card */}
          <div className={`${styles.cardCol} reveal slide-right`}>
            <div className={styles.card}>
              {/* Avatar with ripple */}
              <div className={styles.avatarWrap}>
                <div className={styles.ripple} />
                <div className={styles.ripple} />
                <div className={styles.ripple} />
                <div className={styles.avatar}>{profile.initials}</div>
              </div>
              <div className={styles.cardName}>{profile.name}</div>
              <div className={styles.cardRole}>{profile.role}</div>
              <div className={styles.cardDivider} />
              <div className={styles.statsRow}>
                {stats.map(s => (
                  <div className={styles.statBlock} key={s.label}>
                    <span className={styles.statNum}>{s.num}</span>
                    <span className={styles.statLabel}>{s.label}</span>
                  </div>
                ))}
              </div>
              {/* Company tag */}
              <div className={styles.companyTag}>
                <span className={styles.companyDot} />
                Blue Yonder · Active
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
