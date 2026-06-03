import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Candidates = lazy(() => import('../pages/Candidates'));
const About = lazy(() => import('../pages/About'));
const Career = lazy(() => import('../pages/Career'));
const Contact = lazy(() => import('../pages/Contact'));

function Loading() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#faf8f5',
      color: '#1a5c3a',
      fontSize: '1.1rem',
      fontWeight: 600,
    }}>
      Loading...
    </div>
  );
}

export default function AppRouter() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kandidat" element={<Candidates />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/karir" element={<Career />} />
        <Route path="/kontak" element={<Contact />} />
      </Routes>
    </Suspense>
  );
}
