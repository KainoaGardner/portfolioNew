import { type Languages } from "../appContext/appContext.tsx"
import { jaText } from "./japanese.ts"
import { enText } from "./english.ts"

export const languageMap = new Map<Languages, Map<string,string>>()
languageMap.set("japanese",jaText)
languageMap.set("english",enText)

export function getText(language:Languages,text:string):string{
  const langMap = languageMap.get(language)
  if (langMap === undefined){
    return ""
  }

  const resultText = langMap.get(text)
  if (resultText === undefined){
    return ""
  }

  return resultText
}
