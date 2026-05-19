import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const links = [
  { label: 'Home',            href: '/' },
  { label: 'About',           href: '/about' },
  { label: 'Services',        href: '/services' },
  { label: 'Plans',           href: '/plans' },

  { label: 'Gallery',         href: '/gallery' },
  { label: 'Contact',         href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Ensure navbar is always solid on pages other than Home
  const isHomePage = location.pathname === '/';
  const navbarClass = `${styles.nav} ${(scrolled || !isHomePage) ? styles.scrolled : ''}`;

  return (
    <nav className={navbarClass}>
      <div className={styles.container}>
        {/* Logo */}
        <Link to="/" className={styles.logo} onClick={() => setOpen(false)}>
          <div className={styles.logoMark}>💪</div>
          <div className={styles.logoText}>
            THE FITNESS <span>EMPIRE</span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className={styles.links}>
          {links.map(l => (
            <li key={l.label}>
              <Link to={l.href} className={styles.navLink} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/plans" className={styles.joinBtn} onClick={() => setOpen(false)}>
              🔥 Join Now
            </Link>
          </li>
        </ul>

        {/* Mobile burger */}
        <button className={styles.burger} onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className={styles.drawer}>
          {links.map(l => (
            <Link key={l.label} to={l.href} className={styles.drawerLink} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link to="/plans" className="btn-primary"
             style={{ margin: '16px 24px', justifyContent: 'center' }}
             onClick={() => setOpen(false)}>
            🔥 Join Now
          </Link>
        </div>
      )}
    </nav>
  );
}
