
const Index = () => {
    return (
        // Hero Section

        <div className='  w-100 h-screen bg-background ' >

            {/*  Header  */}
            <header className=" h-12 w-full relative md:pt-6">
                <nav className="flex justify-around center min-w-full" >
                    <div className="flex items-center center">
                        <img src="/images/logo.png" alt="" className="w-8 h-8" />
                        <h1 className="text-white text-3sm md:text-2xl font-black "> milky
                            <span className="text-primary font-normal   "> way</span></h1>
                    </div>
                    <ul className=" absolute h-screen w-full left-0 bg-primary 
                       flex flex-col  pl-16 pt-36  justify-start md:flex-row md:justify-around md:items-center md:w-1/4  md:bg-transparent
                        md:relative md:h-auto md:space-y-0 space-y-12 md:p-0 ">
                        <li className="text-secondary text-5xl md:text-primary font-bold md:text-lg hover:text-secondary hover:cursor-pointer  transition-colors duration-200 ease-in ">Reserve</li>
                        <li className="text-secondary text-5xl md:text-primary font-bold md:text-lg hover:text-secondary hover:cursor-pointer  transition-colors duration-200 ease-in">Trending</li>

                        <li className="text-secondary text-5xl md:text-primary font-bold md:text-lg hover:text-secondary hover:cursor-pointer transition-colors duration-200 ease-in">Delivery</li>

                    </ul>
                    <div className=" bg-secondary p-2 z-10  flex justify-center align-center pt-6  absolule md:hidden ">
                        <img src="/images/burger.png" alt="" className="inline w-8 h-8   " />
                    </div>
                    {/* Search Input  */}

                    <div className="hidden md:flex items-center justify-center  relative md:w-76 xl:w-96   ">
                        <input type="text" className=" p-3 pl-5 font- rounded-3xl  w-full bg-primary text-white font-black border-0 focus:outline-0  " />
                        <img src="/images/search.png" alt="" className="h-6 w-6  right-4  absolute rotate-90 hover:cursor-pointer" />
                    </div>
                    {/* User Profile  */}
                    <div className="flex items-center justify-center  hover:cursor-pointer hover:border-b-primary hover:border-b-2 ">
                        <img src="/images/userIcon.png" alt="" className="w-6 h-6" />
                    </div>

                </nav>
            </header>
        </div>
    )
}

export default Index