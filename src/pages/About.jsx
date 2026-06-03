import ScrollReveal from '../components/scrollReveal/ScrollReveal';
import { services } from '../data/candidates';
import { HiBadgeCheck } from 'react-icons/hi';
import styles from './About.module.css';

const values = [
  { icon: '🤝', label: 'Kepercayaan', desc: 'Membangun hubungan berdasarkan kepercayaan dan integritas' },
  { icon: '❤️', label: 'Kepedulian', desc: 'Peduli terhadap kesejahteraan tenaga kerja dan keluarga' },
  { icon: '🌱', label: 'Tanggung Jawab', desc: 'Bertanggung jawab atas setiap tenaga kerja yang disalurkan' },
  { icon: '✨', label: 'Profesionalisme', desc: 'Menjaga standar profesional dalam setiap pelayanan' },
];

const legalItems = [
  'Akta Pendirian Yayasan No. 123/BKS/VII/2007',
  'Izin DisNaKer Kota Bekasi No. 560/1234/DisNaKer',
  'Terdaftar di Kementerian Hukum dan HAM RI',
  'NPWP Yayasan: XX.XXX.XXX.X-XXX.XXX',
];

export default function About() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <ScrollReveal>
          <h1 className={styles.heroTitle}>Tentang Kami</h1>
          <p className={styles.heroSub}>
            Mitra terpercaya keluarga Indonesia dalam penyaluran tenaga kerja
            profesional sejak 2007
          </p>
        </ScrollReveal>
      </section>

      {/* Sejarah */}
      <section className={`section ${styles.sejarah}`}>
        <div className="container">
          <div className={styles.sejarahGrid}>
            <ScrollReveal variant="fadeLeft">
              <div className={styles.sejarahContent}>
                <span className={styles.tag}>Sejarah Singkat</span>
                <h2 className={styles.sejarahTitle}>Perjalanan Kami</h2>
                <p className={styles.sejarahText}>
                  Didirikan pada tahun 2007, PT. Karisma Melati Sedayu Group lahir
                  dari komitmen untuk menghadirkan solusi profesional di bidang
                  penyaluran tenaga kerja berkualitas. Berawal dari sebuah yayasan
                  kecil di daerah Jatiasih, Bekasi Selatan, kami tumbuh menjadi
                  lembaga terpercaya yang telah menyalurkan ratusan tenaga kerja ke
                  berbagai daerah di Indonesia — bahkan hingga ke luar negeri.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fadeRight">
              <div className={styles.sejarahImage}>
                <div className={styles.sejarahDeco} />
                <div className={styles.sejarahDeco2} />
                <span>2007 — 2026</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className={`section ${styles.visiMisi}`}>
        <div className="container">
          <div className={styles.vmGrid}>
            <ScrollReveal variant="fadeUp">
              <div className={styles.vmCard}>
                <span className={styles.vmIcon}>🎯</span>
                <h3 className={styles.vmTitle}>Visi</h3>
                <p className={styles.vmText}>
                  "Menjadi lembaga penyalur tenaga kerja yang profesional,
                  terpercaya, dan unggul dalam membangun sumber daya manusia
                  berintegritas tinggi."
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.15}>
              <div className={styles.vmCard}>
                <span className={styles.vmIcon}>📋</span>
                <h3 className={styles.vmTitle}>Misi</h3>
                <ul className={styles.misiList}>
                  <li>Memberikan pelatihan dan pembinaan menyeluruh kepada calon tenaga kerja</li>
                  <li>Menyediakan tenaga kerja yang kompeten, jujur, serta bertanggung jawab</li>
                  <li>Membangun hubungan kemitraan yang harmonis</li>
                  <li>Meningkatkan kesejahteraan tenaga kerja melalui peluang kerja yang layak</li>
                  <li>Mengembangkan sistem rekrutmen modern berbasis teknologi</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Layanan */}
      <section className={`section ${styles.layanan}`}>
        <div className="container">
          <ScrollReveal>
            <div className="section-title">
              <h2>Bidang Layanan</h2>
              <p>Kami menyediakan tiga bidang layanan utama yang profesional dan terpercaya</p>
            </div>
          </ScrollReveal>
          <div className={styles.layananGrid}>
            {services.map((svc, i) => (
              <ScrollReveal key={svc.id} delay={i * 0.1}>
                <div className={styles.layananCard}>
                  <span className={styles.layananIcon}>{svc.icon}</span>
                  <h4 className={styles.layananTitle}>{svc.title}</h4>
                  <p className={styles.layananDesc}>{svc.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Nilai */}
      <section className={`section ${styles.nilai}`}>
        <div className="container">
          <ScrollReveal>
            <div className="section-title">
              <h2>Nilai Utama Kami</h2>
              <p>Principle yang menjadi fondasi setiap langkah kami</p>
            </div>
          </ScrollReveal>
          <div className={styles.nilaiGrid}>
            {values.map((v, i) => (
              <ScrollReveal key={v.label} delay={i * 0.1}>
                <div className={styles.nilaiCard}>
                  <span className={styles.nilaiIcon}>{v.icon}</span>
                  <h4 className={styles.nilaiLabel}>{v.label}</h4>
                  <p className={styles.nilaiDesc}>{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Legalitas */}
      <section className={`section ${styles.legal}`}>
        <div className="container">
          <ScrollReveal>
            <div className="section-title">
              <h2>Legalitas & Perizinan</h2>
              <p>Terdaftar dan berizin resmi sebagai lembaga penyalur tenaga kerja</p>
            </div>
          </ScrollReveal>
          <div className={styles.legalGrid}>
            {legalItems.map((item) => (
              <ScrollReveal key={item}>
                <div className={styles.legalItem}>
                  <HiBadgeCheck size={20} color="#2e7d32" />
                  <span>{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
