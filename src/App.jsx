import Navbar from "./components/navbar"
import Hero from "./components/hero"
import About from "./components/about"
import Project from "./components/projects"
import Experience from "./components/experience"
import Contact from "./components/contact"
import Game from "./components/game"

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Game />
      <Project />
      <Contact />
    </div>
  )
}

export default App
