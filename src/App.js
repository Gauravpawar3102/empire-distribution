import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Apply from './pages/Apply';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import News from './pages/News';
import Partners from './pages/Partners';
import Products from './pages/Products';
import SearchProduct from './pages/SearchProduct';
import ViewProduct from './pages/ViewProduct';

function App() {
  return (
    <div className="App ">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />

          <Route path="/product/:id" element={<ViewProduct />} />
          <Route path="/search" element={<SearchProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Apply />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/news" element={<News />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
