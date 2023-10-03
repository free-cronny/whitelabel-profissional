import { createRoot } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles.css';

import { Whitelabel } from './components/WhiteLabel/Whitelabel.jsx';
// import { Home } from './components/Home/Home.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Whitelabel />} />
        <Route path="/:profissionalname" element={<Whitelabel />} />
      </Routes>
    </Router>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<App />);