import styles from './Nav.module.css';
import { profile } from '../data/resume';

const links = [
  { href: '#about',      label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills',     label: 'Skills' },
  { href: '#projects',   label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact',    label: 'Contact' },
  { href: '/Yaswanth Naidu Standard Resume.pdf', label: 'Resume', download: true },
];

export default function Nav() {
  const smooth = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>YN<span>V</span></div>
      <ul className={styles.links}>
        {links.map(l => (
          <li key={l.href}>
            {l.download ? (
              <a href={l.href} download>{l.label}</a>
            ) : (
              <a href={l.href} onClick={e => smooth(e, l.href)}>{l.label}</a>
            )}
          </li>
        ))}
      </ul>
      <a href={`mailto:${profile.email}`} className={styles.cta}>Hire Me</a>
    </nav>
  );
}
