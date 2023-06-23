
const Index = () => {
    return (
        // Hero Section

        <div className='  w-100 h-screen bg-background ' >

            {/*  Header  */}
            <header className=" h-12 w-full container relative md:pt-6">
                <nav className="flex justify-between" >
                    <div className="flex items-center justify-start">
                        <img src="/images/logo.png" alt="" className="w-8 h-8" />
                        <h1 className="text-white text-3sm md:text-2xl font-black ml-2"> milky
                            <span className="text-primary font-normal   "> way</span></h1>
                    </div>
                    <ul className=" absolute h-screen w-full left-0 bg-primary 
                       flex flex-col items-start pl-16 pt-36  justify-start md:flex-row md:justify-around md:items-center md:w-2/4 md:bg-transparent
                        md:relative md:h-auto md:space-y-0 space-y-12 md:p-0 md:space-0">
                        <li className="text-secondary text-5xl md:text-primary font-bold md:text-lg onHover-cursor ">Reserve</li>
                        <li className="text-secondary text-5xl md:text-primary font-bold md:text-lg">Trending</li>

                        <li className="text-secondary text-5xl md:text-primary font-bold md:text-lg">Delivery</li>

                    </ul>
                    <div className=" bg-secondary p-2 z-10  flex justify-center align-center pt-6  absolule md:hidden ">
                        <img src="/images/burger.png" alt="" className="inline w-8 h-8   " />
                    </div>
                    {/* Search Input  */}

                    <div className="hidden md:flex items-center justify-center  relative md:w-76 xl:w-96   ">
                        <input type="text" className=" p-3 pl-5 font- rounded-3xl  w-full bg-primary text-white font-black " placeholder="search" />
                        <img src="/images/search.png" alt="" className="h-6 w-6 absolute right-4 rotate-90 top-2.5" />
                    </div>

                </nav>
            </header>
        </div>
    )
}

export default Index