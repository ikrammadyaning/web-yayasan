import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import styles from './Navbar.module.css';

const menuItems = [
  { path: '/', label: 'Beranda' },
  { path: '/kandidat', label: 'Kandidat' },
  { path: '/tentang', label: 'Tentang Kami' },
  { path: '/karir', label: 'Karir' },
  { path: '/kontak', label: 'Kontak' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const username = localStorage.getItem('username') || '';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    navigate('/login');
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcon}>K</span>
          <div className={styles.logoText}>
            <span className={styles.logoTitle}>Karisma Melati</span>
            <span className={styles.logoSub}>Sedayu Group</span>
          </div>
        </Link>

        <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.menuItem} ${
                location.pathname === item.path ? styles.active : ''
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <span className={styles.welcome}>
            Welcome, {username}
          </span>
          <button className={styles.logoutBtn} onClick={handleLogout}>
            Logout
          </button>
          <Link to="/kontak" className={styles.menuCta}>
            Hubungi Kami
          </Link>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        {menuOpen && (
          <div className={styles.overlay} onClick={() => setMenuOpen(false)} />
        )}
      </div>
    </nav>
  );
}
