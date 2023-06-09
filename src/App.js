import './App.sass';
import './components/Header.sass';
import './components/Footer.sass';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Faq from './components/Faq';
import { Routes, Route } from 'react-router-dom';

export default function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route exact={true} path="/faq" element={<Faq />} />
      </Routes>
      <Footer />
    </div>
  );
}