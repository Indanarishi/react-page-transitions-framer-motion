import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// styles
import GlobalStyles from './globalStyles';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </>
  );
}

export default App;
