import { BrowserRouter, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import AppRouter from './router/AppRouter';
import ScrollToTop from './components/ScrollToTop';
import './styles/variables.css';

function AppContent() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      <ScrollToTop />
      {!isAuthPage && <Navbar />}
      <main>
        <AppRouter />
      </main>
      {!isAuthPage && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
