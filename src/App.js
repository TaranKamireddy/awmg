import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import About from "./pages/About"
import News from "./pages/News"
import Services from "./pages/Services"
import Resources from "./pages/Resources"
import ServicePage from "./pages/ServicePage"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/servicepage" element={<ServicePage />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
