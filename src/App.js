import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
//Components
import Header from './components/Header';
import Navbar from './components/Navbar';
//Pages
import About from './pages/About';
import Home from './pages/Home';
import Business from './pages/Business';
import Entertainment from './pages/Entertainment';
import General from './pages/General';
import Healty from './pages/Healty';
import Science from './pages/Science';
import Sports from './pages/Sports';
import Tecnology from './pages/Tecnology';
import { useTheme } from './context/ThemeContext';


function App() {
  const { theme, setTheme } = useTheme()
  return (
    <div className={theme}>
      <BrowserRouter>
        <Navbar />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/business' element={<Business />} />
          <Route path='/entertainment' element={<Entertainment />} />
          <Route path='/general' element={<General />} />
          <Route path='/healty' element={<Healty />} />
          <Route path='/science' element={<Science />} />
          <Route path='/sports' element={<Sports />} />
          <Route path='/tecnology' element={<Tecnology />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
