import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import AppRouter from './router/AppRouter';
import './styles/variables.css';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </BrowserRouter>
  );
}
