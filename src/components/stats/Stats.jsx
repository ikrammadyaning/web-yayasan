import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Stats.module.css';

function AnimatedNumber({ value, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [hasAnimated, value]);

  return (
    <span ref={ref} className={styles.number}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const statsData = [
  { value: 1500, label: 'Total SDM Bergabung', suffix: '+' },
  { value: 320, label: 'Tenaga Kerja Aktif', suffix: '+' },
  { value: 850, label: 'Total Majikan', suffix: '+' },
  { value: 2800, label: 'Total Penyaluran', suffix: '+' },
  { value: 19, label: 'Tahun Pengalaman', suffix: '' },
];

export default function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {statsData.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={styles.item}
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <span className={styles.label}>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
