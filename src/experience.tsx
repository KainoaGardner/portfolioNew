import { useApp } from "./appContext/useApp.tsx"
import { getText } from "./languages/languages.ts"
import { type Languages } from "./appContext/appContext.tsx"

function Experience() {
  const { darkMode,language } = useApp();

  return (
    <>
      <div className="flex flex-col justify-between mt-5 p-10 bg-neutral-100 dark:bg-neutral-800 rounded-2xl w-400">
         <h1
           className={`${darkMode ? "dark" : ""} font-bold text-6xl mb-6 text-black dark:text-white`}
           >{getText(language,"experience")}</h1>


        <div className={`${darkMode ? "dark" : ""} flex flex-col items-center`}>
        <CoderSchool darkMode={darkMode} language={language}/>
        </div>

      </div>
    </>
  )
}

function CoderSchool({darkMode ,language}:{darkMode:boolean,language:Languages}){
  return <>
    <div className="flex justify-between w-full my-5 p-5 bg-neutral-300 dark:bg-stone-600 rounded-2xl">
      <div className="flex flex-col flex-1 justify-between">
        <div>
         <h2
           className={`${darkMode ? "dark" : ""} font-bold text-5xl mb-2 text-black dark:text-white`}
           >{getText(language,"coderSchool")}</h2>
           <h2
             className={`${darkMode ? "dark" : ""} font-bold text-2xl mb-2 text-950 dark:text-neutral-100`}
           >{getText(language,"coderSchoolTitle")}</h2>
        </div>
        <div>
           <p
             className={`${darkMode ? "dark" : ""} text-2xl mb-2 text-neutral-900 dark:text-neutral-200`}
           >{getText(language,"coderSchoolText")}</p>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-wrap">
        <img 
          className="w-13 h-13 mx-2"
          src="/images/python.png" alt="python" />
        <img 
          className="w-13 h-13 mx-2"
          src="/images/scratch.svg" alt="scratch" />
        </div>

        <img 
          className="w-40 h-40"
          src="/images/coderschool.png" alt="the coder school" />
      </div>


    </div>
  </>

}

export default Experience
