import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import About from './pages/About'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import './App.css'

function NotFound() {
  return (
    <main className="section">
      <div className="container">
        <div className="empty-state">
          <p className="eyebrow">404</p>
          <h1>Page not found</h1>
          <p>The page you requested could not be found or may have been moved.</p>
        </div>
      </div>
    </main>
  )
}

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
