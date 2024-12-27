import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Dishes from "./components/Dishes"
import About from "./components/About"
import Expertise from "./components/Expertise"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
  <HeroSection  />
  <Navbar />
  <Dishes />
  <About />
  <Expertise />
  <ContactSection />
  <Footer />
</div>

  )
}

export default App