import { useApp } from "./appContext/useApp.tsx"
import { getText } from "./languages/languages.ts"

function About() {
  const { darkMode,language } = useApp();

  return (
    <>
      <div className="flex justify-between p-10 bg-neutral-100 dark:bg-neutral-800 rounded-2xl w-400">
        <div className="flex flex-col justify-between">
          <div>
            <h1
              className={`${darkMode ? "dark" : ""} font-bold text-8xl mb-2 text-black dark:text-white`}
              >{getText(language,"name")}</h1>
            <h2
              className={`${darkMode ? "dark" : ""} font-bold text-4xl mb-6 text-neutral-950 dark:text-neutral-100`}
            >{getText(language,"nameSub")}</h2>

            <h2
              className={`${darkMode ? "dark" : ""} font-bold text-4xl mb-2 text-neutral-950 dark:text-neutral-100`}
            >{getText(language,"title")}</h2>

            <h3
              className={`${darkMode ? "dark" : ""} font-bold text-2xl text-neutral-900 dark:text-neutral-200`}
            >{getText(language,"location")}</h3>

          </div>

            <div 
              className={`${darkMode ? "dark" : ""} flex items-center w-fit p-5 bg-neutral-300 dark:bg-stone-600 rounded-2xl`}>
              <a 
              className={`${darkMode ? "dark" : ""} font-bold text-3xl mr-5 text-black dark:text-white`}
                target="_blank"
                href="/resume.pdf">{getText(language,"resume")}</a>
              <a 
                target="_blank"
                href="https://github.com/KainoaGardner">
                <img 
                  className="w-20 mr-5"
                  src="/images/githubicon.png" alt="github"/>
              </a>
              <a 
                target="_blank"
                href="mailto: kainoagardner123@gmail.com">
                <img 
                  className="w-20 mr-5"
                  src="/images/emailicon.png" alt="email"/>
              </a>

              <a 
                target="_blank"
                href="https://www.linkedin.com/in/kainoa-gardner-663543322/">
                <img 
                  className="w-20 mr-5"
                  src="/images/linkedinicon.png" alt="linkedin" />
              </a>
            </div>

        </div>

        <div className="flex items-center">
          <img 
            className="w-100 h-100 rounded-2xl"
            src="/images/headshot.png" alt="headshot" />
        </div>
          
      </div>
    </>
  )
}

export default About
