/* eslint-disable react/no-unescaped-entities */

const Index = () => {
    return (
        // Hero Section

        <div className='  w-100 h-screen flex items-center justify-start flex-col bg-background ' >

            {/*  Header  */}
            <header className=" h-12 w-full relative md:pt-6 ">
                <nav className="flex justify-between min-w-full md:justify-around" >
                    <div className="flex items-center center">
                        <img src="/images/logo.png" alt="" className="w-8 h-8" />
                        <h1 className="text-white text-3sm md:text-2xl font-black "> milky
                            <span className="text-primary font-normal   "> way</span></h1>
                    </div>
                    <ul className=" hidden absolute h-screen w-full left-0 bg-primary 
                       md:flex flex-col  pl-16 pt-36  justify-start md:flex-row md:justify-around md:items-center md:w-1/4  md:bg-transparent
                        md:relative md:h-auto md:space-y-0 space-y-12 md:p-0 ">
                        <li className="text-secondary text-5xl md:text-primary font-bold md:text-lg hover:text-secondary hover:cursor-pointer  transition-colors duration-200 ease-in ">Reserve</li>
                        <li className="text-secondary text-5xl md:text-primary font-bold md:text-lg hover:text-secondary hover:cursor-pointer  transition-colors duration-200 ease-in">Trending</li>

                        <li className="text-secondary text-5xl md:text-primary font-bold md:text-lg hover:text-secondary hover:cursor-pointer transition-colors duration-200 ease-in">Delivery</li>

                    </ul>
                    <div className="  p-2 z-10  flex justify-center align-center pt-6  absolule md:hidden ">
                        <img src="/images/burger.png" alt="" className="inline w-8 h-8   " />
                    </div>
                    {/* Search Input  */}

                    <div className="hidden md:flex items-center justify-center  relative md:w-76 xl:w-96   ">
                        <input type="text" className="  p-3 pl-5 font- rounded-3xl  w-full  text-primary font-semibold  focus:outline-0  " />
                        <img src="/images/search.png" alt="" className="h-6 w-6  right-4  absolute rotate-90 hover:cursor-pointer" />
                    </div>
                    {/* User Profile  */}
                    <div className="hidden md:flex items-center justify-center  hover:cursor-pointer hover:border-b-primary hover:border-b-2 ">
                        <img src="/images/userIcon.png" alt="" className="w-6 h-6" />
                    </div>

                </nav>
            </header>

            {/* Hero Section  */}
            <div className="flex flex-col items-start justify-start w-full h-full md:pt-24 ">
                <img src="/images/ice1.png" alt="" className="md:w-1/3 self-center px-2" />
                <h1 className="text-primary  p-3 text-5xl ml-3 mt-4 md:text-7xl font-black md:w-1/2 font-primary text-left ">Minty Chocolate Dream
                </h1>
                <p className="text-primary text-sm text-left p-3 ml-3 md:text-3xl font-regular  md:w-1/2 ">
                    It's mint-chocolate perfection
                    ! Our Minty Chocolate Dream milkshake is a
                    refreshing twist on a classic favorite.

                </p>
                <button className="bg-primary font-primary text-white text-xl md:text-3xl w-4/6  flex items-center justify-around font-semibold rounded-3xl px-4 py-2 ml-4 hover:bg-secondary
                 hover:cursor-pointer transition-colors duration-200 ease-in">Place Order
                    <img src="/images/order.png" alt="" className="animate-pulse " />
                </button>
            </div>

        </div>
    )
}

export default Index