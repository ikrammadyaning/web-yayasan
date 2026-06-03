import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight, HiStar } from 'react-icons/hi';
import ScrollReveal from '../components/scrollReveal/ScrollReveal';
import Stats from '../components/stats/Stats';
import { testimonials, gallery, timeline } from '../data/candidates';
import styles from './Career.module.css';

function AnimatedCounter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const increment = end / steps;
    let cur = 0;
    const timer = setInterval(() => {
      cur += increment;
      if (cur >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(cur));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, end, duration]);

  return <span ref={ref} className={styles.statNumber}>{count.toLocaleString()}</span>;
}

export default function Career() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <ScrollReveal>
          <h1 className={styles.heroTitle}>Pertumbuhan & Kepercayaan</h1>
          <p className={styles.heroSub}>
            Perjalanan kami dalam membangun kepercayaan dan memberikan dampak positif
          </p>
        </ScrollReveal>
      </section>

      {/* Big Stats */}
      <section className={styles.bigStats}>
        <div className="container">
          <div className={styles.bigStatsGrid}>
            {[
              { end: 1000, label: 'Total SDM', suffix: '+' },
              { end: 100, label: 'Tenaga Aktif', suffix: '+' },
              { end: 900, label: 'Total Majikan', suffix: '+' },
              { end: 500, label: 'Penyaluran Kerja', suffix: '+' },
            ].map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.1}>
                <div className={styles.bigStatCard}>
                  <AnimatedCounter end={s.end} />
                  <span className={styles.bigStatSuffix}>{s.suffix}</span>
                  <span className={styles.bigStatLabel}>{s.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={`section ${styles.timelineSec}`}>
        <div className="container">
          <ScrollReveal>
            <div className="section-title">
              <h2>Perjalanan Kami</h2>
              <p>Setiap langkah adalah bukti komitmen kami</p>
            </div>
          </ScrollReveal>
          <div className={styles.timeline}>
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} variant="fadeUp" delay={i * 0.08}>
                <div className={`${styles.timelineItem} ${i % 2 === 0 ? styles.timelineLeft : styles.timelineRight}`}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineCard}>
                    <span className={styles.timelineYear}>{item.year}</span>
                    <h4 className={styles.timelineTitle}>{item.title}</h4>
                    <p className={styles.timelineDesc}>{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Galeri */}
      <section className={`section ${styles.gallerySec}`}>
        <div className="container">
          <ScrollReveal>
            <div className="section-title">
              <h2>Galeri Pelatihan</h2>
              <p>Dokumentasi kegiatan pelatihan dan pembinaan tenaga kerja</p>
            </div>
          </ScrollReveal>
          <div className={styles.galleryGrid}>
            {gallery.map((img, i) => (
              <ScrollReveal key={i} variant="scale" delay={i * 0.06}>
                <div className={styles.galleryItem}>
                  <img src={img} alt={`Training ${i + 1}`} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className={`section ${styles.testiSec}`}>
        <div className="container">
          <ScrollReveal>
            <div className="section-title">
              <h2>Testimoni Customer</h2>
              <p>Apa kata mereka tentang layanan kami</p>
            </div>
          </ScrollReveal>
          <div className={styles.testiGrid}>
            {testimonials.map((t) => (
              <ScrollReveal key={t.id}>
                <div className={styles.testiCard}>
                  <div className={styles.testiStars}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <HiStar key={i} color="#c9a84c" size={16} />
                    ))}
                  </div>
                  <p className={styles.testiText}>{t.text}</p>
                  <div className={styles.testiAuthor}>
                    <img src={t.photo} alt={t.name} />
                    <div>
                      <strong>{t.name}</strong>
                      <span>{t.role}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bergabung */}
      <section className={styles.ctaSec}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Bergabung Menjadi Tenaga Kerja Kami</h2>
              <p className={styles.ctaDesc}>
                Dapatkan pelatihan profesional, pembinaan, dan kesempatan kerja yang layak bersama LPK Karisma Melati Sedayu Group.
              </p>
              <Link to="/kontak" className="btn btn-gold">
                Daftar Sekarang <HiArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
