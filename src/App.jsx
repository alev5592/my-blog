import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MyNavbar from './components/Navbar'
import Home from './pages/Home'
import BlogPost from './pages/BlogPost'
import About from './pages/About'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <MyNavbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
