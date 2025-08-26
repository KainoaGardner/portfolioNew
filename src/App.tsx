import Settings from "./settings.jsx";
import About from "./about.jsx";
import Experience from "./experience.jsx";
import Projects from "./projects.jsx";
import Education from "./education.jsx";
import Other from "./other.jsx";
import { useApp } from "./appContext/useApp.tsx"

function App() {
  const { darkMode } = useApp();

  return (
    <>
      <div className={`${darkMode ? "dark" : ""} p-10 flex flex-col items-center bg-neutral-300 dark:bg-neutral-900 scale-75 origin-top`}>
        <section id="about"><About/></section>
        <section id="experience"><Experience/></section>
        <section id="projects"><Projects/></section>
        <section id="education"><Education/></section>
        <section id="other"><Other/></section>
      </div>
      <div className="flex justify-center bg-neutral-300 dark:bg-neutral-900">
        <Settings/>
      </div>

    </>
  )
}

export default App
