import { useApp } from "./appContext/useApp.tsx"
import {useEffect} from "react"

import { getText } from "./languages/languages.ts"

const links = [
  {id: "about"},
  {id: "experience"},
  {id: "projects"},
  {id: "education"},
  {id: "other"},
]

function Settings() {
  const { darkMode,setDarkMode,language,setLanguage } = useApp();


  const handleScroll = (id:string) => {
    const el = document.getElementById(id)
    if (el){
      el.scrollIntoView({behavior: "smooth", block: "start"})
    }
  }

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = event.target.value
    if (lang === "english" || lang === "japanese"){
      setLanguage(lang)
    }
  }

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode)
    if (darkMode){
      document.body.classList.add("dark");
    }else{
      document.body.classList.remove("dark");
    }
  }

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <div 
        className={`${darkMode ? "dark" : ""} flex justify-between p-5 bg-neutral-100 dark:bg-neutral-800 w-full bottom-0 fixed `}>

        <div>
          <button className={`${darkMode ? "dark" : ""} font-bold mr-10 p-3 rounded-2xl text-2xl text-black dark:text-white bg-neutral-300 dark:bg-stone-600`}
            onClick={handleDarkModeChange}>{darkMode ? getText(language,"lightMode") : getText(language,"darkMode")}</button>

          <label htmlFor="languageSelect"></label>
          <select 
            className={`${darkMode ? "dark" : ""} font-bold text-2xl p-3 rounded-2xl text-black dark:text-white bg-neutral-300 dark:bg-stone-600`}
            id="languageSelect" value={language} onChange={handleLanguageChange}>
            <option value="english">English</option>
            <option value="japanese">日本語</option>
          </select>
        </div>

        <div className="flex">
          {links.map((link) => (
            <button 
             key={link.id}
             onClick={() => handleScroll(link.id)}
             className={`${darkMode ? "dark" : ""} font-bold mx-4 text-2xl p-3 rounded-2xl text-black dark:text-white bg-neutral-300 dark:bg-stone-600`}
           >{getText(language,link.id)}</button>
          ))}
        </div>
      </div>
    </>
  )
}

export default Settings
