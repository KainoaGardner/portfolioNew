import { useApp } from "./appContext/useApp.tsx"
import { getText } from "./languages/languages.ts"

function Experience() {
  const { darkMode,language } = useApp();

  return (
    <>
      <div className="flex justify-between mt-5 p-10 bg-neutral-100 dark:bg-neutral-800 rounded-2xl w-400">
         <h1
           className={`${darkMode ? "dark" : ""} font-bold text-6xl mb-6 text-neutral-950 dark:text-gray-50`}
           >{getText(language,"experienceTitle")}</h1>

      </div>
    </>
  )
}

export default Experience
