import Navbar from "./components/navbar"
import Hero from "./components/hero"
import About from "./components/about"
import Project from "./components/projects"
import Experience from "./components/experience"
import Contact from "./components/contact"
import Game from "./components/game"
import Skills from "./components/skills"

function App() {

  return (
    <div className="App bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Game />
      <Experience />
      <Project />
      <Contact />
    </div>
  )
}

export default App
