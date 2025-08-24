import { createContext } from "react"

interface AppContextType {
  darkMode: boolean
  setDarkMode: (mode: boolean) => void
  language: Languages
  setLanguage: (language: Languages) => void
}

export type Languages =
  "english" |
  "japanese" 

export const AppContext = createContext<AppContextType | undefined>(undefined)
