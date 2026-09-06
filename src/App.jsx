import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import Search from './pages/Search';
import MyList from './pages/MyList';
import './styles/variables.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/my-list" element={<MyList />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;