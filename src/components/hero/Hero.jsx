import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.tag}
        >
          LPK Karisma Melati Sedayu Group
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className={styles.title}
        >
          Yayasan Penyalur{' '}
          <span className={styles.highlight}>Baby Sitter, ART,</span> dan{' '}
          <span className={styles.highlight}>Perawat Lansia</span> Profesional
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.subtitle}
        >
          Melayani keluarga Indonesia sejak 2007 dengan tenaga kerja terlatih,
          terpercaya, dan berpengalaman.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={styles.cta}
        >
          <Link to="/kandidat" className="btn btn-gold">
            Lihat Kandidat
            <HiArrowRight size={18} />
          </Link>
          <Link to="/kontak" className="btn btn-outline" style={{ borderColor: '#fff', color: '#fff' }}>
            Hubungi Kami
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={styles.stats}
        >
          <div className={styles.statItem}>
            <span className={styles.statNumber}>1000+</span>
            <span className={styles.statLabel}>Tenaga Kerja</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNumber}>500+</span>
            <span className={styles.statLabel}>Keluarga Dilayani</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNumber}>2007</span>
            <span className={styles.statLabel}>Berdiri Sejak</span>
          </div>
        </motion.div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollDot} />
      </div>
    </section>
  );
}
