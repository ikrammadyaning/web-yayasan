import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { HiSearch } from 'react-icons/hi';
import { motion } from 'framer-motion';
import CandidateCard from '../components/card/CandidateCard';
import Modal from '../components/modal/Modal';
import { candidates, categories } from '../data/candidates';
import ScrollReveal from '../components/scrollReveal/ScrollReveal';
import styles from './Candidates.module.css';

export default function Candidates() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState(searchParams.get('kategori') || 'all');
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  useEffect(() => {
    const kategori = searchParams.get('kategori');
    if (kategori) setActiveCategory(kategori);
  }, [searchParams]);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    if (catId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ kategori: catId });
    }
  };

  const filtered = useMemo(() => {
    return candidates.filter((c) => {
      const matchCategory = activeCategory === 'all' || c.category === activeCategory;
      const matchSearch =
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.origin.toLowerCase().includes(search.toLowerCase()) ||
        c.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroOverlay} />
        <ScrollReveal>
          <h1 className={styles.heroTitle}>Kandidat Siap Kerja</h1>
          <p className={styles.heroSub}>
            Temukan tenaga kerja profesional yang siap membantu keluarga Anda
          </p>
        </ScrollReveal>
      </div>

      <div className="container" style={{ paddingTop: 0 }}>
        <div className={styles.controls}>
          <div className={styles.searchWrap}>
            <HiSearch size={20} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Cari kandidat, asal, atau keahlian..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={styles.searchInput}
            />
          </div>
          <div className={styles.filters}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.filterBtn} ${
                  activeCategory === cat.id ? styles.filterActive : ''
                }`}
                onClick={() => handleCategoryChange(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.resultInfo}>
          Menampilkan <strong>{filtered.length}</strong> kandidat
        </div>

        {filtered.length === 0 ? (
          <div className={styles.empty}>
            <p>Tidak ada kandidat yang ditemukan</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {filtered.map((candidate, i) => (
              <CandidateCard
                key={candidate.id}
                candidate={candidate}
                index={i}
                onDetail={setSelectedCandidate}
              />
            ))}
          </div>
        )}
      </div>

      <Modal
        candidate={selectedCandidate}
        onClose={() => setSelectedCandidate(null)}
      />
    </div>
  );
}
