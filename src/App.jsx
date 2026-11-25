import { Route, Routes } from "react-router-dom"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import About from "./pages/About"
import ProjectParent from "./components/projects/ProjectParent"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Whatsappicon from "./components/Whatsapp/Whatsappicon"
import ScrollToTop from "./components/Scroll/ScrollToTop"

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectParent />} />


      </Routes>
      <Whatsappicon />
      <Footer />

    </>
  )
}

export default App