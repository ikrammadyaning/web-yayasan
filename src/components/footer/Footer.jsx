import { Link } from 'react-router-dom';
import { HiPhone, HiMail, HiLocationMarker, HiClock } from 'react-icons/hi';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>K</span>
              <div>
                <div className={styles.logoTitle}>Karisma Melati</div>
                <div className={styles.logoSub}>Sedayu Group</div>
              </div>
            </div>
            <p className={styles.desc}>
              Yayasan penyalur Baby Sitter, ART, dan Perawat Lansia profesional.
              Melayani keluarga Indonesia sejak 2007.
            </p>
            <div className={styles.social}>
              <a href="#" className={styles.socialLink}><FaInstagram size={18} /></a>
              <a href="#" className={styles.socialLink}><FaFacebook size={18} /></a>
              <a href="#" className={styles.socialLink}><FaYoutube size={18} /></a>
            </div>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <Link to="/" className={styles.link}>Beranda</Link>
            <Link to="/kandidat" className={styles.link}>Kandidat</Link>
            <Link to="/tentang" className={styles.link}>Tentang Kami</Link>
            <Link to="/karir" className={styles.link}>Karir</Link>
            <Link to="/kontak" className={styles.link}>Kontak</Link>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Layanan</h4>
            <Link to="/kandidat?kategori=baby-sitter" className={styles.link}>Baby Sitter</Link>
            <Link to="/kandidat?kategori=art" className={styles.link}>Asisten Rumah Tangga</Link>
            <Link to="/kandidat?kategori=perawat-lansia" className={styles.link}>Perawat Lansia</Link>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Kontak</h4>
            <div className={styles.contactItem}>
              <HiLocationMarker size={16} />
              <span>Jatiasih, Bekasi Selatan, Jawa Barat</span>
            </div>
            <div className={styles.contactItem}>
              <HiPhone size={16} />
              <span>0813-1565-3636</span>
            </div>
            <div className={styles.contactItem}>
              <HiMail size={16} />
              <span>info@karismamelati.com</span>
            </div>
            <div className={styles.contactItem}>
              <HiClock size={16} />
              <span>Senin - Sabtu, 08:00 - 17:00</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} LPK Karisma Melati Sedayu Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
