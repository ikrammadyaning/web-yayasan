import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Login.module.css';

const typingWords = [
  'Baby Sitter',
  'Lansia',
  'ART (Asisten Rumah Tangga)',
  'Melayani dengan sepenuh hati',
];

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ username: '', password: '' });
  const [status, setStatus] = useState('idle');
  const [typingText, setTypingText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [ripple, setRipple] = useState(null);

  const cardRef = useRef(null);
  const tiltRef = useRef(null);

  useEffect(() => {
    const currentWord = typingWords[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentWord.length) {
          setTypingText(currentWord.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (charIndex > 0) {
          setTypingText(currentWord.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % typingWords.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  useEffect(() => {
    const card = tiltRef.current;
    if (!card) return;

    let rafId = null;

    const handleMouseMove = (e) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        rafId = null;
      });
    };

    const handleMouseLeave = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = null;
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
  const accounts = localStorage.getItem('accounts');

  if (!accounts) {
    localStorage.setItem(
      'accounts',
      JSON.stringify([
        {
          username: 'mimih',
          password: 'mimih123'
        },
        {
          username: 'rudi',
          password: 'rudi123'
        },
        { username: 'staff',
          password: 'staff123'
        },
        { username: 'ikram',
          password: 'ikram123'
        }
      ])
    );
  }
}, []);

  const handleRipple = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipple({ x, y, id: Date.now() });
    setTimeout(() => setRipple(null), 600);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const errors = { username: '', password: '' };
    let hasError = false;

    if (!username.trim()) {
      errors.username = 'Username wajib diisi';
      hasError = true;
    }
    if (!password.trim()) {
      errors.password = 'Password wajib diisi';
      hasError = true;
    }

    setError(errors);
    if (hasError) return;

    const accounts = JSON.parse(localStorage.getItem('accounts') || '[]');
    const found = accounts.find(
      (acc) => acc.username === username && acc.password === password
    );

    if (!found) {
      setError({ username: '', password: 'Username atau password salah' });
      return;
    }

    setStatus('loading');

    setTimeout(() => {
      setStatus('success');

      setTimeout(() => {
        setStatus('exiting');

        setTimeout(() => {
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('username', username);
          navigate('/');
        }, 700);
      }, 900);
    }, 500);
  };

  return (
    <div className={`${styles.page} ${status === 'exiting' ? styles.blur : ''}`}>
      <div className={styles.aurora} />
      <div className={styles.grid} />
      <div className={styles.stars} />
      <div className={styles.floatingCircle} />
      <div className={styles.floatingCircle} />
      <div className={styles.floatingCircle} />

      <div className={`${styles.cardWrapper} ${status === 'exiting' ? styles.exit : ''}`}>
        <div className={styles.cardContainer}>
          <div className={styles.card} ref={tiltRef}>
            <div className={styles.typingContainer}>
              <span className={styles.typingText}>{typingText}</span>
              <span className={styles.cursor}>|</span>
            </div>

            <h1 className={styles.title}>SIGN IN</h1>

            <form className={styles.form} onSubmit={handleLogin}>
              <div className={styles.inputGroup}>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={styles.input}
                  placeholder=" "
                  autoComplete="off"
                />
                <label htmlFor="username" className={styles.label}>
                  Username
                </label>
                {error.username && (
                  <span className={styles.error}>{error.username}</span>
                )}
              </div>

              <div className={styles.inputGroup}>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.input}
                  placeholder=" "
                />
                <label htmlFor="password" className={styles.label}>
                  Password
                </label>
                {error.password && (
                  <span className={styles.error}>{error.password}</span>
                )}
              </div>

              <div className={styles.forgotPassword}>
                <a href="#forgot" onClick={(e) => e.preventDefault()}>
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className={styles.loginBtn}
                disabled={status !== 'idle'}
                onClick={handleRipple}
              >
                {status === 'loading' && <span className={styles.spinner} />}
                {status === 'success' && (
                  <span className={styles.successIcon}>
                    <svg viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                )}
                {status === 'idle' && 'Login'}
                {ripple && (
                  <span
                    className={styles.ripple}
                    style={{ left: ripple.x, top: ripple.y }}
                  />
                )}
              </button>
            </form>

            <p className={styles.registerLink}>
              Belum punya akun? <Link to="/register">Daftar</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
