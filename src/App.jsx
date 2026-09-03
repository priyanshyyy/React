import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import './styles/variables.css';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;