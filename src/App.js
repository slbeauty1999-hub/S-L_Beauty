import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
    </Router>
  );
}

export default App;
