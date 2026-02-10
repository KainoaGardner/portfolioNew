import { useApp } from "./appContext/useApp.tsx"
import { getText } from "./languages/languages.ts"
import { type Languages } from "./appContext/appContext.tsx"

function Experience() {
  const { darkMode,language } = useApp();

  return (
    <>
      <div className="flex flex-col justify-between mt-5 p-10 bg-neutral-100 dark:bg-neutral-800 rounded-2xl">
         <h1
           className={`${darkMode ? "dark" : ""} font-bold text-6xl mb-6 text-black dark:text-white`}
           >{getText(language,"experience")}</h1>


        <div className={`${darkMode ? "dark" : ""} flex flex-col items-center`}>
        <Foriio darkMode={darkMode} language={language}/>
        <TreePlenish darkMode={darkMode} language={language}/>
        <CoderSchool darkMode={darkMode} language={language}/>
        </div>

      </div>
    </>
  )
}

function Foriio({darkMode ,language}:{darkMode:boolean,language:Languages}){
  return <>
    <div className="flex justify-between w-full my-5 p-5 bg-neutral-300 dark:bg-stone-600 rounded-2xl">
      <div className="flex flex-col flex-1 justify-between">
        <div>
          <h2 className={`${darkMode ? "dark" : ""} font-bold text-5xl mb-4 text-black dark:text-white`}
          >{getText(language,"forrioTitle")}</h2>
          <h2 className={`${darkMode ? "dark" : ""} font-bold text-4xl mb-2 text-950 dark:text-neutral-100`}
          >{getText(language,"forrio")}</h2>
          <h2 className={`${darkMode ? "dark" : ""} font-bold text-2xl mb-2 text-950 dark:text-neutral-100`}
          >{getText(language,"forrioDate")}</h2>
        </div>
        <div>
           <p
             className={`${darkMode ? "dark" : ""} text-2xl mb-2 text-neutral-900 dark:text-neutral-200`}
           >{getText(language,"forrioText")}</p>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-wrap">
        </div>

        <img 
          className="h-50 object-cover"
          src="/images/forrio.png" alt="tree plenish" />
      </div>

    </div>
  </>
}

function TreePlenish({darkMode ,language}:{darkMode:boolean,language:Languages}){
  return <>
    <div className="flex justify-between w-full my-5 p-5 bg-neutral-300 dark:bg-stone-600 rounded-2xl">
      <div className="flex flex-col flex-1 justify-between">
        <div>
          <h2 className={`${darkMode ? "dark" : ""} font-bold text-5xl mb-4 text-black dark:text-white`}
          >{getText(language,"treePlenishTitle")}</h2>
          <h2 className={`${darkMode ? "dark" : ""} font-bold text-4xl mb-2 text-950 dark:text-neutral-100`}
          >{getText(language,"treePlenish")}</h2>
          <h2 className={`${darkMode ? "dark" : ""} font-bold text-2xl mb-2 text-950 dark:text-neutral-100`}
          >{getText(language,"treePlenishDate")}</h2>
        </div>
        <div>
           <p
             className={`${darkMode ? "dark" : ""} text-2xl mb-2 text-neutral-900 dark:text-neutral-200`}
           >{getText(language,"treePlenishText")}</p>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-wrap">
        <img 
          className="w-13 h-13 mx-2"
          title="python"
          src="/images/python.png" alt="python" />
        <img 
          className="w-13 h-13 mx-2"
          title="postgresql"
          src="/images/postgresql.png" alt="postgresql" />
        <img 
          className="w-13 h-13 mx-2"
          title="docker"
          src="/images/docker.svg" alt="docker" />
        <img 
          className="w-13 h-13 mx-2"
          title="aws"
          src="/images/aws.svg" alt="aws" />

        </div>

        <img 
          className="w-50 h-50 object-cover"
          src="/images/treePlenish.jpg" alt="tree plenish" />
      </div>


    </div>
  </>
}

function CoderSchool({darkMode ,language}:{darkMode:boolean,language:Languages}){
  return <>
    <div className="flex justify-between w-full my-5 p-5 bg-neutral-300 dark:bg-stone-600 rounded-2xl">
      <div className="flex flex-col flex-1 justify-between">
        <div>
           <h2
             className={`${darkMode ? "dark" : ""} font-bold text-5xl mb-4 text-950 dark:text-neutral-100`}
           >{getText(language,"coderSchoolTitle")}</h2>

         <h2
           className={`${darkMode ? "dark" : ""} font-bold text-4xl mb-2 text-black dark:text-white`}
           >{getText(language,"coderSchool")}</h2>

          <h2 className={`${darkMode ? "dark" : ""} font-bold text-2xl mb-2 text-950 dark:text-neutral-100`}
          >{getText(language,"coderSchoolDate")}</h2>
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
          title="python"
          src="/images/python.png" alt="python" />
        <img 
          className="w-13 h-13 mx-2"
          title="scratch"
          src="/images/scratch.svg" alt="scratch" />
        </div>

        <img 
          className="w-50 h-50"
          src="/images/coderschool.png" alt="the coder school" />
      </div>


    </div>
  </>

}

export default Experience
