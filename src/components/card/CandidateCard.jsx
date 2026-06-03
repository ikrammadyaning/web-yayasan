import { motion } from 'framer-motion';
import { HiBadgeCheck, HiPhone, HiEye } from 'react-icons/hi';
import styles from './CandidateCard.module.css';

export default function CandidateCard({ candidate, index, onDetail }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.08 }}
      className={styles.card}
    >
      <div className={styles.imageWrap}>
        <img src={candidate.photo} alt={candidate.name} className={styles.image} />
        <div className={styles.badges}>
          {candidate.verified && <span className={styles.badgeVerified}>Terverifikasi</span>}
          {candidate.hasTraining && <span className={styles.badgeTraining}>Sudah Training</span>}
          {candidate.hasExperience && <span className={styles.badgeExp}>Berpengalaman</span>}
        </div>
        <div className={`${styles.status} ${candidate.status === 'ready' ? styles.ready : styles.placed}`}>
          {candidate.status === 'ready' ? 'Ready' : 'Sudah Bekerja'}
        </div>
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{candidate.name}</h3>
        <div className={styles.info}>
          <span>{candidate.age} tahun</span>
          <span className={styles.dot}>•</span>
          <span>{candidate.origin}</span>
        </div>
        <p className={styles.bio}>{candidate.bio}</p>
        <div className={styles.skills}>
          {candidate.skills.slice(0, 3).map((skill) => (
            <span key={skill} className={styles.skill}>{skill}</span>
          ))}
        </div>

        <div className={styles.actions}>
          <button className={styles.btnDetail} onClick={() => onDetail(candidate)}>
            <HiEye size={16} /> Detail
          </button>
          <a href={`https://wa.me/62${candidate.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className={styles.btnWA}>
            <HiPhone size={16} /> Hubungi Admin
          </a>
        </div>
      </div>
    </motion.div>
  );
}
