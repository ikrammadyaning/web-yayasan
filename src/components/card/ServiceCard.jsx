import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import styles from './ServiceCard.module.css';

export default function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={styles.card}
    >
      <div className={styles.iconWrap}>{service.icon}</div>
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.description}>{service.description}</p>
      <Link to={`/kandidat?kategori=${service.id}`} className={styles.link}>
        Lihat Kandidat <HiArrowRight size={16} />
      </Link>
    </motion.div>
  );
}
