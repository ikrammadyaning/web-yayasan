import Hero from '../components/hero/Hero';
import ScrollReveal from '../components/scrollReveal/ScrollReveal';
import ServiceCard from '../components/card/ServiceCard';
import Stats from '../components/stats/Stats';
import { services, testimonials } from '../data/candidates';
import { HiStar, HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
  const username = localStorage.getItem('username') || 'User';

  return (
    <>
      <div className={styles.welcomeBar}>
        Welcome, <strong>{username}</strong>
      </div>
      <Hero />

      {/* --- Layanan --- */}
      <section className={`section ${styles.services}`}>
        <div className="container">
          <ScrollReveal>
            <div className="section-title">
              <h2>Layanan Kami</h2>
              <p>Tenaga kerja profesional siap membantu kebutuhan keluarga Anda</p>
            </div>
          </ScrollReveal>
          <div className={styles.serviceGrid}>
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* --- Stats --- */}
      <Stats />

      {/* --- Kenapa --- */}
      <section className={`section ${styles.why}`}>
        <div className="container">
          <div className={styles.whyGrid}>
            <ScrollReveal variant="fadeLeft">
              <div className={styles.whyContent}>
                <span className={styles.whyTag}>Mengapa Memilih Kami</span>
                <h2 className={styles.whyTitle}>
                  Tenaga Kerja Terpercaya & Terlatih
                </h2>
                <p className={styles.whyDesc}>
                  Setiap tenaga kerja kami telah melalui proses seleksi ketat,
                  pelatihan profesional, dan verifikasi latar belakang. Kami
                  berkomitmen memberikan yang terbaik untuk keluarga Indonesia.
                </p>
                <div className={styles.whyList}>
                  {[
                    'Seleksi ketat & verifikasi latar belakang',
                    'Pelatihan profesional bersertifikat',
                    'Garansi pergantian tenaga kerja',
                    'Pendampingan & monitoring berkala',
                  ].map((item) => (
                    <div key={item} className={styles.whyItem}>
                      <span className={styles.whyCheck}>✓</span>
                      {item}
                    </div>
                  ))}
                </div>
                <Link to="/tentang" className="btn btn-primary">
                  Pelajari Lebih Lanjut <HiArrowRight size={18} />
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fadeRight">
              <div className={styles.whyImage}>
                <div className={styles.whyImagePlaceholder}>
                  <div className={styles.whyDeco} />
                  <div className={styles.whyDeco2} />
                  <span>Keluarga Harmonis</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* --- Testimoni --- */}
      <section className={`section ${styles.testimonials}`}>
        <div className="container">
          <ScrollReveal>
            <div className="section-title">
              <h2>Apa Kata Mereka</h2>
              <p>Testimoni dari keluarga yang telah menggunakan jasa kami</p>
            </div>
          </ScrollReveal>
          <div className={styles.testiGrid}>
            {testimonials.map((t) => (
              <ScrollReveal key={t.id}>
                <div className={styles.testiCard}>
                  <div className={styles.testiStars}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <HiStar key={i} size={16} color="#c9a84c" />
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
    </>
  );
}
