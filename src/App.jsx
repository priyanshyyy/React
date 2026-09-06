import { useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import Search from './pages/Search';
import './styles/variables.css';
import './App.css';

function App() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <Navbar onSearchClick={() => setShowSearch(!showSearch)} />
      <div className="main-content">
        {showSearch ? <Search /> : <Home />}
      </div>
      <Footer />
    </>
  );
}

export default App;