import { HiX, HiBadgeCheck, HiPhone } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Modal.module.css';

export default function Modal({ candidate, onClose }) {
  if (!candidate) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.overlay}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className={styles.modal}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={styles.close} onClick={onClose}>
            <HiX size={20} />
          </button>

          <div className={styles.header}>
            <div className={styles.imageWrap}>
              <img src={candidate.photo} alt={candidate.name} />
              <div className={`${styles.statusBadge} ${candidate.status === 'ready' ? styles.ready : styles.placed}`}>
                {candidate.status === 'ready' ? 'Ready' : 'Sudah Bekerja'}
              </div>
            </div>
            <div className={styles.headerInfo}>
              <h2 className={styles.name}>{candidate.name}</h2>
              <p className={styles.meta}>
                {candidate.age} tahun • {candidate.origin}
              </p>
              <p className={styles.bio}>{candidate.bio}</p>
              <div className={styles.headerBadges}>
                {candidate.verified && (
                  <span className={styles.badge}><HiBadgeCheck /> Terverifikasi</span>
                )}
                {candidate.hasTraining && (
                  <span className={styles.badge}><HiBadgeCheck /> Sudah Training</span>
                )}
                {candidate.hasExperience && (
                  <span className={styles.badge}><HiBadgeCheck /> Berpengalaman</span>
                )}
              </div>
            </div>
          </div>

          <div className={styles.body}>
            <div className={styles.section}>
              <h4 className={styles.sectionTitle}>Tentang Kandidat</h4>
              <p className={styles.text}>{candidate.fullBio}</p>
            </div>

            <div className={styles.grid}>
              <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Keahlian</h4>
                <div className={styles.tagList}>
                  {candidate.skills.map((skill) => (
                    <span key={skill} className={styles.tag}>{skill}</span>
                  ))}
                </div>
              </div>

              <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Bahasa</h4>
                <div className={styles.tagList}>
                  {candidate.languages.map((lang) => (
                    <span key={lang} className={styles.tag}>{lang}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h4 className={styles.sectionTitle}>Riwayat Pelatihan</h4>
              <ul className={styles.trainingList}>
                {candidate.training.map((t, i) => (
                  <li key={i} className={styles.trainingItem}>{t}</li>
                ))}
              </ul>
            </div>

            <a
              href={`https://wa.me/62${candidate.phone.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.waBtn}
            >
              <HiPhone size={18} /> Hubungi Admin via WhatsApp
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
