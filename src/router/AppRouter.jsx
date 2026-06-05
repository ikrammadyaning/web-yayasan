import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';

const Home = lazy(() => import('../pages/Home'));
const Candidates = lazy(() => import('../pages/Candidates'));
const About = lazy(() => import('../pages/About'));
const Career = lazy(() => import('../pages/Career'));
const Contact = lazy(() => import('../pages/Contact'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));

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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/kandidat" element={<ProtectedRoute><Candidates /></ProtectedRoute>} />
        <Route path="/tentang" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path="/karir" element={<ProtectedRoute><Career /></ProtectedRoute>} />
        <Route path="/kontak" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
      </Routes>
    </Suspense>
  );
}
