import Header from './components/header/Header'

function App() {

  return (
    <>
      <Header/>
      <div className="space-y-14 z-20">
            <div className="responsive-container">
                <section className="grid xl:grid-cols-12 gap-6 xl:gap-8"> 
                    <div className="xl:col-span-9 xl:row-start-1 xl:row-span-4 md:pt-6">
                        <div className="flex flex-col">
                            <h1 className="main-header mb-6 ml-3">Welcome to RS Analysis</h1>
                            <div className="card border-b border-card-light">
                                <div className="pb-5">
                                    <div className="card-title">
                                        About
                                    </div>
                                    <div>
                                        <p >
                                            We are a community of RuneScape players who are passionate about the game and its mechanics. 
                                            We aim to provide the community with accurate and up-to-date information about the game, and to help players make informed decisions about their gear and ability rotations. 
                                            We are always working on new projects ranging from web based damage analysis tools to comprehensive research papers. 
                                            If you want to stay up to date with our latest projects or get involved with research and development check out our discord community linked below!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <a href="./magic.html" className="flex flex-col group">
                                <div className="card border-b border-card-light">
                                    <div className="flex items-center transform-gpu translate-x-0 group-hover:translate-x-2 transition-all">
                                        <img className="card-icon" src="assets/style_icons/magic.svg" />
                                        <div className="card-title">
                                            Magic Damage Calculator
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="./melee.html" className="flex flex-col group">
                                <div className="card border-b border-card-light">
                                    <div className="flex items-center transform-gpu translate-x-0 group-hover:translate-x-2 transition-all">
                                        <img className="card-icon" src="assets/style_icons/melee.svg" />
                                        <div className="card-title">
                                            Melee Damage Calculator
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="./ranged.html" className="flex flex-col group">
                                <div className="card border-b border-card-light">
                                    <div className="flex items-center transform-gpu translate-x-0 group-hover:translate-x-2 transition-all">
                                        <img className="card-icon" src="assets/style_icons/ranged.svg" />
                                        <div className="card-title">
                                            Ranged Damage Calculator
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="./necromancy.html" className="flex flex-col group">
                                <div className="card">
                                    <div className="flex items-center transform-gpu translate-x-0 group-hover:translate-x-2 transition-all">
                                        <img className="card-icon" src="assets/style_icons/necro.svg" />
                                        <div className="card-title">
                                            Necromancy Damage Calculator
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="xl:col-span-9 xl:row-start-5">
                        <div className="flex flex-col">
                            <h1 className="main-header mb-6 ml-3">Most Recent Publication</h1>
                                <div className="card card-home">
                                    <a href="./2024.001.pdf">
                                        <div className="card-title hover:text-link">
                                            Quantitative Analysis of RuneScape 3 Combat
                                        </div>
                                    </a>
                                    <div className="pb-5">
                                        <em>Akritia, Kyroh, Gamedolf, Sfox</em>
                                    </div>
                                    <div className="pl-5 pb-5">
                                        <p>
                                            RuneScape Player versus Monster (PvM) encounters are fundamentally static.
                                            In most cases, Non-Player Character (NPC) behavior is structured the same across all instances of an encounter.
                                            Players execute predetermined sequences of abilities called rotations which have been optimized for speed and consistency.
                                            The PvM Encyclopedia offers publicly available rotations for every boss, although they are primarily human-generated through trial and error.
                                            We propose that RuneScape can be solved and we explore the potential of statistical methods to evaluate both individual actions as well as complete rotations.
                                            Player-derived damage in a rotation can be interpreted as discrete random variables with non-identical distributions.
                                            We find that the distribution of sequences of abilities obtain Gaussian characteristics over time and show that sufficiently long rotations can be approximated with a Gaussian Probability Mass Function (PMF).
                                            These methods are useful for comparative analysis of existing rotations. However, we aim to transcend intuition-based rotation optimization through reinforcement learning&#8212;and 
                                            briefly examine the mathematical landscape of solving stochastic  Markov Decision Processes (MDPs) for massively large spaces in the context of RuneScape combat.
                                        </p>
                                    </div>
                                    <div className="text-xs pb-5">
                                        <p>Comments:</p>
                                        <p>Subjects: Statistics - Methods, Dynamic Programming, Game Theory</p>
                                    </div>
                                    <a href="./2024.001.pdf" className="hover:text-link">Open PDF</a>
                                </div>
                        </div>
                    </div>
                    <div className="xl:col-span-3 xl:row-start-1 xl:row-span-1 md:pt-20">
                        <div className="flex flex-col">
                            <div className="card card-home">
                                <div className="card-title">
                                    Other Resources
                                </div>
                                <div className="effect-container">
                                    <img className="effect-icon" src="assets/google_icons/book-blue.svg" />
                                    <li className="block transition-all duration-75 relative">
                                        <a href="./research.html" className="py-2 font-normal text-xl text-lb hover:text-link" title="">
                                            Research
                                        </a>
                                    </li>
                                </div>
                                <div className="effect-container">
                                    <img className="effect-icon" src="assets/google_icons/hammer-blue.svg" />
                                    <li className="block transition-all duration-75 relative">
                                        <a href="./projects.html" className="py-2 font-normal text-xl text-lb hover:text-link" title="">
                                            Upcoming Projects
                                        </a>
                                    </li>
                                </div>
                                <div className="effect-container">
                                    <img className="effect-icon" src="assets/google_icons/discord-blue.svg" />
                                    <li className="block transition-all duration-75 relative">
                                        <a href="https://discord.gg/rsanalysis" className="py-2 font-normal text-xl text-lb hover:text-link" title="">
                                            Discord
                                        </a>
                                    </li>
                                </div>
                                <div className="effect-container">
                                    <img className="effect-icon" src="assets/google_icons/faq-blue.svg" />
                                    <li className="block transition-all duration-75 relative">
                                        <a href="./faq.html" className="py-2 font-normal text-xl text-lb hover:text-link" title="">
                                            FAQ
                                        </a>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-3 xl:row-start-2 xl:row-span-6">
                        <div className="flex flex-col">
                            <div className="card card-home">
                                <div className="card-title pb-10">
                                    Credit
                                </div>
                                <div className="flex flex-row flex-wrap xl:flex-nowrap xl:gap-12 w-full">
                                    <div className="w-1/2 pb-8 md:w-1/4 lg:w-1/6 xl:w-full">
                                        <div className="mx-auto w-24 h-24 rounded-full bg-none overflow-hidden mb-3">
                                            <img src="./assets/contributors/akritia.webp" />
                                        </div>
                                    <div className="text-center text-gray-light">Akritia</div>
                                    <div className="text-center text-gray-light">Research and Development</div>
                                    </div>
                                </div>
                                <div className="flex flex-row flex-wrap xl:flex-nowrap xl:gap-12 w-full">
                                    <div className="w-1/2 pb-8 md:w-1/4 lg:w-1/6 xl:w-full">
                                    <div className="mx-auto w-24 h-24 rounded-full bg-black overflow-hidden mb-3">
                                        <img src="./assets/contributors/kyroh.webp" />
                                    </div>
                                    <div className="text-center text-gray-light">Kyroh</div>
                                    <div className="text-center text-gray-light">Research and Development</div>
                                    </div>
                                </div>
                                <div className="flex flex-row flex-wrap xl:flex-nowrap xl:gap-12 w-full">
                                    <div className="w-1/2 pb-8 md:w-1/4 lg:w-1/6 xl:w-full">
                                    <div className="mx-auto w-24 h-24 rounded-full bg-black overflow-hidden mb-3">
                                        <img src="./assets/contributors/sfox.webp" />
                                    </div>
                                    <div className="text-center text-gray-light">Sfox</div>
                                    <div className="text-center text-gray-light">Research</div>
                                    </div>
                                </div>
                                <div className="flex flex-row flex-wrap xl:flex-nowrap xl:gap-12 w-full">
                                    <div className="w-1/2 pb-8 md:w-1/4 lg:w-1/6 xl:w-full">
                                    <div className="mx-auto w-24 h-24 rounded-full bg-black overflow-hidden mb-3">
                                        <img src="./assets/contributors/hight.webp" />
                                    </div>
                                    <div className="text-center text-gray-light">HightDetal</div>
                                    <div className="text-center text-gray-light">Development</div>
                                    </div>
                                </div>
                                <div className="flex flex-row flex-wrap xl:flex-nowrap xl:gap-12 w-full">
                                    <div className="w-1/2 pb-8 md:w-1/4 lg:w-1/6 xl:w-full">
                                    <div className="mx-auto w-24 h-24 rounded-full bg-black overflow-hidden mb-3">
                                        <img src="./assets/contributors/code.webp" />
                                    </div>
                                    <div className="text-center text-gray-light">Codemati</div>
                                    <div className="text-center text-gray-light">Development</div>
                                    </div>
                                </div>
                                <div className="flex flex-row flex-wrap xl:flex-nowrap xl:gap-12 w-full">
                                    <div className="w-1/2 pb-8 md:w-1/4 lg:w-1/6 xl:w-full">
                                    <a href="https://discord.gg/BGjvs8Y28n">
                                    <div className="mx-auto w-24 h-24 rounded-full bg-black overflow-hidden mb-3">
                                        <img src="./assets/contributors/dolf.webp" />
                                    </div>
                                    <div className="text-center text-gray-light">Gamedolf</div>
                                    <div className="text-center text-gray-light">RS Math</div>
                                    </a>
                                    </div>
                                </div>
                                <div className="flex flex-row flex-wrap xl:flex-nowrap xl:gap-12 w-full">
                                    <div className="w-1/2 pb-8 md:w-1/4 lg:w-1/6 xl:w-full">
                                        <div className="mx-auto w-24 h-24 rounded-full bg-black overflow-hidden mb-3">
                                            <img src="./assets/contributors/rex.webp" />
                                        </div>
                                        <div className="text-center text-gray-light">RexT</div>
                                        <div className="text-center text-gray-light">Legacy Sheet</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="xl:col-span-9 xl:row-span-1">
                        <div className="flex flex-col">
                            <div className="card card-home">
                                <div className="container mx-auto pb-5">
                                    <div>
                                        <h1 className="sm:text-2xl pb-2 uppercase font-bold mb-0">Join us on discord</h1>
                                        <a href="https://discord.gg/rsanalysis">
                                            <img className="w-7/8 sm:w-1/3 pb-2" src="./assets/logo.png" />
                                        </a>
                                        <div className="flex flex-row items-center">
                                            <a href="https://discord.gg/rsanalysis">
                                                <img className="w-auto mr-4" src="./assets//google_icons/discord-blue.svg" />
                                            </a>
                                            <a href="https://discord.gg/rsanalysis" className="py-2 font-normal text-xl text-lb hover:text-link" title="">
                                                <h2 className="text-md sm:text-2xl font-bold mb-0">discord.gg/rsanalysis</h2>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-title pb-2">
                                    Affiliates
                                </div>
                                <div className="flex flex-row flex-wrap xl:flex-nowrap xl:gap-12 w-full">
                                    <div className="effect-container">
                                        <div className="card-icon rounded-full bg-black overflow-hidden mb-3">
                                            <a href="https://discord.gg/pvme">
                                                <img src="./assets/contributors/pvme.jpeg" />
                                            </a>
                                        </div>
                                        <li className="block transition-all duration-75 relative">
                                            <a href="https://discord.gg/pvme" className="py-2 font-normal text-xl text-lb hover:text-link" title="">
                                                PvM Encyclopedia
                                            </a>
                                        </li>
                                    </div>
                                    <div className="effect-container">
                                        <div className="card-icon rounded-full bg-black overflow-hidden mb-3">
                                            <a href="https://discord.gg/BGjvs8Y28n">
                                                <img src="./assets/contributors/rsmath.png" />
                                            </a>
                                        </div>
                                        <li className="block transition-all duration-75 relative">
                                            <a href="https://discord.gg/BGjvs8Y28n" className="py-2 font-normal text-xl text-lb hover:text-link" title="">
                                                RS Math Discord
                                            </a>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </>
  )
}

export default App
