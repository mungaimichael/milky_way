/* eslint-disable react/no-unescaped-entities */

const Index = () => {
    return (
        // Hero Section

        <div className=' font-primary  w-100 h-screen flex items-center justify-start flex-col bg-background ' >

            {/*  Header  */}
            <header className=" w-full relative md:pt-6 ">
                <nav className="flex justify-between  md:justify-around" >
                    <div className="flex items-center center">
                        <img src="/images/logo.png" alt="" className="w-8 h-8" />
                        <h1 className="text-white text-3sm md:text-2xl font-black "> milky
                            <span className="text-primary font-normal   "> way</span></h1>
                    </div>
                    <ul className=" hidden absolute h-screen w-full left-0 bg-primary 
                       md:flex flex-col  pl-16 pt-36  justify-start md:flex-row md:justify-around md:items-center md:w-1/4 
                        md:bg-transparent md:relative md:h-auto md:space-y-0 space-y-12 md:p-0   ">
                        <li className="text-secondary text-5xl md:text-primary font-bold 
                         hover:text-secondary hover:cursor-pointer  transition-colors duration-200 ease-in md:text-sm lg:text-lg">Reserve</li>
                        <li className="text-secondary text-5xl md:text-primary font-bold lg:text-lg md:text-sm
                         hover:text-secondary hover:cursor-pointer  transition-colors duration-200 ease-in">Trending</li>

                        <li className="text-secondary text-5xl md:text-primary font-bold lg:text-lg md:text-sm
                         hover:text-secondary  hover:cursor-pointer transition-colors duration-200 ease-in">Delivery</li>

                    </ul>
                    <div className="  p-2 z-10  flex justify-center align-center pt-6  absolule md:hidden ">
                        <img src="/images/burger.png" alt="" className="inline w-8 h-8   " />
                    </div>
                    {/* Search Input  */}

                    <div className="hidden md:flex items-center justify-center  relative md:w-76 lg:w-96 md:w-64 ">
                        <input type="text" className="  p-3 font- rounded-3xl  lg:w-full   text-primary font-semibold md:p-2 md:text-sm" />
                        <img src="/images/search.png" alt="" className="h-6 w-6  lg:right-4 md:right-6  absolute rotate-90 hover:cursor-pointer" />
                    </div>
                    {/* User Profile  */}
                    <div className="hidden md:flex items-center justify-center  hover:cursor-pointer hover:border-b-primary hover:border-b-2 ">
                        <img src="/images/userIcon.png" alt="" className="w-6 h-6" />
                    </div>

                </nav>
            </header>

            {/* Hero Section  */}
            <div className="  h-full w-full flex flex-col items-center justify-center  md:flex-row md:justify-around  ">
                {/* Icons  */}
                <div className=" hidden lg:flex flex-col h-4/6  items-start justify-around ">

                    <div className="flex items-center  " >

                        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                            <img src="/images/icon1.png" alt="" className="w-12" />
                        </div>
                        <div className="flex flex-col justify-around h-full px-3">
                            <h1 className="font-bold"  >
                                Crazy Cool Shakes
                            </h1>
                            <p className="" >
                                Whirlwind of Flavor in Every Creamy Sip
                            </p>
                        </div>

                    </div>
                    <div className="flex items-center   " >

                        <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center">
                            <img src="/images/icon2.png" alt="" className="w-12" />
                        </div>
                        <div className="flex flex-col justify-around h-full px-3">
                            <h1 className="font-bold"  >
                                Sippin' Shake Spectacular
                            </h1>
                            <p className=" " >
                                Indulge in the creamy
                                goodness of our milkshakes!
                            </p>
                        </div>

                    </div>
                    <div className="flex items-center  " >

                        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                            <img src="/images/iceicon.png" alt="" className="w-12" />
                        </div>
                        <div className="flex flex-col justify-around h-full px-3">
                            <h1 className="font-bold"  >
                                Milkshake Marvels
                            </h1>
                            <p className="" >
                                Pure joy served in a frosty
                                milkshake glass
                            </p>
                        </div>
                    </div>
                </div>

                {/* Image  */}
                <div className=" md:w-1/2 lg:w-1/3">
                    <img src="/images/ice1.png" alt="" className="lg:w-full" />
                </div>

                {/* Description  */}
                <div className="lg:w-1/3">
                    <h1 className="text-primary text-4xl lg:text-5xl  mt-4 font-black  font-primary text-left md:text-4xl md:mt-0  ">Minty Chocolate Dream
                    </h1>
                    <p className=" text-primary text-md text-left pt-4 pb-4 ml-3 md:text-xl font-regular md:ml-0 md:w-96 ">
                        It's mint-chocolate perfection
                        ! Our Minty Chocolate Dream milkshake is a
                        refreshing twist on a classic favorite.
                    </p>
                    <button className=" w-52  bg-primary md:w-72 md:text-2xl lg:w-80  font-primary text-white text-xl hover:text-primary hover:bg-secondary flex items-center justify-around
                     font-semibold rounded-3xl px-4 py-2  hover:
                 hover:cursor-pointer transition-colors duration-200 ease-in ">Place Order
                        <img src="/images/order.png" alt="" className="animate-pulse md:w-8 " />
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Index