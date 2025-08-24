import { useContext } from "react"
import { AppContext } from "./appContext.tsx"

export const useApp = () => {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error("only useable in AppProvider")
  return ctx
}


