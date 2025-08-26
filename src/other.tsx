import { useApp } from "./appContext/useApp.tsx"
import { getText } from "./languages/languages.ts"

function Other() {
  const { darkMode,language } = useApp();

  return (
    <>
      <div className="flex flex-col justify-between mt-5 mb-30 p-10 bg-neutral-100 dark:bg-neutral-800 rounded-2xl w-400">
         <h1
           className={`${darkMode ? "dark" : ""} font-bold text-6xl mb-6 text-black dark:text-white`}
           >{getText(language,"other")}</h1>

        <div className={`${darkMode ? "dark" : ""} flex flex-col items-center`}>
        </div>

      </div>
    </>
  )
}


export default Other
