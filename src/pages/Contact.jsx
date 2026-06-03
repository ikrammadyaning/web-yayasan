import { HiPhone, HiMail, HiLocationMarker, HiClock } from 'react-icons/hi';
import ScrollReveal from '../components/scrollReveal/ScrollReveal';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <ScrollReveal>
          <h1 className={styles.heroTitle}>Hubungi Kami</h1>
          <p className={styles.heroSub}>
            Konsultasi kebutuhan tenaga kerja Anda bersama tim kami
          </p>
        </ScrollReveal>
      </section>

      <section className={`section ${styles.contact}`}>
        <div className="container">
          <div className={styles.grid}>
            <ScrollReveal variant="fadeLeft">
              <div className={styles.info}>
                <h2 className={styles.infoTitle}>Informasi Kontak</h2>
                <p className={styles.infoDesc}>
                  Silakan hubungi kami melalui kontak di bawah atau datang langsung ke kantor kami.
                </p>

                <div className={styles.infoList}>
                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>
                      <HiLocationMarker size={20} />
                    </div>
                    <div>
                      <strong>Alamat</strong>
                      <span>Jatiasih, Bekasi Selatan, Jawa Barat</span>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>
                      <HiPhone size={20} />
                    </div>
                    <div>
                      <strong>Telepon / WhatsApp</strong>
                      <span>0812-3456-7890</span>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>
                      <HiMail size={20} />
                    </div>
                    <div>
                      <strong>Email</strong>
                      <span>info@karismamelati.com</span>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>
                      <HiClock size={20} />
                    </div>
                    <div>
                      <strong>Jam Operasional</strong>
                      <span>Senin - Sabtu, 08:00 - 17:00 WIB</span>
                    </div>
                  </div>
                </div>

                <div className={styles.map}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3173456721645!2d106.9526018!3d-6.3276817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6993b1b1b1b1b1%3A0x1b1b1b1b1b1b1b1b!2sJatiasih%2C%20Bekasi%20Selatan%2C%20Kota%20Bekasi%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1"
                    width="100%"
                    height="240"
                    style={{ border: 0, borderRadius: '12px' }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Lokasi Kantor"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight">
              <div className={styles.formWrap}>
                <h3 className={styles.formTitle}>Kirim Pesan</h3>
                <form className={styles.form}>
                  <div className={styles.formGroup}>
                    <label>Nama Lengkap</label>
                    <input type="text" placeholder="Masukkan nama Anda" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Email</label>
                    <input type="email" placeholder="Masukkan email Anda" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>No. WhatsApp</label>
                    <input type="text" placeholder="Masukkan nomor WhatsApp" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Keperluan</label>
                    <select>
                      <option value="">Pilih keperluan</option>
                      <option value="baby-sitter">Cari Baby Sitter</option>
                      <option value="art">Cari ART</option>
                      <option value="perawat-lansia">Cari Perawat Lansia</option>
                      <option value="daftar">Daftar Jadi Tenaga Kerja</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label>Pesan</label>
                    <textarea rows={4} placeholder="Tulis pesan Anda..." />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className={styles.waCta}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.waCtaContent}>
              <h2>Lebih Cepat via WhatsApp?</h2>
              <p>Hubungi admin kami langsung untuk respon yang lebih cepat</p>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
                style={{ marginTop: 8 }}
              >
                <HiPhone size={18} /> Hubungi via WhatsApp
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
