import { useApp } from "./appContext/useApp.tsx"
import {useEffect} from "react"

import { getText } from "./languages/languages.ts"

function Settings() {
  const { darkMode,setDarkMode,language,setLanguage } = useApp();

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
      <div className="flex justify-between mt-5 p-5 bg-neutral-100 dark:bg-neutral-800 rounded-2xl w-150">

        <button className={`${darkMode ? "dark" : ""} font-bold text-2xl text-neutral-950 dark:text-gray-50`}
          onClick={handleDarkModeChange}>{darkMode ? getText(language,"lightMode") : getText(language,"darkMode")}</button>

        <label htmlFor="languageSelect"></label>
        <select 
          className={`${darkMode ? "dark" : ""} font-bold text-2xl text-neutral-950 dark:text-gray-50`}
          id="languageSelect" value={language} onChange={handleLanguageChange}>
          <option value="english">English</option>
          <option value="japanese">日本語</option>
        </select>
      </div>
    </>
  )
}

export default Settings
