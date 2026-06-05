import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import AppRouter from './router/AppRouter';
import ScrollToTop from './components/ScrollToTop';
import './styles/variables.css';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </BrowserRouter>
  );
}
