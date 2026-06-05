import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Register.module.css';

export default function Register() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState({ username: '', password: '', confirmPassword: '' });
  const [status, setStatus] = useState('idle');
  const [ripple, setRipple] = useState(null);

  const tiltRef = useRef(null);

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

  const handleRipple = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipple({ x, y, id: Date.now() });
    setTimeout(() => setRipple(null), 600);
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();

    const errors = { username: '', password: '', confirmPassword: '' };
    let hasError = false;

    if (!username.trim()) {
      errors.username = 'Username wajib diisi';
      hasError = true;
    }
    if (!password.trim()) {
      errors.password = 'Password wajib diisi';
      hasError = true;
    }
    if (!confirmPassword.trim()) {
      errors.confirmPassword = 'Konfirmasi password wajib diisi';
      hasError = true;
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Password tidak cocok';
      hasError = true;
    }

    if (username.trim() && !hasError) {
      const accounts = JSON.parse(localStorage.getItem('accounts') || '[]');
      const exists = accounts.some((acc) => acc.username === username);
      if (exists) {
        errors.username = 'Username sudah terdaftar';
        hasError = true;
      }
    }

    setError(errors);
    if (hasError) return;

    const accounts = JSON.parse(localStorage.getItem('accounts') || '[]');
    accounts.push({ username, password });
    localStorage.setItem('accounts', JSON.stringify(accounts));

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
            <h1 className={styles.title}>SIGN UP</h1>

            <form className={styles.form} onSubmit={handleRegister}>
              <div className={styles.inputGroup}>
                <input
                  id="reg-username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={styles.input}
                  placeholder=" "
                  autoComplete="off"
                />
                <label htmlFor="reg-username" className={styles.label}>
                  Username
                </label>
                {error.username && (
                  <span className={styles.error}>{error.username}</span>
                )}
              </div>

              <div className={styles.inputGroup}>
                <input
                  id="reg-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.input}
                  placeholder=" "
                />
                <label htmlFor="reg-password" className={styles.label}>
                  Password
                </label>
                {error.password && (
                  <span className={styles.error}>{error.password}</span>
                )}
              </div>

              <div className={styles.inputGroup}>
                <input
                  id="reg-confirm"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={styles.input}
                  placeholder=" "
                />
                <label htmlFor="reg-confirm" className={styles.label}>
                  Konfirmasi Password
                </label>
                {error.confirmPassword && (
                  <span className={styles.error}>{error.confirmPassword}</span>
                )}
              </div>

              <button
                type="submit"
                className={styles.registerBtn}
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
                {status === 'idle' && 'Daftar'}
                {ripple && (
                  <span
                    className={styles.ripple}
                    style={{ left: ripple.x, top: ripple.y }}
                  />
                )}
              </button>
            </form>

            <p className={styles.loginLink}>
              Sudah punya akun? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
