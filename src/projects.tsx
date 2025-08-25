import { useApp } from "./appContext/useApp.tsx"
import { getText } from "./languages/languages.ts"
import { type Languages } from "./appContext/appContext.tsx"

function Projects() {
  const { darkMode,language } = useApp();

  return (
    <>
      <div className="flex flex-col justify-between mt-5 p-10 bg-neutral-100 dark:bg-neutral-800 rounded-2xl w-400">
         <h1
           className={`${darkMode ? "dark" : ""} font-bold text-6xl mb-6 text-black dark:text-white`}
           >{getText(language,"projects")}</h1>


        <div className={`${darkMode ? "dark" : ""} flex flex-col items-center`}>
          <EyeDungeon darkMode={darkMode} language={language}/>
          <AnimeWatchlist darkMode={darkMode} language={language}/>
          <CSC darkMode={darkMode} language={language}/>
          <MahjongCalc darkMode={darkMode} language={language}/>
          <Juggling darkMode={darkMode} language={language}/>
          <SpaceBulletHell darkMode={darkMode} language={language}/>
          <Shaders darkMode={darkMode} language={language}/>
          <DotFiles darkMode={darkMode} language={language}/>
        </div>

      </div>
    </>
  )
}

function EyeDungeon({darkMode ,language}:{darkMode:boolean,language:Languages}){
  return <>
    <div className="flex justify-between w-full my-5 p-5 bg-neutral-300 dark:bg-stone-600 rounded-2xl">
      <div className="flex flex-col flex-1 justify-between">
        <div>
          <h2
            className={`${darkMode ? "dark" : ""} font-bold text-5xl mb-4 text-black dark:text-white`}
            >{getText(language,"eyeDungeon")}</h2>
            <p
              className={`${darkMode ? "dark" : ""} text-2xl mb-2 text-neutral-900 dark:text-neutral-200`}
            >{getText(language,"eyeDungeonDesc")}</p>
        </div>
        <div>
          <a 
          target="_blank"
            className={`${darkMode ? "dark" : ""} font-bold text-2xl mr-6 text-neutral-900 dark:text-neutral-200`}
            href="https://github.com/KainoaGardner/eyeDungeon">
            {getText(language,"github")}</a>
          <a 
          target="_blank"
            className={`${darkMode ? "dark" : ""} font-bold text-2xl mr-6 text-neutral-900 dark:text-neutral-200`}
            href="https://eyedungeon.kainoagardner.xyz/">
            {getText(language,"link")}</a>
          <a 
          target="_blank"
            className={`${darkMode ? "dark" : ""} font-bold text-2xl mr-6 text-neutral-900 dark:text-neutral-200`}
            href="https://www.youtube.com/watch?v=PuHCaP0AnjM">
            {getText(language,"gameplay")}</a>
        </div>

      </div>

      <div className="flex">
        <div className="flex flex-wrap">
        <img 
          className="w-13 h-13 mx-2"
          src="/images/typescript.svg" alt="typescript" />
        <img 
          className="w-13 h-13 mx-2"
          src="/images/docker.svg" alt="docker" />
        <img 
          className="w-13 h-13 mx-2"
          src="/images/nginx.png" alt="nginx" />
        </div>


        <a 
          target="_blank"
          href="https://eyedungeon.kainoagardner.xyz/">
        <img 
          className="w-40 h-40 object-cover"
          src="/images/eyeDungeon.png" alt="the coder school" />
            </a>
      </div>


    </div>
  </>
}

function MahjongCalc({darkMode ,language}:{darkMode:boolean,language:Languages}){
  return <>
    <div className="flex justify-between w-full my-5 p-5 bg-neutral-300 dark:bg-stone-600 rounded-2xl">
      <div className="flex flex-col flex-1 justify-between">
        <div>
          <h2
            className={`${darkMode ? "dark" : ""} font-bold text-5xl mb-4 text-black dark:text-white`}
            >{getText(language,"mahjongCalc")}</h2>
            <p
              className={`${darkMode ? "dark" : ""} text-2xl mb-2 text-neutral-900 dark:text-neutral-200`}
            >{getText(language,"mahjongCalcDesc")}</p>
        </div>
        <div>
          <a 
          target="_blank"
            className={`${darkMode ? "dark" : ""} font-bold text-2xl mr-6 text-neutral-900 dark:text-neutral-200`}
            href="https://github.com/KainoaGardner/webMahjongCalc">
            {getText(language,"github")}</a>
          <a 
          target="_blank"
            className={`${darkMode ? "dark" : ""} font-bold text-2xl mr-6 text-neutral-900 dark:text-neutral-200`}
            href="https://mahjong.kainoagardner.xyz/">
            {getText(language,"link")}</a>
        </div>

      </div>

      <div className="flex">
        <div className="flex flex-wrap">
        <img 
          className="w-13 h-13 mx-2"
          src="/images/go.png" alt="golang" />
        <img 
          className="w-13 h-13 mx-2"
          src="/images/javascript.png" alt="javascript" />
        <img 
          className="w-13 h-13 mx-2"
          src="/images/react.png" alt="react" />
        <img 
          className="w-13 h-13 mx-2"
          src="/images/docker.svg" alt="docker" />
        <img 
          className="w-13 h-13 mx-2"
          src="/images/nginx.png" alt="nginx" />
        <img 
          className="w-13 h-13 mx-2"
          src="/images/aws.svg" alt="aws" />
        </div>

        <a 
          target="_blank"
          href="https://mahjong.kainoagardner.xyz/">
        <img 
          className="w-40 h-40 object-cover"
          src="/images/mahjong.png" alt="mahjong" />
            </a>
      </div>
    </div>
  </>
}

function AnimeWatchlist({darkMode ,language}:{darkMode:boolean,language:Languages}){
  return <>
    <div className="flex justify-between w-full my-5 p-5 bg-neutral-300 dark:bg-stone-600 rounded-2xl">
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h2
            className={`${darkMode ? "dark" : ""} font-bold text-5xl mb-4 text-black dark:text-white`}
            >{getText(language,"animeWatchlist")}</h2>
            <p
              className={`${darkMode ? "dark" : ""} text-2xl mb-2 text-neutral-900 dark:text-neutral-200`}
            >{getText(language,"animeWatchlistDesc")}</p>
        </div>
        <div>
          <a 
          target="_blank"
            className={`${darkMode ? "dark" : ""} font-bold text-2xl mr-6 text-neutral-900 dark:text-neutral-200`}
            href="https://github.com/KainoaGardner/getAnime2">
            {getText(language,"github")}</a>
          <a 
          target="_blank"
            className={`${darkMode ? "dark" : ""} font-bold text-2xl mr-6 text-neutral-900 dark:text-neutral-200`}
            href="https://ganime.kainoagardner.xyz/">
            {getText(language,"link")}</a>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-wrap">
        <img 
          className="w-10 h-10 mx-2"
          src="/images/python.png" alt="python" />
        <img 
          className="w-10 h-10 mx-2"
          src="/images/fastapi.png" alt="fastAPI" />
        <img 
          className="w-10 h-10 mx-2"
          src="/images/javascript.png" alt="javascript" />
        <img 
          className="w-10 h-10 mx-2"
          src="/images/react.png" alt="react" />
        <img 
          className="w-10 h-10 mx-2"
          src="/images/postgresql.png" alt="postgresql" />
        <img 
          className="w-10 h-10 mx-2"
          src="/images/selenium.png" alt="selenium" />
        <img 
          className="w-10 h-10 mx-2"
          src="/images/nginx.png" alt="nginx" />
        </div>

        <a 
          target="_blank"
          href="https://ganime.kainoagardner.xyz/">
        <img 
          className="w-40 h-40 object-cover"
          src="/images/ganime2.png" alt="animeWatchlist" />
            </a>

      </div>
    </div>
  </>
}

function CSC({darkMode ,language}:{darkMode:boolean,language:Languages}){
  return <>
    <div className="flex justify-between w-full my-5 p-5 bg-neutral-300 dark:bg-stone-600 rounded-2xl">
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h2
            className={`${darkMode ? "dark" : ""} font-bold text-5xl mb-4 text-black dark:text-white`}
            >{getText(language,"csc")}</h2>
            <p
              className={`${darkMode ? "dark" : ""} text-2xl mb-2 text-neutral-900 dark:text-neutral-200`}
            >{getText(language,"cscDesc")}</p>
        </div>
        <div className="flex">
          <a 
          target="_blank"
            className={`${darkMode ? "dark" : ""} font-bold text-2xl mr-6 text-neutral-900 dark:text-neutral-200`}
            href="https://github.com/KainoaGardner/csc">
            {getText(language,"github")}</a>
          <p
            className={`${darkMode ? "dark" : ""} font-bold text-2xl mr-6 text-red-700 dark:text-red-400`}>
            {getText(language,"down")}</p>

        </div>
      </div>

      <div className="flex">
        <div className="flex flex-wrap">
        <img 
          className="w-13 h-13 mx-2"
          src="/images/go.png" alt="golang" />
        <img 
          className="w-13 h-13 mx-2"
          src="/images/typescript.svg" alt="typescript" />
        <img 
          className="w-13 h-13 mx-2"
          src="/images/react.png" alt="react" />
        <img 
          className="w-13 h-13 mx-2"
          src="/images/mongodb.svg" alt="mongodb" />
        <img 
          className="w-13 h-13 mx-2"
          src="/images/nginx.png" alt="nginx" />
        </div>

        <a 
          target="_blank"
          href="https://github.com/KainoaGardner/csc">
        <img 
          className="w-40 h-40 object-cover"
          src="/images/csc.png" alt="CSC" />
            </a>

      </div>
    </div>
  </>
}

function Juggling({darkMode ,language}:{darkMode:boolean,language:Languages}){
  return <>
    <div className="flex justify-between w-full my-5 p-5 bg-neutral-300 dark:bg-stone-600 rounded-2xl">
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h2
            className={`${darkMode ? "dark" : ""} font-bold text-5xl mb-4 text-black dark:text-white`}
            >{getText(language,"juggling")}</h2>
            <p
              className={`${darkMode ? "dark" : ""} text-2xl mb-2 text-neutral-900 dark:text-neutral-200`}
            >{getText(language,"jugglingDesc")}</p>
        </div>
        <div className="flex">
          <a 
          target="_blank"
            className={`${darkMode ? "dark" : ""} font-bold text-2xl mr-6 text-neutral-900 dark:text-neutral-200`}
            href="https://github.com/KainoaGardner/juggle">
            {getText(language,"github")}</a>
          <a 
          target="_blank"
            className={`${darkMode ? "dark" : ""} font-bold text-2xl mr-6 text-neutral-900 dark:text-neutral-200`}
            href="https://juggle.kainoagardner.xyz/">
            {getText(language,"link")}</a>

        </div>
      </div>

      <div className="flex">
        <div className="flex flex-wrap">
        <img 
          className="w-13 h-13 mx-2"
          src="/images/typescript.svg" alt="typescript" />
        <img 
          className="w-13 h-13 mx-2"
          src="/images/htmx.png" alt="htmx" />
        <img 
          className="w-13 h-13 mx-2"
          src="/images/nginx.png" alt="nginx" />

        </div>

        <a 
          target="_blank"
          href="https://juggle.kainoagardner.xyz/">
        <img 
          className="w-40 h-40 object-cover"
          src="/images/juggle.png" alt="Juggling" />
            </a>

      </div>
    </div>
  </>
}

function SpaceBulletHell({darkMode ,language}:{darkMode:boolean,language:Languages}){
  return <>
    <div className="flex justify-between w-full my-5 p-5 bg-neutral-300 dark:bg-stone-600 rounded-2xl">
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h2
            className={`${darkMode ? "dark" : ""} font-bold text-5xl mb-4 text-black dark:text-white`}
            >{getText(language,"spaceBulletHell")}</h2>
            <p
              className={`${darkMode ? "dark" : ""} text-2xl mb-2 text-neutral-900 dark:text-neutral-200`}
            >{getText(language,"spaceBulletHellDesc")}</p>
        </div>
        <div className="flex">
          <a 
          target="_blank"
            className={`${darkMode ? "dark" : ""} font-bold text-2xl mr-6 text-neutral-900 dark:text-neutral-200`}
            href="https://github.com/KainoaGardner/flying3d">
            {getText(language,"github")}</a>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-wrap">
        <img 
          className="w-13 h-13 mx-2"
          src="/images/c++.png" alt="c++" />
        <img 
          className="w-15 h-15 mx-2"
          src="/images/opengl.svg" alt="opengl" />
        </div>

        <a 
          target="_blank"
          href="https://github.com/KainoaGardner/flying3d">
        <img 
          className="w-40 h-40 object-cover"
          src="/images/flyingGame.png" alt="Space Bullet Hell" />
            </a>

      </div>
    </div>
  </>
}

function DotFiles({darkMode ,language}:{darkMode:boolean,language:Languages}){
  return <>
    <div className="flex justify-between w-full my-5 p-5 bg-neutral-300 dark:bg-stone-600 rounded-2xl">
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h2
            className={`${darkMode ? "dark" : ""} font-bold text-5xl mb-4 text-black dark:text-white`}
            >{getText(language,"dotFiles")}</h2>
            <p
              className={`${darkMode ? "dark" : ""} text-2xl mb-2 text-neutral-900 dark:text-neutral-200`}
            >{getText(language,"dotFilesDesc")}</p>
        </div>
        <div className="flex">
          <a 
          target="_blank"
            className={`${darkMode ? "dark" : ""} font-bold text-2xl mr-6 text-neutral-900 dark:text-neutral-200`}
            href="https://github.com/KainoaGardner/dotFilesArch">
            {getText(language,"github")}</a>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-wrap">
        <img 
          className="w-15 h-15 mx-2"
          src="/images/linux.png" alt="linux" />
        <img 
          className="w-15 h-15 mx-2"
          src="/images/bash.png" alt="bash" />
        </div>

        <a 
          target="_blank"
          href="https://github.com/KainoaGardner/dotFilesArch">
        <img 
          className="w-40 h-40 object-cover"
          src="/images/archdotfiles.png" alt="Arch dot files" />
            </a>

      </div>
    </div>
  </>
}

function Shaders({darkMode ,language}:{darkMode:boolean,language:Languages}){
  return <>
    <div className="flex justify-between w-full my-5 p-5 bg-neutral-300 dark:bg-stone-600 rounded-2xl">
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h2
            className={`${darkMode ? "dark" : ""} font-bold text-5xl mb-4 text-black dark:text-white`}
            >{getText(language,"shaders")}</h2>
            <p
              className={`${darkMode ? "dark" : ""} text-2xl mb-2 text-neutral-900 dark:text-neutral-200`}
            >{getText(language,"shadersDesc")}</p>
        </div>
        <div className="flex">
          <a 
          target="_blank"
            className={`${darkMode ? "dark" : ""} font-bold text-2xl mr-6 text-neutral-900 dark:text-neutral-200`}
            href="https://github.com/KainoaGardner/shaderDisplay">
            {getText(language,"github")}</a>
          <a 
          target="_blank"
            className={`${darkMode ? "dark" : ""} font-bold text-2xl mr-6 text-neutral-900 dark:text-neutral-200`}
            href="https://shaders.kainoagardner.xyz">
            {getText(language,"link")}</a>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-wrap">
        <img 
          className="w-15 h-15 mx-2"
          src="/images/webgl.svg" alt="webgl" />
        <img 
          className="w-13 h-13 mx-2"
          src="/images/typescript.svg" alt="typescript" />

        </div>

        <a 
          target="_blank"
          href="https://github.com/KainoaGardner/shaderDisplay">
        <img 
          className="w-40 h-40 object-cover"
          src="/images/shaders.png" alt="Shaders" />
            </a>

      </div>
    </div>
  </>
}

export default Projects
