import Settings from "./settings.jsx";
import About from "./about.jsx";
import Experience from "./experience.jsx";
import Projects from "./projects.jsx";
import Education from "./education.jsx";
import Other from "./other.jsx";
import { useApp } from "./appContext/useApp.tsx"
import './index.css'

function App() {
  const { darkMode } = useApp();

  return (
    <>
      <div id="appScale">
        <div className={`${darkMode ? "dark" : ""} w-full p-10 bg-neutral-300 dark:bg-neutral-900`}>
          <section id="about" className="w-full min-w-400"><About/></section>
          <section id="experience" className="w-full min-w-400"><Experience/></section>
          <section id="projects" className="w-full min-w-400"><Projects/></section>
          <section id="education" className="w-full min-w-400"><Education/></section>
          <section id="other" className="w-full min-w-400"><Other/></section>
        </div>
      </div>

      <Settings/>
    </>
  )
}

export default App
