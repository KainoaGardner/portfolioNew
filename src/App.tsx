import Settings from "./settings.jsx";
import About from "./about.jsx";
import Experience from "./experience.jsx";
import { useApp } from "./appContext/useApp.tsx"

function App() {
  const { darkMode } = useApp();

  return (
    <>
      <div className={`${darkMode ? "dark" : ""} ml-10 flex flex-col items-start bg-neutral-300 dark:bg-neutral-900`}>
        <Settings/>
        <About/>
        <Experience/>
      </div>
    </>
  )
}

export default App
