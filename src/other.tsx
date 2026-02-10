import { useApp } from "./appContext/useApp.tsx"
import { getText } from "./languages/languages.ts"
import { type Languages } from "./appContext/appContext.tsx"

function Other() {
  const { darkMode,language } = useApp();

  return (
    <>
      <div className="flex flex-col justify-between mt-5 mb-30 p-10 bg-neutral-100 dark:bg-neutral-800 rounded-2xl">
         <h1
           className={`${darkMode ? "dark" : ""} font-bold text-6xl mb-6 text-black dark:text-white`}
           >{getText(language,"other")}</h1>

        <div className={`${darkMode ? "dark" : ""} flex flex-col items-center`}>
          <JLPT darkMode={darkMode} language={language}/>
        </div>


      </div>
    </>
  )
}

function JLPT({darkMode ,language}:{darkMode:boolean,language:Languages}){
  return <>
    <div className="flex justify-between w-full my-5 p-5 bg-neutral-300 dark:bg-stone-600 rounded-2xl">
      <div className="flex flex-col flex-1 justify-between">
        <div>
         <h2
           className={`${darkMode ? "dark" : ""} font-bold text-5xl mb-2 text-black dark:text-white`}
           >{getText(language,"jlpt")}</h2>
         <h2
           className={`${darkMode ? "dark" : ""} font-bold text-4xl mb-2 text-black dark:text-white`}
           >{getText(language,"jlptTitle")}</h2>
           <p
             className={`${darkMode ? "dark" : ""} text-2xl mb-2 text-neutral-900 dark:text-neutral-200`}
           >{getText(language,"jlptText")}</p>
        </div>
      </div>

      <img 
        className="w-50 h-50"
        src="/images/jlpt.jpg" alt="Sierra College" />
    </div>
  </>
}

export default Other
