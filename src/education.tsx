import { useApp } from "./appContext/useApp.tsx"
import { getText } from "./languages/languages.ts"
import { type Languages } from "./appContext/appContext.tsx"

function Education() {
  const { darkMode,language } = useApp();

  return (
    <>
      <div className="flex flex-col justify-between mt-5 p-10 bg-neutral-100 dark:bg-neutral-800 rounded-2xl w-400">
         <h1
           className={`${darkMode ? "dark" : ""} font-bold text-6xl mb-6 text-black dark:text-white`}
           >{getText(language,"education")}</h1>

        <div className={`${darkMode ? "dark" : ""} flex flex-col items-center`}>
        <SierraCollege darkMode={darkMode} language={language}/>
        <SacState darkMode={darkMode} language={language}/>
        </div>

      </div>
    </>
  )
}

function SierraCollege({darkMode ,language}:{darkMode:boolean,language:Languages}){
  return <>
    <div className="flex justify-between w-full my-5 p-5 bg-neutral-300 dark:bg-stone-600 rounded-2xl">
      <div className="flex flex-col flex-1 justify-between">
        <div>
         <h2
           className={`${darkMode ? "dark" : ""} font-bold text-5xl mb-2 text-black dark:text-white`}
           >{getText(language,"sierraCollege")}</h2>
           <p
             className={`${darkMode ? "dark" : ""} text-2xl mb-2 text-neutral-900 dark:text-neutral-200`}
           >{getText(language,"sierraCollegeText")}</p>

        </div>
      </div>

      <img 
        className="w-40 h-40"
        src="/images/sierracollege.png" alt="Sierra College" />
    </div>
  </>
}

function SacState({darkMode ,language}:{darkMode:boolean,language:Languages}){
  return <>
    <div className="flex justify-between w-full my-5 p-5 bg-neutral-300 dark:bg-stone-600 rounded-2xl">
      <div className="flex flex-col flex-1 justify-between">
        <div>
         <h2
           className={`${darkMode ? "dark" : ""} font-bold text-5xl mb-2 text-black dark:text-white`}
           >{getText(language,"sacState")}</h2>
           <p
             className={`${darkMode ? "dark" : ""} text-2xl mb-2 text-neutral-900 dark:text-neutral-200`}
           >{getText(language,"sacStateText")}</p>

        </div>
      </div>

      <img 
        className="w-40 h-40"
        src="/images/sacstate.png" alt="Sac State" />
    </div>
  </>
}

export default Education
