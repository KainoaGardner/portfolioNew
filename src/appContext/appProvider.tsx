import { useState } from "react"
import type { ReactNode } from "react"
import { AppContext, type Languages } from "./appContext.tsx"


export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(getPreferredDarkMode())
  const [language, setLanguage] = useState<Languages>(getPreferredLanguage())

  return (
    <AppContext.Provider value={{ darkMode,setDarkMode,language,setLanguage }}>
      {children}
    </AppContext.Provider>
  )
}

function getPreferredDarkMode():boolean{
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
  if (prefersDarkMode.matches){
    return true
  }

  return false
}

function getPreferredLanguage():Languages{
  const preferredLanguage = navigator.language;
  if (preferredLanguage === "ja"){
    return "japanese"
  }

  return "english"
}
